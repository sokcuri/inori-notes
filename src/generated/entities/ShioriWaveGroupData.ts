import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'shiori_wave_group_data' })
export class ShioriWaveGroupData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'wave_group_id', type: 'integer' })
  waveGroupId: number;

  @Field(type => Int)
  @Column({ name: 'difficulty', type: 'integer' })
  difficulty: number;

  @Field(type => Int)
  @Column({ name: 'wave', type: 'integer' })
  wave: number;

  @Field(type => Int)
  @Column({ name: 'enemy_id_1', type: 'integer' })
  enemyId1: number;

  @Field(type => Int)
  @Column({ name: 'enemy_id_2', type: 'integer' })
  enemyId2: number;

  @Field(type => Int)
  @Column({ name: 'enemy_id_3', type: 'integer' })
  enemyId3: number;

  @Field(type => Int)
  @Column({ name: 'enemy_id_4', type: 'integer' })
  enemyId4: number;

  @Field(type => Int)
  @Column({ name: 'enemy_id_5', type: 'integer' })
  enemyId5: number;

  @Field(type => Int)
  @Column({ name: 'drop_gold_1', type: 'integer' })
  dropGold1: number;

  @Field(type => Int)
  @Column({ name: 'reward_group_id_1', type: 'integer' })
  rewardGroupId1: number;

  @Field(type => Int)
  @Column({ name: 'disp_reward_type_1', type: 'integer' })
  dispRewardType1: number;

  @Field(type => Int)
  @Column({ name: 'disp_reward_id_1', type: 'integer' })
  dispRewardId1: number;

  @Field(type => Int)
  @Column({ name: 'reward_lot_count_1', type: 'integer' })
  rewardLotCount1: number;

  @Field(type => Int)
  @Column({ name: 'reward_odds_1', type: 'integer' })
  rewardOdds1: number;

  @Field(type => Int)
  @Column({ name: 'drop_gold_2', type: 'integer' })
  dropGold2: number;

  @Field(type => Int)
  @Column({ name: 'reward_group_id_2', type: 'integer' })
  rewardGroupId2: number;

  @Field(type => Int)
  @Column({ name: 'disp_reward_type_2', type: 'integer' })
  dispRewardType2: number;

  @Field(type => Int)
  @Column({ name: 'disp_reward_id_2', type: 'integer' })
  dispRewardId2: number;

  @Field(type => Int)
  @Column({ name: 'reward_lot_count_2', type: 'integer' })
  rewardLotCount2: number;

  @Field(type => Int)
  @Column({ name: 'reward_odds_2', type: 'integer' })
  rewardOdds2: number;

  @Field(type => Int)
  @Column({ name: 'drop_gold_3', type: 'integer' })
  dropGold3: number;

  @Field(type => Int)
  @Column({ name: 'reward_group_id_3', type: 'integer' })
  rewardGroupId3: number;

  @Field(type => Int)
  @Column({ name: 'disp_reward_type_3', type: 'integer' })
  dispRewardType3: number;

  @Field(type => Int)
  @Column({ name: 'disp_reward_id_3', type: 'integer' })
  dispRewardId3: number;

  @Field(type => Int)
  @Column({ name: 'reward_lot_count_3', type: 'integer' })
  rewardLotCount3: number;

  @Field(type => Int)
  @Column({ name: 'reward_odds_3', type: 'integer' })
  rewardOdds3: number;

  @Field(type => Int)
  @Column({ name: 'drop_gold_4', type: 'integer' })
  dropGold4: number;

  @Field(type => Int)
  @Column({ name: 'reward_group_id_4', type: 'integer' })
  rewardGroupId4: number;

  @Field(type => Int)
  @Column({ name: 'disp_reward_type_4', type: 'integer' })
  dispRewardType4: number;

  @Field(type => Int)
  @Column({ name: 'disp_reward_id_4', type: 'integer' })
  dispRewardId4: number;

  @Field(type => Int)
  @Column({ name: 'reward_lot_count_4', type: 'integer' })
  rewardLotCount4: number;

  @Field(type => Int)
  @Column({ name: 'reward_odds_4', type: 'integer' })
  rewardOdds4: number;

  @Field(type => Int)
  @Column({ name: 'drop_gold_5', type: 'integer' })
  dropGold5: number;

  @Field(type => Int)
  @Column({ name: 'reward_group_id_5', type: 'integer' })
  rewardGroupId5: number;

  @Field(type => Int)
  @Column({ name: 'disp_reward_type_5', type: 'integer' })
  dispRewardType5: number;

  @Field(type => Int)
  @Column({ name: 'disp_reward_id_5', type: 'integer' })
  dispRewardId5: number;

  @Field(type => Int)
  @Column({ name: 'reward_lot_count_5', type: 'integer' })
  rewardLotCount5: number;

  @Field(type => Int)
  @Column({ name: 'reward_odds_5', type: 'integer' })
  rewardOdds5: number;

  @Field(type => [Int])
  get enemyId() {
    return [this.enemyId1, this.enemyId2, this.enemyId3, this.enemyId4, this.enemyId5];
  }

  @Field(type => [Int])
  get dropGold() {
    return [this.dropGold1, this.dropGold2, this.dropGold3, this.dropGold4, this.dropGold5];
  }

  @Field(type => [Int])
  get rewardGroupId() {
    return [this.rewardGroupId1, this.rewardGroupId2, this.rewardGroupId3, this.rewardGroupId4, this.rewardGroupId5];
  }

  @Field(type => [Int])
  get dispRewardType() {
    return [this.dispRewardType1, this.dispRewardType2, this.dispRewardType3, this.dispRewardType4, this.dispRewardType5];
  }

  @Field(type => [Int])
  get dispRewardId() {
    return [this.dispRewardId1, this.dispRewardId2, this.dispRewardId3, this.dispRewardId4, this.dispRewardId5];
  }

  @Field(type => [Int])
  get rewardLotCount() {
    return [this.rewardLotCount1, this.rewardLotCount2, this.rewardLotCount3, this.rewardLotCount4, this.rewardLotCount5];
  }

  @Field(type => [Int])
  get rewardOdds() {
    return [this.rewardOdds1, this.rewardOdds2, this.rewardOdds3, this.rewardOdds4, this.rewardOdds5];
  }

}

