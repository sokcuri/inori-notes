import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'cooperation_quest_data' })
export class CooperationQuestData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  quest_id: number;

  @Field()
  @Column('text')
  quest_name: string;

  @Field()
  @Column('integer')
  difficulty_level: number;

  @Field()
  @Column('integer')
  limit_team_level: number;

  @Field()
  @Column('integer')
  team_exp: number;

  @Field()
  @Column('integer')
  exp: number;

  @Field()
  @Column('integer')
  limit_time: number;

  @Field()
  @Column('integer')
  clear_reward_group_id: number;

  @Field()
  @Column('integer')
  odds_group_id: number;

  @Field()
  @Column('integer')
  lobby_background: number;

  @Field()
  @Column('integer')
  background_1: number;

  @Field()
  @Column('integer')
  wave_group_id_1: number;

  @Field()
  @Column('text')
  wave_bgm_sheet_id_1: string;

  @Field()
  @Column('text')
  wave_bgm_que_id_1: string;

  @Field()
  @Column('integer')
  background_2: number;

  @Field()
  @Column('integer')
  wave_group_id_2: number;

  @Field()
  @Column('text')
  wave_bgm_sheet_id_2: string;

  @Field()
  @Column('text')
  wave_bgm_que_id_2: string;

  @Field()
  @Column('integer')
  background_3: number;

  @Field()
  @Column('integer')
  wave_group_id_3: number;

  @Field()
  @Column('text')
  wave_bgm_sheet_id_3: string;

  @Field()
  @Column('text')
  wave_bgm_que_id_3: string;

  @Field()
  @Column('integer')
  enemy_image_1: number;

  @Field()
  @Column('integer')
  enemy_image_2: number;

  @Field()
  @Column('integer')
  enemy_image_3: number;

  @Field()
  @Column('integer')
  enemy_image_4: number;

  @Field()
  @Column('integer')
  enemy_image_5: number;

  @Field()
  @Column('integer')
  first_reward_image_1: number;

  @Field()
  @Column('integer')
  first_reward_image_2: number;

  @Field()
  @Column('integer')
  first_reward_image_3: number;

  @Field()
  @Column('integer')
  first_reward_image_4: number;

  @Field()
  @Column('integer')
  first_reward_image_5: number;

  @Field()
  @Column('integer')
  repeat_reward_image_1: number;

  @Field()
  @Column('integer')
  repeat_reward_image_2: number;

  @Field()
  @Column('integer')
  repeat_reward_image_3: number;

  @Field()
  @Column('integer')
  cooperation_quest_detail_bg_id: number;

  @Field()
  @Column('integer')
  cooperation_quest_detail_bg_position: number;

  @Field()
  @Column('integer')
  main_enemy_image_wave_1: number;

  @Field()
  @Column('integer')
  sub_enemy_image_wave_1_1: number;

  @Field()
  @Column('integer')
  sub_enemy_image_wave_1_2: number;

  @Field()
  @Column('integer')
  sub_enemy_image_wave_1_3: number;

  @Field()
  @Column('integer')
  sub_enemy_image_wave_1_4: number;

  @Field()
  @Column('integer')
  main_enemy_image_wave_2: number;

  @Field()
  @Column('integer')
  sub_enemy_image_wave_2_1: number;

  @Field()
  @Column('integer')
  sub_enemy_image_wave_2_2: number;

  @Field()
  @Column('integer')
  sub_enemy_image_wave_2_3: number;

  @Field()
  @Column('integer')
  sub_enemy_image_wave_2_4: number;

  @Field()
  @Column('integer')
  main_enemy_image_wave_3: number;

  @Field()
  @Column('integer')
  sub_enemy_image_wave_3_1: number;

  @Field()
  @Column('integer')
  sub_enemy_image_wave_3_2: number;

  @Field()
  @Column('integer')
  sub_enemy_image_wave_3_3: number;

  @Field()
  @Column('integer')
  sub_enemy_image_wave_3_4: number;

  @Field()
  @Column('text')
  quest_comment: string;

  @Field()
  @Column('integer')
  unlock_quest_id_1: number;

  @Field()
  @Column('integer')
  unlock_quest_id_2: number;

}

