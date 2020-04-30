import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'tower_quest_data' })
export class TowerQuestData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  tower_quest_id: number;

  @Field()
  @Column('integer')
  tower_area_id: number;

  @Field()
  @Column('integer')
  floor_num: number;

  @Field()
  @Column('integer')
  floor_image_type: number;

  @Field()
  @Column('integer')
  floor_image_add_type: number;

  @Field()
  @Column('integer')
  open_tower_ex_quest_id: number;

  @Field()
  @Column('integer')
  boss_floor_flg: number;

  @Field()
  @Column('integer')
  stamina: number;

  @Field()
  @Column('integer')
  stamina_start: number;

  @Field()
  @Column('integer')
  team_exp: number;

  @Field()
  @Column('integer')
  limit_time: number;

  @Field()
  @Column('integer')
  recovery_hp_rate: number;

  @Field()
  @Column('integer')
  recovery_tp_rate: number;

  @Field()
  @Column('integer')
  start_tp_rate: number;

  @Field()
  @Column('integer')
  reward_image_1: number;

  @Field()
  @Column('integer')
  reward_count_1: number;

  @Field()
  @Column('integer')
  reward_image_2: number;

  @Field()
  @Column('integer')
  reward_count_2: number;

  @Field()
  @Column('integer')
  reward_image_3: number;

  @Field()
  @Column('integer')
  reward_count_3: number;

  @Field()
  @Column('integer')
  reward_image_4: number;

  @Field()
  @Column('integer')
  reward_count_4: number;

  @Field()
  @Column('integer')
  reward_image_5: number;

  @Field()
  @Column('integer')
  reward_count_5: number;

  @Field()
  @Column('integer')
  additional_reward_type: number;

  @Field()
  @Column('integer')
  additional_reward_id: number;

  @Field()
  @Column('integer')
  fix_reward_group_id: number;

  @Field()
  @Column('integer')
  odds_group_id: number;

  @Field()
  @Column('integer')
  chest_id: number;

  @Field()
  @Column('integer')
  background: number;

  @Field()
  @Column('integer')
  bg_position: number;

  @Field()
  @Column('integer')
  wave_group_id: number;

  @Field()
  @Column('integer')
  enemy_position_x_1: number;

  @Field()
  @Column('integer')
  enemy_local_position_y_1: number;

  @Field()
  @Column('real')
  enemy_size_1: number;

  @Field()
  @Column('integer')
  enemy_position_x_2: number;

  @Field()
  @Column('integer')
  enemy_local_position_y_2: number;

  @Field()
  @Column('real')
  enemy_size_2: number;

  @Field()
  @Column('integer')
  enemy_position_x_3: number;

  @Field()
  @Column('integer')
  enemy_local_position_y_3: number;

  @Field()
  @Column('real')
  enemy_size_3: number;

  @Field()
  @Column('integer')
  enemy_position_x_4: number;

  @Field()
  @Column('integer')
  enemy_local_position_y_4: number;

  @Field()
  @Column('real')
  enemy_size_4: number;

  @Field()
  @Column('integer')
  enemy_position_x_5: number;

  @Field()
  @Column('integer')
  enemy_local_position_y_5: number;

  @Field()
  @Column('real')
  enemy_size_5: number;

  @Field()
  @Column('text')
  wave_bgm: string;

  @Field()
  @Column('integer')
  clp_flag: number;

  @Field()
  @Column('integer')
  skip_level: number;

}

