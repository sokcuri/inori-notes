import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_quest' })
export class HatsuneQuest extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'quest_id', type: 'integer' })
  questId: number;

  @Field(type => Int)
  @Column({ name: 'event_id', type: 'integer' })
  eventId: number;

  @Field(type => Int)
  @Column({ name: 'area_id', type: 'integer' })
  areaId: number;

  @Field(type => Int)
  @Column({ name: 'quest_seq', type: 'integer' })
  questSeq: number;

  @Field(type => String)
  @Column({ name: 'quest_name', type: 'text' })
  questName: string;

  @Field(type => Int)
  @Column({ name: 'position_x', type: 'integer' })
  positionX: number;

  @Field(type => Int)
  @Column({ name: 'position_y', type: 'integer' })
  positionY: number;

  @Field(type => Int)
  @Column({ name: 'icon_id', type: 'integer' })
  iconId: number;

  @Field(type => Int)
  @Column({ name: 'stamina', type: 'integer' })
  stamina: number;

  @Field(type => Int)
  @Column({ name: 'stamina_start', type: 'integer' })
  staminaStart: number;

  @Field(type => Int)
  @Column({ name: 'team_exp', type: 'integer' })
  teamExp: number;

  @Field(type => Int)
  @Column({ name: 'unit_exp', type: 'integer' })
  unitExp: number;

  @Field(type => Int)
  @Column({ name: 'love', type: 'integer' })
  love: number;

  @Field(type => Int)
  @Column({ name: 'limit_time', type: 'integer' })
  limitTime: number;

  @Field(type => Int)
  @Column({ name: 'daily_limit', type: 'integer' })
  dailyLimit: number;

  @Field(type => Int)
  @Column({ name: 'clear_reward_group', type: 'integer' })
  clearRewardGroup: number;

  @Field(type => Int)
  @Column({ name: 'rank_reward_group', type: 'integer' })
  rankRewardGroup: number;

  @Field(type => Int)
  @Column({ name: 'drop_reward_type', type: 'integer' })
  dropRewardType: number;

  @Field(type => Int)
  @Column({ name: 'drop_reward_id', type: 'integer' })
  dropRewardId: number;

  @Field(type => Int)
  @Column({ name: 'drop_reward_num', type: 'integer' })
  dropRewardNum: number;

  @Field(type => Int)
  @Column({ name: 'drop_reward_odds', type: 'integer' })
  dropRewardOdds: number;

  @Field(type => Int)
  @Column({ name: 'background_1', type: 'integer' })
  background1: number;

  @Field(type => String)
  @Column({ name: 'wave_bgm_sheet_id_1', type: 'text' })
  waveBgmSheetId1: string;

  @Field(type => String)
  @Column({ name: 'wave_bgm_que_id_1', type: 'text' })
  waveBgmQueId1: string;

  @Field(type => Int)
  @Column({ name: 'story_id_wavestart_1', type: 'integer' })
  storyIdWavestart1: number;

  @Field(type => Int)
  @Column({ name: 'story_id_waveend_1', type: 'integer' })
  storyIdWaveend1: number;

  @Field(type => Int)
  @Column({ name: 'background_2', type: 'integer' })
  background2: number;

  @Field(type => String)
  @Column({ name: 'wave_bgm_sheet_id_2', type: 'text' })
  waveBgmSheetId2: string;

  @Field(type => String)
  @Column({ name: 'wave_bgm_que_id_2', type: 'text' })
  waveBgmQueId2: string;

  @Field(type => Int)
  @Column({ name: 'story_id_wavestart_2', type: 'integer' })
  storyIdWavestart2: number;

  @Field(type => Int)
  @Column({ name: 'story_id_waveend_2', type: 'integer' })
  storyIdWaveend2: number;

  @Field(type => Int)
  @Column({ name: 'background_3', type: 'integer' })
  background3: number;

  @Field(type => String)
  @Column({ name: 'wave_bgm_sheet_id_3', type: 'text' })
  waveBgmSheetId3: string;

  @Field(type => String)
  @Column({ name: 'wave_bgm_que_id_3', type: 'text' })
  waveBgmQueId3: string;

  @Field(type => Int)
  @Column({ name: 'story_id_wavestart_3', type: 'integer' })
  storyIdWavestart3: number;

  @Field(type => Int)
  @Column({ name: 'story_id_waveend_3', type: 'integer' })
  storyIdWaveend3: number;

  @Field(type => Int)
  @Column({ name: 'quest_detail_bg_id', type: 'integer' })
  questDetailBgId: number;

  @Field(type => Int)
  @Column({ name: 'quest_detail_bg_position', type: 'integer' })
  questDetailBgPosition: number;

  @Field(type => String)
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field(type => String)
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

  @Field(type => [Int])
  get background() {
    return [this.background1, this.background2, this.background3];
  }

  @Field(type => [String])
  get waveBgmSheetId() {
    return [this.waveBgmSheetId1, this.waveBgmSheetId2, this.waveBgmSheetId3];
  }

  @Field(type => [String])
  get waveBgmQueId() {
    return [this.waveBgmQueId1, this.waveBgmQueId2, this.waveBgmQueId3];
  }

  @Field(type => [Int])
  get storyIdWavestart() {
    return [this.storyIdWavestart1, this.storyIdWavestart2, this.storyIdWavestart3];
  }

  @Field(type => [Int])
  get storyIdWaveend() {
    return [this.storyIdWaveend1, this.storyIdWaveend2, this.storyIdWaveend3];
  }

}

