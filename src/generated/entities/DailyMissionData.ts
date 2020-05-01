import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'daily_mission_data' })
export class DailyMissionData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'daily_mission_id', type: 'integer' })
  dailyMissionId: number;

  @Field(type => Int)
  @Column({ name: 'disp_group', type: 'integer' })
  dispGroup: number;

  @Field(type => Int)
  @Column({ name: 'category_icon', type: 'integer' })
  categoryIcon: number;

  @Field(type => String)
  @Column({ name: 'description', type: 'text' })
  description: string;

  @Field(type => Int)
  @Column({ name: 'mission_condition', type: 'integer' })
  missionCondition: number;

  @Field(type => Int)
  @Column({ name: 'condition_value_1', type: 'integer', nullable: true })
  conditionValue1: number;

  @Field(type => Int)
  @Column({ name: 'condition_value_2', type: 'integer', nullable: true })
  conditionValue2: number;

  @Field(type => Int)
  @Column({ name: 'condition_value_3', type: 'integer', nullable: true })
  conditionValue3: number;

  @Field(type => Int)
  @Column({ name: 'condition_num', type: 'integer' })
  conditionNum: number;

  @Field(type => Int)
  @Column({ name: 'mission_reward_id', type: 'integer' })
  missionRewardId: number;

  @Field(type => Int)
  @Column({ name: 'system_id', type: 'integer', nullable: true })
  systemId: number;

  @Field(type => String)
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field(type => String)
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

  @Field(type => Int)
  @Column({ name: 'min_level', type: 'integer' })
  minLevel: number;

  @Field(type => Int)
  @Column({ name: 'max_level', type: 'integer' })
  maxLevel: number;

  @Field(type => Int)
  @Column({ name: 'title_color_id', type: 'integer' })
  titleColorId: number;

  @Field(type => Int)
  @Column({ name: 'visible_flag', type: 'integer' })
  visibleFlag: number;

}

