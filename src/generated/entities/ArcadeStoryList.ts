import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'arcade_story_list' })
export class ArcadeStoryList extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'story_id', type: 'integer' })
  storyId: number;

  @Field(type => Int)
  @Column({ name: 'arcade_id', type: 'integer' })
  arcadeId: number;

  @Field(type => String)
  @Column({ name: 'sub_title', type: 'text' })
  subTitle: string;

}

