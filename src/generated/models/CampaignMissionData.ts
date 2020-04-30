import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'campaign_mission_data' })
export class CampaignMissionData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'mission_id', type: 'integer' })
  missionId: number;

  @Field()
  @Column({ name: 'campaign_id', type: 'integer' })
  campaignId: number;

  @Field()
  @Column({ name: 'type', type: 'integer' })
  type: number;

  @Field()
  @Column({ name: 'disp_group', type: 'integer' })
  dispGroup: number;

  @Field()
  @Column({ name: 'category_icon', type: 'integer' })
  categoryIcon: number;

  @Field()
  @Column({ name: 'description', type: 'text' })
  description: string;

  @Field()
  @Column({ name: 'mission_condition', type: 'integer' })
  missionCondition: number;

  @Field()
  @Column({ name: 'condition_value_1', type: 'integer', nullable: true })
  conditionValue1: number;

  @Field()
  @Column({ name: 'condition_value_2', type: 'integer', nullable: true })
  conditionValue2: number;

  @Field()
  @Column({ name: 'condition_value_3', type: 'integer', nullable: true })
  conditionValue3: number;

  @Field()
  @Column({ name: 'condition_value_4', type: 'integer', nullable: true })
  conditionValue4: number;

  @Field()
  @Column({ name: 'condition_value_5', type: 'integer', nullable: true })
  conditionValue5: number;

  @Field()
  @Column({ name: 'condition_value_6', type: 'integer', nullable: true })
  conditionValue6: number;

  @Field()
  @Column({ name: 'condition_value_7', type: 'integer', nullable: true })
  conditionValue7: number;

  @Field()
  @Column({ name: 'condition_value_8', type: 'integer', nullable: true })
  conditionValue8: number;

  @Field()
  @Column({ name: 'condition_value_9', type: 'integer', nullable: true })
  conditionValue9: number;

  @Field()
  @Column({ name: 'condition_value_10', type: 'integer', nullable: true })
  conditionValue10: number;

  @Field()
  @Column({ name: 'condition_num', type: 'integer' })
  conditionNum: number;

  @Field()
  @Column({ name: 'campaign_mission_reward_id', type: 'integer' })
  campaignMissionRewardId: number;

  @Field()
  @Column({ name: 'system_id', type: 'integer', nullable: true })
  systemId: number;

  @Field()
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field()
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

  @Field()
  @Column({ name: 'min_level', type: 'integer' })
  minLevel: number;

  @Field()
  @Column({ name: 'max_level', type: 'integer' })
  maxLevel: number;

  @Field()
  @Column({ name: 'title_color_id', type: 'integer' })
  titleColorId: number;

  @Field()
  @Column({ name: 'visible_flag', type: 'integer' })
  visibleFlag: number;

  @Field()
  @Column({ name: 'mark_flag', type: 'integer' })
  markFlag: number;

}

