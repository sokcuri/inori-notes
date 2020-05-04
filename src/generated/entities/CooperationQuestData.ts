import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'cooperation_quest_data' })
export class CooperationQuestData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'quest_id', type: 'integer' })
  questId: number;

  @Field(type => String)
  @Column({ name: 'quest_name', type: 'text' })
  questName: string;

  @Field(type => Int)
  @Column({ name: 'difficulty_level', type: 'integer' })
  difficultyLevel: number;

  @Field(type => Int)
  @Column({ name: 'limit_team_level', type: 'integer' })
  limitTeamLevel: number;

  @Field(type => Int)
  @Column({ name: 'team_exp', type: 'integer' })
  teamExp: number;

  @Field(type => Int)
  @Column({ name: 'exp', type: 'integer' })
  exp: number;

  @Field(type => Int)
  @Column({ name: 'limit_time', type: 'integer' })
  limitTime: number;

  @Field(type => Int)
  @Column({ name: 'clear_reward_group_id', type: 'integer' })
  clearRewardGroupId: number;

  @Field(type => Int)
  @Column({ name: 'odds_group_id', type: 'integer' })
  oddsGroupId: number;

  @Field(type => Int)
  @Column({ name: 'lobby_background', type: 'integer' })
  lobbyBackground: number;

  @Field(type => Int)
  @Column({ name: 'background_1', type: 'integer' })
  background1: number;

  @Field(type => Int)
  @Column({ name: 'wave_group_id_1', type: 'integer' })
  waveGroupId1: number;

  @Field(type => String)
  @Column({ name: 'wave_bgm_sheet_id_1', type: 'text' })
  waveBgmSheetId1: string;

  @Field(type => String)
  @Column({ name: 'wave_bgm_que_id_1', type: 'text' })
  waveBgmQueId1: string;

  @Field(type => Int)
  @Column({ name: 'background_2', type: 'integer' })
  background2: number;

  @Field(type => Int)
  @Column({ name: 'wave_group_id_2', type: 'integer' })
  waveGroupId2: number;

  @Field(type => String)
  @Column({ name: 'wave_bgm_sheet_id_2', type: 'text' })
  waveBgmSheetId2: string;

  @Field(type => String)
  @Column({ name: 'wave_bgm_que_id_2', type: 'text' })
  waveBgmQueId2: string;

  @Field(type => Int)
  @Column({ name: 'background_3', type: 'integer' })
  background3: number;

  @Field(type => Int)
  @Column({ name: 'wave_group_id_3', type: 'integer' })
  waveGroupId3: number;

  @Field(type => String)
  @Column({ name: 'wave_bgm_sheet_id_3', type: 'text' })
  waveBgmSheetId3: string;

  @Field(type => String)
  @Column({ name: 'wave_bgm_que_id_3', type: 'text' })
  waveBgmQueId3: string;

  @Field(type => Int)
  @Column({ name: 'enemy_image_1', type: 'integer' })
  enemyImage1: number;

  @Field(type => Int)
  @Column({ name: 'enemy_image_2', type: 'integer' })
  enemyImage2: number;

  @Field(type => Int)
  @Column({ name: 'enemy_image_3', type: 'integer' })
  enemyImage3: number;

  @Field(type => Int)
  @Column({ name: 'enemy_image_4', type: 'integer' })
  enemyImage4: number;

  @Field(type => Int)
  @Column({ name: 'enemy_image_5', type: 'integer' })
  enemyImage5: number;

  @Field(type => Int)
  @Column({ name: 'first_reward_image_1', type: 'integer' })
  firstRewardImage1: number;

  @Field(type => Int)
  @Column({ name: 'first_reward_image_2', type: 'integer' })
  firstRewardImage2: number;

  @Field(type => Int)
  @Column({ name: 'first_reward_image_3', type: 'integer' })
  firstRewardImage3: number;

  @Field(type => Int)
  @Column({ name: 'first_reward_image_4', type: 'integer' })
  firstRewardImage4: number;

  @Field(type => Int)
  @Column({ name: 'first_reward_image_5', type: 'integer' })
  firstRewardImage5: number;

  @Field(type => Int)
  @Column({ name: 'repeat_reward_image_1', type: 'integer' })
  repeatRewardImage1: number;

  @Field(type => Int)
  @Column({ name: 'repeat_reward_image_2', type: 'integer' })
  repeatRewardImage2: number;

  @Field(type => Int)
  @Column({ name: 'repeat_reward_image_3', type: 'integer' })
  repeatRewardImage3: number;

  @Field(type => Int)
  @Column({ name: 'cooperation_quest_detail_bg_id', type: 'integer' })
  cooperationQuestDetailBgId: number;

  @Field(type => Int)
  @Column({ name: 'cooperation_quest_detail_bg_position', type: 'integer' })
  cooperationQuestDetailBgPosition: number;

  @Field(type => Int)
  @Column({ name: 'main_enemy_image_wave_1', type: 'integer' })
  mainEnemyImageWave1: number;

  @Field(type => Int)
  @Column({ name: 'sub_enemy_image_wave_1_1', type: 'integer' })
  subEnemyImageWave11: number;

  @Field(type => Int)
  @Column({ name: 'sub_enemy_image_wave_1_2', type: 'integer' })
  subEnemyImageWave12: number;

  @Field(type => Int)
  @Column({ name: 'sub_enemy_image_wave_1_3', type: 'integer' })
  subEnemyImageWave13: number;

  @Field(type => Int)
  @Column({ name: 'sub_enemy_image_wave_1_4', type: 'integer' })
  subEnemyImageWave14: number;

  @Field(type => Int)
  @Column({ name: 'main_enemy_image_wave_2', type: 'integer' })
  mainEnemyImageWave2: number;

  @Field(type => Int)
  @Column({ name: 'sub_enemy_image_wave_2_1', type: 'integer' })
  subEnemyImageWave21: number;

  @Field(type => Int)
  @Column({ name: 'sub_enemy_image_wave_2_2', type: 'integer' })
  subEnemyImageWave22: number;

  @Field(type => Int)
  @Column({ name: 'sub_enemy_image_wave_2_3', type: 'integer' })
  subEnemyImageWave23: number;

  @Field(type => Int)
  @Column({ name: 'sub_enemy_image_wave_2_4', type: 'integer' })
  subEnemyImageWave24: number;

  @Field(type => Int)
  @Column({ name: 'main_enemy_image_wave_3', type: 'integer' })
  mainEnemyImageWave3: number;

  @Field(type => Int)
  @Column({ name: 'sub_enemy_image_wave_3_1', type: 'integer' })
  subEnemyImageWave31: number;

  @Field(type => Int)
  @Column({ name: 'sub_enemy_image_wave_3_2', type: 'integer' })
  subEnemyImageWave32: number;

  @Field(type => Int)
  @Column({ name: 'sub_enemy_image_wave_3_3', type: 'integer' })
  subEnemyImageWave33: number;

  @Field(type => Int)
  @Column({ name: 'sub_enemy_image_wave_3_4', type: 'integer' })
  subEnemyImageWave34: number;

  @Field(type => String)
  @Column({ name: 'quest_comment', type: 'text' })
  questComment: string;

  @Field(type => Int)
  @Column({ name: 'unlock_quest_id_1', type: 'integer' })
  unlockQuestId1: number;

  @Field(type => Int)
  @Column({ name: 'unlock_quest_id_2', type: 'integer' })
  unlockQuestId2: number;

  @Field(type => [Int])
  get background() {
    return [this.background1, this.background2, this.background3];
  }

  @Field(type => [Int])
  get waveGroupId() {
    return [this.waveGroupId1, this.waveGroupId2, this.waveGroupId3];
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
  get enemyImage() {
    return [this.enemyImage1, this.enemyImage2, this.enemyImage3, this.enemyImage4, this.enemyImage5];
  }

  @Field(type => [Int])
  get firstRewardImage() {
    return [this.firstRewardImage1, this.firstRewardImage2, this.firstRewardImage3, this.firstRewardImage4, this.firstRewardImage5];
  }

  @Field(type => [Int])
  get repeatRewardImage() {
    return [this.repeatRewardImage1, this.repeatRewardImage2, this.repeatRewardImage3];
  }

  @Field(type => [Int])
  get mainEnemyImageWave() {
    return [this.mainEnemyImageWave1, this.mainEnemyImageWave2, this.mainEnemyImageWave3];
  }

  @Field(type => [Int])
  get subEnemyImageWave() {
    return [this.subEnemyImageWave11, this.subEnemyImageWave12, this.subEnemyImageWave13, this.subEnemyImageWave14, this.subEnemyImageWave21, this.subEnemyImageWave22, this.subEnemyImageWave23, this.subEnemyImageWave24, this.subEnemyImageWave31, this.subEnemyImageWave32, this.subEnemyImageWave33, this.subEnemyImageWave34];
  }

  @Field(type => [Int])
  get unlockQuestId() {
    return [this.unlockQuestId1, this.unlockQuestId2];
  }

}

