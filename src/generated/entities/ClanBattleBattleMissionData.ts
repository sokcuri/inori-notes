import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'clan_battle_battle_mission_data' })
export class ClanBattleBattleMissionData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'mission_id', type: 'integer' })
  missionId: number;

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
  @Column({ name: 'condition_value_4', type: 'integer', nullable: true })
  conditionValue4: number;

  @Field(type => Int)
  @Column({ name: 'condition_value_5', type: 'integer', nullable: true })
  conditionValue5: number;

  @Field(type => Int)
  @Column({ name: 'condition_value_6', type: 'integer', nullable: true })
  conditionValue6: number;

  @Field(type => Int)
  @Column({ name: 'condition_value_7', type: 'integer', nullable: true })
  conditionValue7: number;

  @Field(type => Int)
  @Column({ name: 'condition_value_8', type: 'integer', nullable: true })
  conditionValue8: number;

  @Field(type => Int)
  @Column({ name: 'condition_value_9', type: 'integer', nullable: true })
  conditionValue9: number;

  @Field(type => Int)
  @Column({ name: 'condition_value_10', type: 'integer', nullable: true })
  conditionValue10: number;

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

}

