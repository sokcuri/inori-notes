import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'event_series_wave_group_data' })
export class EventSeriesWaveGroupData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => Int)
  @Column({ name: 'wave_group_id', type: 'integer' })
  waveGroupId: number;

  @Field(type => Int)
  @Column({ name: 'difficulty', type: 'integer' })
  difficulty: number;

  @Field(type => Int)
  @Column({ name: 'wave', type: 'integer' })
  wave: number;

  @Field(type => Int)
  @Column({ name: 'match_lv_min', type: 'integer' })
  matchLvMin: number;

  @Field(type => Int)
  @Column({ name: 'match_lv_max', type: 'integer' })
  matchLvMax: number;

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

}

