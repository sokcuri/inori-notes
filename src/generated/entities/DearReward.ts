import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'dear_reward' })
export class DearReward extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => Int)
  @Column({ name: 'event_id', type: 'integer' })
  eventId: number;

  @Field(type => Int)
  @Column({ name: 'chara_index', type: 'integer' })
  charaIndex: number;

  @Field(type => Int)
  @Column({ name: 'dear_point', type: 'integer' })
  dearPoint: number;

  @Field(type => String)
  @Column({ name: 'mission_detail', type: 'text' })
  missionDetail: string;

  @Field(type => Int)
  @Column({ name: 'reward_type_1', type: 'integer' })
  rewardType1: number;

  @Field(type => Int)
  @Column({ name: 'reward_id_1', type: 'integer' })
  rewardId1: number;

  @Field(type => Int)
  @Column({ name: 'reward_count_1', type: 'integer' })
  rewardCount1: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_2', type: 'integer' })
  rewardType2: number;

  @Field(type => Int)
  @Column({ name: 'reward_id_2', type: 'integer' })
  rewardId2: number;

  @Field(type => Int)
  @Column({ name: 'reward_count_2', type: 'integer' })
  rewardCount2: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_3', type: 'integer' })
  rewardType3: number;

  @Field(type => Int)
  @Column({ name: 'reward_id_3', type: 'integer' })
  rewardId3: number;

  @Field(type => Int)
  @Column({ name: 'reward_count_3', type: 'integer' })
  rewardCount3: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_4', type: 'integer' })
  rewardType4: number;

  @Field(type => Int)
  @Column({ name: 'reward_id_4', type: 'integer' })
  rewardId4: number;

  @Field(type => Int)
  @Column({ name: 'reward_count_4', type: 'integer' })
  rewardCount4: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_5', type: 'integer' })
  rewardType5: number;

  @Field(type => Int)
  @Column({ name: 'reward_id_5', type: 'integer' })
  rewardId5: number;

  @Field(type => Int)
  @Column({ name: 'reward_count_5', type: 'integer' })
  rewardCount5: number;

}

