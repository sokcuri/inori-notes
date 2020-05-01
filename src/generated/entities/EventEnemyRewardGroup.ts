import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'event_enemy_reward_group' })
export class EventEnemyRewardGroup extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => Int)
  @Column({ name: 'reward_group_id', type: 'integer' })
  rewardGroupId: number;

  @Field(type => Int)
  @Column({ name: 'reward_type', type: 'integer' })
  rewardType: number;

  @Field(type => Int)
  @Column({ name: 'reward_id', type: 'integer' })
  rewardId: number;

  @Field(type => Int)
  @Column({ name: 'reward_num', type: 'integer' })
  rewardNum: number;

  @Field(type => Int)
  @Column({ name: 'odds', type: 'integer' })
  odds: number;

}

