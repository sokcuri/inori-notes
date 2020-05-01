import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'nyx_story_data' })
export class NyxStoryData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'story_id', type: 'integer' })
  storyId: number;

  @Field(type => Int)
  @Column({ name: 'story_seq', type: 'integer' })
  storySeq: number;

  @Field(type => Int)
  @Column({ name: 'story_phase', type: 'integer' })
  storyPhase: number;

  @Field(type => String)
  @Column({ name: 'title', type: 'text' })
  title: string;

  @Field(type => String)
  @Column({ name: 'sub_title', type: 'text' })
  subTitle: string;

  @Field(type => String)
  @Column({ name: 'read_condition_time', type: 'text' })
  readConditionTime: string;

  @Field(type => Int)
  @Column({ name: 'condition_quest_id', type: 'integer' })
  conditionQuestId: number;

  @Field(type => Int)
  @Column({ name: 'condition_boss_count', type: 'integer' })
  conditionBossCount: number;

  @Field(type => Int)
  @Column({ name: 'adv_flg', type: 'integer' })
  advFlg: number;

  @Field(type => Int)
  @Column({ name: 'adv_id', type: 'integer' })
  advId: number;

}

