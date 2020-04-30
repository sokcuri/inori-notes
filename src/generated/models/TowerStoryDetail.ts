import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'tower_story_detail' })
export class TowerStoryDetail extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'story_id', type: 'integer' })
  storyId: number;

  @Field()
  @Column({ name: 'story_group_id', type: 'integer' })
  storyGroupId: number;

  @Field()
  @Column({ name: 'title', type: 'text' })
  title: string;

  @Field()
  @Column({ name: 'sub_title', type: 'text' })
  subTitle: string;

  @Field()
  @Column({ name: 'visible_type', type: 'integer' })
  visibleType: number;

  @Field()
  @Column({ name: 'story_end', type: 'integer' })
  storyEnd: number;

  @Field()
  @Column({ name: 'pre_story_id', type: 'integer' })
  preStoryId: number;

  @Field()
  @Column({ name: 'love_level', type: 'integer' })
  loveLevel: number;

  @Field()
  @Column({ name: 'requirement_id', type: 'integer' })
  requirementId: number;

  @Field()
  @Column({ name: 'unlock_quest_id', type: 'integer' })
  unlockQuestId: number;

  @Field()
  @Column({ name: 'story_quest_id', type: 'integer' })
  storyQuestId: number;

  @Field()
  @Column({ name: 'reward_type_1', type: 'integer' })
  rewardType1: number;

  @Field()
  @Column({ name: 'reward_id_1', type: 'integer' })
  rewardId1: number;

  @Field()
  @Column({ name: 'reward_value_1', type: 'integer' })
  rewardValue1: number;

  @Field()
  @Column({ name: 'reward_type_2', type: 'integer' })
  rewardType2: number;

  @Field()
  @Column({ name: 'reward_id_2', type: 'integer' })
  rewardId2: number;

  @Field()
  @Column({ name: 'reward_value_2', type: 'integer' })
  rewardValue2: number;

  @Field()
  @Column({ name: 'reward_type_3', type: 'integer' })
  rewardType3: number;

  @Field()
  @Column({ name: 'reward_id_3', type: 'integer' })
  rewardId3: number;

  @Field()
  @Column({ name: 'reward_value_3', type: 'integer' })
  rewardValue3: number;

  @Field()
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field()
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

}

