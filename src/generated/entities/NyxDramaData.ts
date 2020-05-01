import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'nyx_drama_data' })
export class NyxDramaData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'drama_id', type: 'integer' })
  dramaId: number;

  @Field(type => Int)
  @Column({ name: 'story_phase', type: 'integer' })
  storyPhase: number;

  @Field(type => String)
  @Column({ name: 'title', type: 'text' })
  title: string;

  @Field(type => String)
  @Column({ name: 'sub_title', type: 'text' })
  subTitle: string;

  @Field(type => Int)
  @Column({ name: 'condition_unlocked_story_id', type: 'integer' })
  conditionUnlockedStoryId: number;

  @Field(type => Int)
  @Column({ name: 'condition_locked_story_id', type: 'integer' })
  conditionLockedStoryId: number;

}

