import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'room_effect_reward_get' })
export class RoomEffectRewardGet extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'level', type: 'integer' })
  level: number;

  @Field(type => Int)
  @Column({ name: 'reward_type', type: 'integer' })
  rewardType: number;

  @Field(type => Int)
  @Column({ name: 'reward_id', type: 'integer' })
  rewardId: number;

  @Field(type => Int)
  @Column({ name: 'max_count', type: 'integer' })
  maxCount: number;

  @Field(type => Int)
  @Column({ name: 'inc_step', type: 'integer' })
  incStep: number;

  @Field(type => Int)
  @Column({ name: 'interval_second', type: 'integer' })
  intervalSecond: number;

}

