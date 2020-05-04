import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'kaiser_extermination_reward' })
export class KaiserExterminationReward extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'extermination_reward_group', type: 'integer' })
  exterminationRewardGroup: number;

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

  @Field(type => [Int])
  get rewardType() {
    return [this.rewardType1, this.rewardType2, this.rewardType3, this.rewardType4, this.rewardType5];
  }

  @Field(type => [Int])
  get rewardId() {
    return [this.rewardId1, this.rewardId2, this.rewardId3, this.rewardId4, this.rewardId5];
  }

  @Field(type => [Int])
  get rewardCount() {
    return [this.rewardCount1, this.rewardCount2, this.rewardCount3, this.rewardCount4, this.rewardCount5];
  }

}

