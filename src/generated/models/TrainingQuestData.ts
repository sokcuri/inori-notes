import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'training_quest_data' })
export class TrainingQuestData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'quest_id', type: 'integer' })
  questId: number;

  @Field()
  @Column({ name: 'area_id', type: 'integer' })
  areaId: number;

  @Field()
  @Column({ name: 'quest_name', type: 'text' })
  questName: string;

  @Field()
  @Column({ name: 'limit_team_level', type: 'integer' })
  limitTeamLevel: number;

  @Field()
  @Column({ name: 'unlock_quest_id_1', type: 'integer' })
  unlockQuestId1: number;

  @Field()
  @Column({ name: 'unlock_quest_id_2', type: 'integer' })
  unlockQuestId2: number;

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
  @Column({ name: 'limit_time', type: 'integer' })
  limitTime: number;

  @Field()
  @Column({ name: 'rank_reward_group', type: 'integer' })
  rankRewardGroup: number;

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
  @Column({ name: 'background_2', type: 'integer' })
  background2: number;

  @Field()
  @Column({ name: 'wave_group_id_2', type: 'integer' })
  waveGroupId2: number;

  @Field()
  @Column({ name: 'wave_bgm_sheet_id_2', type: 'text' })
  waveBgmSheetId2: string;

  @Field()
  @Column({ name: 'wave_bgm_que_id_2', type: 'text' })
  waveBgmQueId2: string;

  @Field()
  @Column({ name: 'background_3', type: 'integer' })
  background3: number;

  @Field()
  @Column({ name: 'wave_group_id_3', type: 'integer' })
  waveGroupId3: number;

  @Field()
  @Column({ name: 'wave_bgm_sheet_id_3', type: 'text' })
  waveBgmSheetId3: string;

  @Field()
  @Column({ name: 'wave_bgm_que_id_3', type: 'text' })
  waveBgmQueId3: string;

  @Field()
  @Column({ name: 'enemy_image_1', type: 'integer' })
  enemyImage1: number;

  @Field()
  @Column({ name: 'enemy_image_2', type: 'integer' })
  enemyImage2: number;

  @Field()
  @Column({ name: 'enemy_image_3', type: 'integer' })
  enemyImage3: number;

  @Field()
  @Column({ name: 'enemy_image_4', type: 'integer' })
  enemyImage4: number;

  @Field()
  @Column({ name: 'enemy_image_5', type: 'integer' })
  enemyImage5: number;

  @Field()
  @Column({ name: 'reward_image_1', type: 'integer' })
  rewardImage1: number;

  @Field()
  @Column({ name: 'reward_image_2', type: 'integer' })
  rewardImage2: number;

  @Field()
  @Column({ name: 'reward_image_3', type: 'integer' })
  rewardImage3: number;

  @Field()
  @Column({ name: 'reward_image_4', type: 'integer' })
  rewardImage4: number;

  @Field()
  @Column({ name: 'reward_image_5', type: 'integer' })
  rewardImage5: number;

  @Field()
  @Column({ name: 'training_quest_detail_bg_id', type: 'integer' })
  trainingQuestDetailBgId: number;

  @Field()
  @Column({ name: 'training_quest_detail_bg_position', type: 'integer' })
  trainingQuestDetailBgPosition: number;

  @Field()
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field()
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

}

