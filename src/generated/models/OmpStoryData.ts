import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'omp_story_data' })
export class OmpStoryData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'omp_story_id', type: 'integer' })
  ompStoryId: number;

  @Field()
  @Column({ name: 'event_id', type: 'integer' })
  eventId: number;

  @Field()
  @Column({ name: 'condition_quest_id', type: 'integer' })
  conditionQuestId: number;

  @Field()
  @Column({ name: 'condition_boss_id', type: 'integer' })
  conditionBossId: number;

  @Field()
  @Column({ name: 'story_seq', type: 'integer' })
  storySeq: number;

  @Field()
  @Column({ name: 'is_readable_on_result', type: 'integer' })
  isReadableOnResult: number;

  @Field()
  @Column({ name: 'reward_type', type: 'integer' })
  rewardType: number;

  @Field()
  @Column({ name: 'reward_id', type: 'integer' })
  rewardId: number;

  @Field()
  @Column({ name: 'reward_count', type: 'integer' })
  rewardCount: number;

  @Field()
  @Column({ name: 'sub_title', type: 'text' })
  subTitle: string;

}

