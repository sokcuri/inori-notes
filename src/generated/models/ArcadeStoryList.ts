import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'arcade_story_list' })
export class ArcadeStoryList extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'story_id', type: 'integer' })
  storyId: number;

  @Field()
  @Column({ name: 'arcade_id', type: 'integer' })
  arcadeId: number;

  @Field()
  @Column({ name: 'sub_title', type: 'text' })
  subTitle: string;

}

