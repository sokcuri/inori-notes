import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_emblem_mission' })
export class HatsuneEmblemMission extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'mission_id', type: 'integer' })
  missionId: number;

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
  @Column({ name: 'condition_value_1', type: 'integer' })
  conditionValue1: number;

  @Field()
  @Column({ name: 'condition_value_2', type: 'integer' })
  conditionValue2: number;

  @Field()
  @Column({ name: 'condition_value_3', type: 'integer' })
  conditionValue3: number;

  @Field()
  @Column({ name: 'condition_num', type: 'integer' })
  conditionNum: number;

  @Field()
  @Column({ name: 'mission_reward_id', type: 'integer' })
  missionRewardId: number;

  @Field()
  @Column({ name: 'system_id', type: 'integer' })
  systemId: number;

  @Field()
  @Column({ name: 'event_id', type: 'integer' })
  eventId: number;

  @Field()
  @Column({ name: 'visible_flag', type: 'integer' })
  visibleFlag: number;

  @Field()
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field()
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

}

