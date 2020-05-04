import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_boss' })
export class HatsuneBoss extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  boss_id: number;

  @Field()
  @Column('integer')
  event_id: number;

  @Field()
  @Column('integer')
  area_id: number;

  @Field()
  @Column('integer')
  difficulty: number;

  @Field()
  @Column('text')
  quest_name: string;

  @Field()
  @Column('integer')
  position_x: number;

  @Field()
  @Column('integer')
  position_y: number;

  @Field()
  @Column('integer')
  boss_position_x: number;

  @Field()
  @Column('integer')
  boss_position_y: number;

  @Field()
  @Column('integer')
  result_boss_position_y: number;

  @Field()
  @Column('integer')
  icon_id: number;

  @Field()
  @Column('integer')
  use_ticket_num: number;

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
  event_boss_treasure_box_id_1: number;

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
  detail_bg_id: number;

  @Field()
  @Column('integer')
  detail_bg_position: number;

  @Field()
  @Column('real')
  detail_boss_bg_size: number;

  @Field()
  @Column('real')
  detail_boss_bg_height: number;

  @Field()
  @Column('text')
  reward_gold_coefficient: string;

  @Field()
  @Column('integer')
  reward_gold_limit: number;

  @Field()
  @Column('text')
  start_time: string;

  @Field()
  @Column('text')
  end_time: string;

  @Field()
  @Column('real')
  map_position_x: number;

  @Field()
  @Column('real')
  map_position_y: number;

  @Field()
  @Column('real')
  map_size: number;

  @Field()
  @Column('real')
  deatail_aura_size: number;

  @Field()
  @Column('real')
  map_aura_size: number;

  @Field()
  @Column('integer')
  oneblow_count_of_skip_condition: number;

  @Field()
  @Column('integer')
  required_skip_ticket_count: number;

  @Field()
  @Column('integer')
  retire_flag: number;

  @Field()
  @Column('integer')
  disp_on_bg: number;

}

