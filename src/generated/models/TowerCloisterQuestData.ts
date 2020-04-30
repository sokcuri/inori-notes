import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'tower_cloister_quest_data' })
export class TowerCloisterQuestData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  tower_cloister_quest_id: number;

  @Field()
  @Column('integer')
  daily_limit: number;

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
  fix_reward_group_id: number;

  @Field()
  @Column('integer')
  drop_reward_group_id: number;

  @Field()
  @Column('integer')
  background_1: number;

  @Field()
  @Column('integer')
  wave_group_id_1: number;

  @Field()
  @Column('integer')
  background_2: number;

  @Field()
  @Column('integer')
  wave_group_id_2: number;

  @Field()
  @Column('integer')
  background_3: number;

  @Field()
  @Column('integer')
  wave_group_id_3: number;

  @Field()
  @Column('text')
  wave_bgm: string;

  @Field()
  @Column('integer')
  reward_image_1: number;

  @Field()
  @Column('integer')
  reward_image_2: number;

  @Field()
  @Column('integer')
  reward_image_3: number;

  @Field()
  @Column('integer')
  reward_image_4: number;

  @Field()
  @Column('integer')
  reward_image_5: number;

  @Field()
  @Column('integer')
  w1_enemy_position_x_1: number;

  @Field()
  @Column('integer')
  w1_enemy_local_position_y_1: number;

  @Field()
  @Column('real')
  w1_enemy_size_1: number;

  @Field()
  @Column('integer')
  w1_enemy_position_x_2: number;

  @Field()
  @Column('integer')
  w1_enemy_local_position_y_2: number;

  @Field()
  @Column('real')
  w1_enemy_size_2: number;

  @Field()
  @Column('integer')
  w1_enemy_position_x_3: number;

  @Field()
  @Column('integer')
  w1_enemy_local_position_y_3: number;

  @Field()
  @Column('real')
  w1_enemy_size_3: number;

  @Field()
  @Column('integer')
  w1_enemy_position_x_4: number;

  @Field()
  @Column('integer')
  w1_enemy_local_position_y_4: number;

  @Field()
  @Column('real')
  w1_enemy_size_4: number;

  @Field()
  @Column('integer')
  w1_enemy_position_x_5: number;

  @Field()
  @Column('integer')
  w1_enemy_local_position_y_5: number;

  @Field()
  @Column('real')
  w1_enemy_size_5: number;

  @Field()
  @Column('integer')
  w2_enemy_position_x_1: number;

  @Field()
  @Column('integer')
  w2_enemy_local_position_y_1: number;

  @Field()
  @Column('real')
  w2_enemy_size_1: number;

  @Field()
  @Column('integer')
  w2_enemy_position_x_2: number;

  @Field()
  @Column('integer')
  w2_enemy_local_position_y_2: number;

  @Field()
  @Column('real')
  w2_enemy_size_2: number;

  @Field()
  @Column('integer')
  w2_enemy_position_x_3: number;

  @Field()
  @Column('integer')
  w2_enemy_local_position_y_3: number;

  @Field()
  @Column('real')
  w2_enemy_size_3: number;

  @Field()
  @Column('integer')
  w2_enemy_position_x_4: number;

  @Field()
  @Column('integer')
  w2_enemy_local_position_y_4: number;

  @Field()
  @Column('real')
  w2_enemy_size_4: number;

  @Field()
  @Column('integer')
  w2_enemy_position_x_5: number;

  @Field()
  @Column('integer')
  w2_enemy_local_position_y_5: number;

  @Field()
  @Column('real')
  w2_enemy_size_5: number;

  @Field()
  @Column('integer')
  w3_enemy_position_x_1: number;

  @Field()
  @Column('integer')
  w3_enemy_local_position_y_1: number;

  @Field()
  @Column('real')
  w3_enemy_size_1: number;

  @Field()
  @Column('integer')
  w3_enemy_position_x_2: number;

  @Field()
  @Column('integer')
  w3_enemy_local_position_y_2: number;

  @Field()
  @Column('real')
  w3_enemy_size_2: number;

  @Field()
  @Column('integer')
  w3_enemy_position_x_3: number;

  @Field()
  @Column('integer')
  w3_enemy_local_position_y_3: number;

  @Field()
  @Column('real')
  w3_enemy_size_3: number;

  @Field()
  @Column('integer')
  w3_enemy_position_x_4: number;

  @Field()
  @Column('integer')
  w3_enemy_local_position_y_4: number;

  @Field()
  @Column('real')
  w3_enemy_size_4: number;

  @Field()
  @Column('integer')
  w3_enemy_position_x_5: number;

  @Field()
  @Column('integer')
  w3_enemy_local_position_y_5: number;

  @Field()
  @Column('real')
  w3_enemy_size_5: number;

  @Field()
  @Column('integer')
  background: number;

  @Field()
  @Column('integer')
  bg_position: number;

}

