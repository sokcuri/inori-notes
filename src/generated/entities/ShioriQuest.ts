import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'shiori_quest' })
export class ShioriQuest extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'quest_id', type: 'integer' })
  questId: number;

  @Field()
  @Column({ name: 'event_id', type: 'integer' })
  eventId: number;

  @Field()
  @Column({ name: 'area_id', type: 'integer' })
  areaId: number;

  @Field()
  @Column({ name: 'quest_seq', type: 'integer' })
  questSeq: number;

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
  @Column({ name: 'icon_id', type: 'integer' })
  iconId: number;

  @Field()
  @Column({ name: 'stamina', type: 'integer' })
  stamina: number;

  @Field()
  @Column({ name: 'stamina_start', type: 'integer' })
  staminaStart: number;

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
  @Column({ name: 'rank_reward_group', type: 'integer' })
  rankRewardGroup: number;

  @Field()
  @Column({ name: 'drop_reward_type', type: 'integer' })
  dropRewardType: number;

  @Field()
  @Column({ name: 'drop_reward_id', type: 'integer' })
  dropRewardId: number;

  @Field()
  @Column({ name: 'drop_reward_num', type: 'integer' })
  dropRewardNum: number;

  @Field()
  @Column({ name: 'drop_reward_odds', type: 'integer' })
  dropRewardOdds: number;

  @Field()
  @Column({ name: 'wave_group_id_1', type: 'integer' })
  waveGroupId1: number;

  @Field()
  @Column({ name: 'background_1', type: 'integer' })
  background1: number;

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
  @Column({ name: 'wave_group_id_2', type: 'integer' })
  waveGroupId2: number;

  @Field()
  @Column({ name: 'background_2', type: 'integer' })
  background2: number;

  @Field()
  @Column({ name: 'wave_bgm_sheet_id_2', type: 'text' })
  waveBgmSheetId2: string;

  @Field()
  @Column({ name: 'wave_bgm_que_id_2', type: 'text' })
  waveBgmQueId2: string;

  @Field()
  @Column({ name: 'story_id_wavestart_2', type: 'integer' })
  storyIdWavestart2: number;

  @Field()
  @Column({ name: 'story_id_waveend_2', type: 'integer' })
  storyIdWaveend2: number;

  @Field()
  @Column({ name: 'wave_group_id_3', type: 'integer' })
  waveGroupId3: number;

  @Field()
  @Column({ name: 'background_3', type: 'integer' })
  background3: number;

  @Field()
  @Column({ name: 'wave_bgm_sheet_id_3', type: 'text' })
  waveBgmSheetId3: string;

  @Field()
  @Column({ name: 'wave_bgm_que_id_3', type: 'text' })
  waveBgmQueId3: string;

  @Field()
  @Column({ name: 'story_id_wavestart_3', type: 'integer' })
  storyIdWavestart3: number;

  @Field()
  @Column({ name: 'story_id_waveend_3', type: 'integer' })
  storyIdWaveend3: number;

  @Field()
  @Column({ name: 'quest_detail_bg_id', type: 'integer' })
  questDetailBgId: number;

  @Field()
  @Column({ name: 'quest_detail_bg_position', type: 'integer' })
  questDetailBgPosition: number;

}

