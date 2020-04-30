import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'arcade_story_list' })
export class ArcadeStoryList extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  story_id: number;

  @Field()
  @Column('integer')
  arcade_id: number;

  @Field()
  @Column('text')
  sub_title: string;

}

