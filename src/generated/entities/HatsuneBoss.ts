import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_boss' })
export class HatsuneBoss extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'boss_id', type: 'integer' })
  bossId: number;

  @Field()
  @Column({ name: 'event_id', type: 'integer' })
  eventId: number;

  @Field()
  @Column({ name: 'area_id', type: 'integer' })
  areaId: number;

  @Field()
  @Column({ name: 'difficulty', type: 'integer' })
  difficulty: number;

  @Field()
  @Column({ name: 'quest_name', type: 'text' })
  questName: string;

  @Field()
  @Column({ name: 'position_x', type: 'integer' })
  positionX: number;

  @Field()
  @Column({ name: 'position_y', type: 'integer' })
  positionY: number;

  @Field()
  @Column({ name: 'boss_position_x', type: 'integer' })
  bossPositionX: number;

  @Field()
  @Column({ name: 'boss_position_y', type: 'integer' })
  bossPositionY: number;

  @Field()
  @Column({ name: 'result_boss_position_y', type: 'integer' })
  resultBossPositionY: number;

  @Field()
  @Column({ name: 'icon_id', type: 'integer' })
  iconId: number;

  @Field()
  @Column({ name: 'use_ticket_num', type: 'integer' })
  useTicketNum: number;

  @Field()
  @Column({ name: 'team_exp', type: 'integer' })
  teamExp: number;

  @Field()
  @Column({ name: 'unit_exp', type: 'integer' })
  unitExp: number;

  @Field()
  @Column({ name: 'love', type: 'integer' })
  love: number;

  @Field()
  @Column({ name: 'limit_time', type: 'integer' })
  limitTime: number;

  @Field()
  @Column({ name: 'daily_limit', type: 'integer' })
  dailyLimit: number;

  @Field()
  @Column({ name: 'clear_reward_group', type: 'integer' })
  clearRewardGroup: number;

  @Field()
  @Column({ name: 'event_boss_treasure_box_id_1', type: 'integer' })
  eventBossTreasureBoxId1: number;

  @Field()
  @Column({ name: 'background_1', type: 'integer' })
  background1: number;

  @Field()
  @Column({ name: 'wave_group_id_1', type: 'integer' })
  waveGroupId1: number;

  @Field()
  @Column({ name: 'wave_bgm_sheet_id_1', type: 'text' })
  waveBgmSheetId1: string;

  @Field()
  @Column({ name: 'wave_bgm_que_id_1', type: 'text' })
  waveBgmQueId1: string;

  @Field()
  @Column({ name: 'story_id_wavestart_1', type: 'integer' })
  storyIdWavestart1: number;

  @Field()
  @Column({ name: 'story_id_waveend_1', type: 'integer' })
  storyIdWaveend1: number;

  @Field()
  @Column({ name: 'detail_bg_id', type: 'integer' })
  detailBgId: number;

  @Field()
  @Column({ name: 'detail_bg_position', type: 'integer' })
  detailBgPosition: number;

  @Field()
  @Column({ name: 'detail_boss_bg_size', type: 'real' })
  detailBossBgSize: number;

  @Field()
  @Column({ name: 'detail_boss_bg_height', type: 'real' })
  detailBossBgHeight: number;

  @Field()
  @Column({ name: 'reward_gold_coefficient', type: 'text' })
  rewardGoldCoefficient: string;

  @Field()
  @Column({ name: 'reward_gold_limit', type: 'integer' })
  rewardGoldLimit: number;

  @Field()
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field()
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

  @Field()
  @Column({ name: 'map_position_x', type: 'real' })
  mapPositionX: number;

  @Field()
  @Column({ name: 'map_position_y', type: 'real' })
  mapPositionY: number;

  @Field()
  @Column({ name: 'map_size', type: 'real' })
  mapSize: number;

  @Field()
  @Column({ name: 'deatail_aura_size', type: 'real' })
  deatailAuraSize: number;

  @Field()
  @Column({ name: 'map_aura_size', type: 'real' })
  mapAuraSize: number;

  @Field()
  @Column({ name: 'oneblow_count_of_skip_condition', type: 'integer' })
  oneblowCountOfSkipCondition: number;

  @Field()
  @Column({ name: 'required_skip_ticket_count', type: 'integer' })
  requiredSkipTicketCount: number;

  @Field()
  @Column({ name: 'retire_flag', type: 'integer' })
  retireFlag: number;

  @Field()
  @Column({ name: 'disp_on_bg', type: 'integer' })
  dispOnBg: number;

}

