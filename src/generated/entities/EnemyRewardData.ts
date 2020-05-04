import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'enemy_reward_data' })
export class EnemyRewardData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'drop_reward_id', type: 'integer' })
  dropRewardId: number;

  @Field(type => Int)
  @Column({ name: 'drop_count', type: 'integer' })
  dropCount: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_1', type: 'integer' })
  rewardType1: number;

  @Field(type => Int)
  @Column({ name: 'reward_id_1', type: 'integer' })
  rewardId1: number;

  @Field(type => Int)
  @Column({ name: 'reward_num_1', type: 'integer' })
  rewardNum1: number;

  @Field(type => Int)
  @Column({ name: 'odds_1', type: 'integer' })
  odds1: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_2', type: 'integer' })
  rewardType2: number;

  @Field(type => Int)
  @Column({ name: 'reward_id_2', type: 'integer' })
  rewardId2: number;

  @Field(type => Int)
  @Column({ name: 'reward_num_2', type: 'integer' })
  rewardNum2: number;

  @Field(type => Int)
  @Column({ name: 'odds_2', type: 'integer' })
  odds2: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_3', type: 'integer' })
  rewardType3: number;

  @Field(type => Int)
  @Column({ name: 'reward_id_3', type: 'integer' })
  rewardId3: number;

  @Field(type => Int)
  @Column({ name: 'reward_num_3', type: 'integer' })
  rewardNum3: number;

  @Field(type => Int)
  @Column({ name: 'odds_3', type: 'integer' })
  odds3: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_4', type: 'integer' })
  rewardType4: number;

  @Field(type => Int)
  @Column({ name: 'reward_id_4', type: 'integer' })
  rewardId4: number;

  @Field(type => Int)
  @Column({ name: 'reward_num_4', type: 'integer' })
  rewardNum4: number;

  @Field(type => Int)
  @Column({ name: 'odds_4', type: 'integer' })
  odds4: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_5', type: 'integer' })
  rewardType5: number;

  @Field(type => Int)
  @Column({ name: 'reward_id_5', type: 'integer' })
  rewardId5: number;

  @Field(type => Int)
  @Column({ name: 'reward_num_5', type: 'integer' })
  rewardNum5: number;

  @Field(type => Int)
  @Column({ name: 'odds_5', type: 'integer' })
  odds5: number;

  @Field(type => [Int])
  get rewardType() {
    return [this.rewardType1, this.rewardType2, this.rewardType3, this.rewardType4, this.rewardType5];
  }

  @Field(type => [Int])
  get rewardId() {
    return [this.rewardId1, this.rewardId2, this.rewardId3, this.rewardId4, this.rewardId5];
  }

  @Field(type => [Int])
  get rewardNum() {
    return [this.rewardNum1, this.rewardNum2, this.rewardNum3, this.rewardNum4, this.rewardNum5];
  }

  @Field(type => [Int])
  get odds() {
    return [this.odds1, this.odds2, this.odds3, this.odds4, this.odds5];
  }

}

