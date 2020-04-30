import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'clan_battle_s_map_data' })
export class ClanBattleSMapData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field()
  @Column({ name: 'clan_battle_id', type: 'integer' })
  clanBattleId: number;

  @Field()
  @Column({ name: 'map_bg', type: 'integer' })
  mapBg: number;

  @Field()
  @Column({ name: 'difficulty', type: 'integer' })
  difficulty: number;

  @Field()
  @Column({ name: 'lap_num_from', type: 'integer' })
  lapNumFrom: number;

  @Field()
  @Column({ name: 'lap_num_to', type: 'integer' })
  lapNumTo: number;

  @Field()
  @Column({ name: 'boss_id_1', type: 'integer' })
  bossId1: number;

  @Field()
  @Column({ name: 'boss_id_2', type: 'integer' })
  bossId2: number;

  @Field()
  @Column({ name: 'boss_id_3', type: 'integer' })
  bossId3: number;

  @Field()
  @Column({ name: 'boss_id_4', type: 'integer' })
  bossId4: number;

  @Field()
  @Column({ name: 'boss_id_5', type: 'integer' })
  bossId5: number;

  @Field()
  @Column({ name: 'extra_battle_flag1', type: 'integer' })
  extraBattleFlag1: number;

  @Field()
  @Column({ name: 'extra_battle_flag2', type: 'integer' })
  extraBattleFlag2: number;

  @Field()
  @Column({ name: 'extra_battle_flag3', type: 'integer' })
  extraBattleFlag3: number;

  @Field()
  @Column({ name: 'extra_battle_flag4', type: 'integer' })
  extraBattleFlag4: number;

  @Field()
  @Column({ name: 'extra_battle_flag5', type: 'integer' })
  extraBattleFlag5: number;

  @Field()
  @Column({ name: 'aura_effect', type: 'integer' })
  auraEffect: number;

  @Field()
  @Column({ name: 'rsl_unlock_lap', type: 'integer' })
  rslUnlockLap: number;

  @Field()
  @Column({ name: 'phase', type: 'integer' })
  phase: number;

  @Field()
  @Column({ name: 'wave_group_id_1', type: 'integer' })
  waveGroupId1: number;

  @Field()
  @Column({ name: 'wave_group_id_2', type: 'integer' })
  waveGroupId2: number;

  @Field()
  @Column({ name: 'wave_group_id_3', type: 'integer' })
  waveGroupId3: number;

  @Field()
  @Column({ name: 'wave_group_id_4', type: 'integer' })
  waveGroupId4: number;

  @Field()
  @Column({ name: 'wave_group_id_5', type: 'integer' })
  waveGroupId5: number;

  @Field()
  @Column({ name: 'fix_reward_id_1', type: 'integer' })
  fixRewardId1: number;

  @Field()
  @Column({ name: 'fix_reward_id_2', type: 'integer' })
  fixRewardId2: number;

  @Field()
  @Column({ name: 'fix_reward_id_3', type: 'integer' })
  fixRewardId3: number;

  @Field()
  @Column({ name: 'fix_reward_id_4', type: 'integer' })
  fixRewardId4: number;

  @Field()
  @Column({ name: 'fix_reward_id_5', type: 'integer' })
  fixRewardId5: number;

  @Field()
  @Column({ name: 'damage_rank_id_1', type: 'integer' })
  damageRankId1: number;

  @Field()
  @Column({ name: 'damage_rank_id_2', type: 'integer' })
  damageRankId2: number;

  @Field()
  @Column({ name: 'damage_rank_id_3', type: 'integer' })
  damageRankId3: number;

  @Field()
  @Column({ name: 'damage_rank_id_4', type: 'integer' })
  damageRankId4: number;

  @Field()
  @Column({ name: 'damage_rank_id_5', type: 'integer' })
  damageRankId5: number;

  @Field()
  @Column({ name: 'reward_gold_coefficient', type: 'real' })
  rewardGoldCoefficient: number;

  @Field()
  @Column({ name: 'limited_mana', type: 'integer' })
  limitedMana: number;

  @Field()
  @Column({ name: 'last_attack_reward_id', type: 'integer' })
  lastAttackRewardId: number;

  @Field()
  @Column({ name: 'score_coefficient_1', type: 'real' })
  scoreCoefficient1: number;

  @Field()
  @Column({ name: 'score_coefficient_2', type: 'real' })
  scoreCoefficient2: number;

  @Field()
  @Column({ name: 'score_coefficient_3', type: 'real' })
  scoreCoefficient3: number;

  @Field()
  @Column({ name: 'score_coefficient_4', type: 'real' })
  scoreCoefficient4: number;

  @Field()
  @Column({ name: 'score_coefficient_5', type: 'real' })
  scoreCoefficient5: number;

  @Field()
  @Column({ name: 'param_adjust_id', type: 'integer' })
  paramAdjustId: number;

  @Field()
  @Column({ name: 'param_adjust_interval', type: 'integer' })
  paramAdjustInterval: number;

}

