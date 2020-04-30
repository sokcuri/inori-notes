import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'clan_battle_2_map_data' })
export class ClanBattle2MapData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  clan_battle_id: number;

  @Field()
  @Column('integer')
  map_bg: number;

  @Field()
  @Column('integer')
  difficulty: number;

  @Field()
  @Column('integer')
  lap_num_from: number;

  @Field()
  @Column('integer')
  lap_num_to: number;

  @Field()
  @Column('integer')
  boss_id_1: number;

  @Field()
  @Column('integer')
  boss_id_2: number;

  @Field()
  @Column('integer')
  boss_id_3: number;

  @Field()
  @Column('integer')
  boss_id_4: number;

  @Field()
  @Column('integer')
  boss_id_5: number;

  @Field()
  @Column('integer')
  aura_effect: number;

  @Field()
  @Column('integer')
  rsl_unlock_lap: number;

  @Field()
  @Column('integer')
  phase: number;

  @Field()
  @Column('integer')
  wave_group_id_1: number;

  @Field()
  @Column('integer')
  wave_group_id_2: number;

  @Field()
  @Column('integer')
  wave_group_id_3: number;

  @Field()
  @Column('integer')
  wave_group_id_4: number;

  @Field()
  @Column('integer')
  wave_group_id_5: number;

  @Field()
  @Column('integer')
  fix_reward_id_1: number;

  @Field()
  @Column('integer')
  fix_reward_id_2: number;

  @Field()
  @Column('integer')
  fix_reward_id_3: number;

  @Field()
  @Column('integer')
  fix_reward_id_4: number;

  @Field()
  @Column('integer')
  fix_reward_id_5: number;

  @Field()
  @Column('integer')
  damage_rank_id_1: number;

  @Field()
  @Column('integer')
  damage_rank_id_2: number;

  @Field()
  @Column('integer')
  damage_rank_id_3: number;

  @Field()
  @Column('integer')
  damage_rank_id_4: number;

  @Field()
  @Column('integer')
  damage_rank_id_5: number;

  @Field()
  @Column('real')
  reward_gold_coefficient: number;

  @Field()
  @Column('integer')
  limited_mana: number;

  @Field()
  @Column('integer')
  last_attack_reward_id: number;

  @Field()
  @Column('real')
  score_coefficient_1: number;

  @Field()
  @Column('real')
  score_coefficient_2: number;

  @Field()
  @Column('real')
  score_coefficient_3: number;

  @Field()
  @Column('real')
  score_coefficient_4: number;

  @Field()
  @Column('real')
  score_coefficient_5: number;

  @Field()
  @Column('integer')
  param_adjust_id: number;

  @Field()
  @Column('integer')
  param_adjust_interval: number;

}

