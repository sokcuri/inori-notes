import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'omp_story_data' })
export class OmpStoryData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'omp_story_id', type: 'integer' })
  ompStoryId: number;

  @Field(type => Int)
  @Column({ name: 'event_id', type: 'integer' })
  eventId: number;

  @Field(type => Int)
  @Column({ name: 'condition_quest_id', type: 'integer' })
  conditionQuestId: number;

  @Field(type => Int)
  @Column({ name: 'condition_boss_id', type: 'integer' })
  conditionBossId: number;

  @Field(type => Int)
  @Column({ name: 'story_seq', type: 'integer' })
  storySeq: number;

  @Field(type => Int)
  @Column({ name: 'is_readable_on_result', type: 'integer' })
  isReadableOnResult: number;

  @Field(type => Int)
  @Column({ name: 'reward_type', type: 'integer' })
  rewardType: number;

  @Field(type => Int)
  @Column({ name: 'reward_id', type: 'integer' })
  rewardId: number;

  @Field(type => Int)
  @Column({ name: 'reward_count', type: 'integer' })
  rewardCount: number;

  @Field(type => String)
  @Column({ name: 'sub_title', type: 'text' })
  subTitle: string;

}

