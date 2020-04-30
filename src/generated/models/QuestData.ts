import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'quest_data' })
export class QuestData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  quest_id: number;

  @Field()
  @Column('integer')
  area_id: number;

  @Field()
  @Column('text')
  quest_name: string;

  @Field()
  @Column('integer')
  limit_team_level: number;

  @Field()
  @Column('integer')
  position_x: number;

  @Field()
  @Column('integer')
  position_y: number;

  @Field()
  @Column('integer')
  icon_id: number;

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
  unit_exp: number;

  @Field()
  @Column('integer')
  love: number;

  @Field()
  @Column('integer')
  limit_time: number;

  @Field()
  @Column('integer')
  daily_limit: number;

  @Field()
  @Column('integer')
  clear_reward_group: number;

  @Field()
  @Column('integer')
  rank_reward_group: number;

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
  story_id_wavestart_1: number;

  @Field()
  @Column('integer')
  story_id_waveend_1: number;

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
  story_id_wavestart_2: number;

  @Field()
  @Column('integer')
  story_id_waveend_2: number;

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
  story_id_wavestart_3: number;

  @Field()
  @Column('integer')
  story_id_waveend_3: number;

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
  quest_detail_bg_id: number;

  @Field()
  @Column('integer')
  quest_detail_bg_position: number;

  @Field()
  @Column('text')
  start_time: string;

  @Field()
  @Column('text')
  end_time: string;

  @Field()
  @Column('integer')
  lv_reward_flag: number;

}

