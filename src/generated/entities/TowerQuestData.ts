import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'tower_quest_data' })
export class TowerQuestData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'tower_quest_id', type: 'integer' })
  towerQuestId: number;

  @Field(type => Int)
  @Column({ name: 'tower_area_id', type: 'integer' })
  towerAreaId: number;

  @Field(type => Int)
  @Column({ name: 'floor_num', type: 'integer' })
  floorNum: number;

  @Field(type => Int)
  @Column({ name: 'floor_image_type', type: 'integer' })
  floorImageType: number;

  @Field(type => Int)
  @Column({ name: 'floor_image_add_type', type: 'integer' })
  floorImageAddType: number;

  @Field(type => Int)
  @Column({ name: 'open_tower_ex_quest_id', type: 'integer' })
  openTowerExQuestId: number;

  @Field(type => Int)
  @Column({ name: 'boss_floor_flg', type: 'integer' })
  bossFloorFlg: number;

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
  @Column({ name: 'limit_time', type: 'integer' })
  limitTime: number;

  @Field(type => Int)
  @Column({ name: 'recovery_hp_rate', type: 'integer' })
  recoveryHpRate: number;

  @Field(type => Int)
  @Column({ name: 'recovery_tp_rate', type: 'integer' })
  recoveryTpRate: number;

  @Field(type => Int)
  @Column({ name: 'start_tp_rate', type: 'integer' })
  startTpRate: number;

  @Field(type => Int)
  @Column({ name: 'reward_image_1', type: 'integer' })
  rewardImage1: number;

  @Field(type => Int)
  @Column({ name: 'reward_count_1', type: 'integer' })
  rewardCount1: number;

  @Field(type => Int)
  @Column({ name: 'reward_image_2', type: 'integer' })
  rewardImage2: number;

  @Field(type => Int)
  @Column({ name: 'reward_count_2', type: 'integer' })
  rewardCount2: number;

  @Field(type => Int)
  @Column({ name: 'reward_image_3', type: 'integer' })
  rewardImage3: number;

  @Field(type => Int)
  @Column({ name: 'reward_count_3', type: 'integer' })
  rewardCount3: number;

  @Field(type => Int)
  @Column({ name: 'reward_image_4', type: 'integer' })
  rewardImage4: number;

  @Field(type => Int)
  @Column({ name: 'reward_count_4', type: 'integer' })
  rewardCount4: number;

  @Field(type => Int)
  @Column({ name: 'reward_image_5', type: 'integer' })
  rewardImage5: number;

  @Field(type => Int)
  @Column({ name: 'reward_count_5', type: 'integer' })
  rewardCount5: number;

  @Field(type => Int)
  @Column({ name: 'additional_reward_type', type: 'integer' })
  additionalRewardType: number;

  @Field(type => Int)
  @Column({ name: 'additional_reward_id', type: 'integer' })
  additionalRewardId: number;

  @Field(type => Int)
  @Column({ name: 'fix_reward_group_id', type: 'integer' })
  fixRewardGroupId: number;

  @Field(type => Int)
  @Column({ name: 'odds_group_id', type: 'integer' })
  oddsGroupId: number;

  @Field(type => Int)
  @Column({ name: 'chest_id', type: 'integer' })
  chestId: number;

  @Field(type => Int)
  @Column({ name: 'background', type: 'integer' })
  background: number;

  @Field(type => Int)
  @Column({ name: 'bg_position', type: 'integer' })
  bgPosition: number;

  @Field(type => Int)
  @Column({ name: 'wave_group_id', type: 'integer' })
  waveGroupId: number;

  @Field(type => Int)
  @Column({ name: 'enemy_position_x_1', type: 'integer' })
  enemyPositionX1: number;

  @Field(type => Int)
  @Column({ name: 'enemy_local_position_y_1', type: 'integer' })
  enemyLocalPositionY1: number;

  @Field(type => Float)
  @Column({ name: 'enemy_size_1', type: 'real' })
  enemySize1: number;

  @Field(type => Int)
  @Column({ name: 'enemy_position_x_2', type: 'integer' })
  enemyPositionX2: number;

  @Field(type => Int)
  @Column({ name: 'enemy_local_position_y_2', type: 'integer' })
  enemyLocalPositionY2: number;

  @Field(type => Float)
  @Column({ name: 'enemy_size_2', type: 'real' })
  enemySize2: number;

  @Field(type => Int)
  @Column({ name: 'enemy_position_x_3', type: 'integer' })
  enemyPositionX3: number;

  @Field(type => Int)
  @Column({ name: 'enemy_local_position_y_3', type: 'integer' })
  enemyLocalPositionY3: number;

  @Field(type => Float)
  @Column({ name: 'enemy_size_3', type: 'real' })
  enemySize3: number;

  @Field(type => Int)
  @Column({ name: 'enemy_position_x_4', type: 'integer' })
  enemyPositionX4: number;

  @Field(type => Int)
  @Column({ name: 'enemy_local_position_y_4', type: 'integer' })
  enemyLocalPositionY4: number;

  @Field(type => Float)
  @Column({ name: 'enemy_size_4', type: 'real' })
  enemySize4: number;

  @Field(type => Int)
  @Column({ name: 'enemy_position_x_5', type: 'integer' })
  enemyPositionX5: number;

  @Field(type => Int)
  @Column({ name: 'enemy_local_position_y_5', type: 'integer' })
  enemyLocalPositionY5: number;

  @Field(type => Float)
  @Column({ name: 'enemy_size_5', type: 'real' })
  enemySize5: number;

  @Field(type => String)
  @Column({ name: 'wave_bgm', type: 'text' })
  waveBgm: string;

  @Field(type => Int)
  @Column({ name: 'clp_flag', type: 'integer' })
  clpFlag: number;

  @Field(type => Int)
  @Column({ name: 'skip_level', type: 'integer' })
  skipLevel: number;

}
