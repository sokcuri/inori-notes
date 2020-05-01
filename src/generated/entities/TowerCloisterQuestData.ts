import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'tower_cloister_quest_data' })
export class TowerCloisterQuestData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'tower_cloister_quest_id', type: 'integer' })
  towerCloisterQuestId: number;

  @Field(type => Int)
  @Column({ name: 'daily_limit', type: 'integer' })
  dailyLimit: number;

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
  @Column({ name: 'fix_reward_group_id', type: 'integer' })
  fixRewardGroupId: number;

  @Field(type => Int)
  @Column({ name: 'drop_reward_group_id', type: 'integer' })
  dropRewardGroupId: number;

  @Field(type => Int)
  @Column({ name: 'background_1', type: 'integer' })
  background1: number;

  @Field(type => Int)
  @Column({ name: 'wave_group_id_1', type: 'integer' })
  waveGroupId1: number;

  @Field(type => Int)
  @Column({ name: 'background_2', type: 'integer' })
  background2: number;

  @Field(type => Int)
  @Column({ name: 'wave_group_id_2', type: 'integer' })
  waveGroupId2: number;

  @Field(type => Int)
  @Column({ name: 'background_3', type: 'integer' })
  background3: number;

  @Field(type => Int)
  @Column({ name: 'wave_group_id_3', type: 'integer' })
  waveGroupId3: number;

  @Field(type => String)
  @Column({ name: 'wave_bgm', type: 'text' })
  waveBgm: string;

  @Field(type => Int)
  @Column({ name: 'reward_image_1', type: 'integer' })
  rewardImage1: number;

  @Field(type => Int)
  @Column({ name: 'reward_image_2', type: 'integer' })
  rewardImage2: number;

  @Field(type => Int)
  @Column({ name: 'reward_image_3', type: 'integer' })
  rewardImage3: number;

  @Field(type => Int)
  @Column({ name: 'reward_image_4', type: 'integer' })
  rewardImage4: number;

  @Field(type => Int)
  @Column({ name: 'reward_image_5', type: 'integer' })
  rewardImage5: number;

  @Field(type => Int)
  @Column({ name: 'w1_enemy_position_x_1', type: 'integer' })
  w1EnemyPositionX1: number;

  @Field(type => Int)
  @Column({ name: 'w1_enemy_local_position_y_1', type: 'integer' })
  w1EnemyLocalPositionY1: number;

  @Field(type => Float)
  @Column({ name: 'w1_enemy_size_1', type: 'real' })
  w1EnemySize1: number;

  @Field(type => Int)
  @Column({ name: 'w1_enemy_position_x_2', type: 'integer' })
  w1EnemyPositionX2: number;

  @Field(type => Int)
  @Column({ name: 'w1_enemy_local_position_y_2', type: 'integer' })
  w1EnemyLocalPositionY2: number;

  @Field(type => Float)
  @Column({ name: 'w1_enemy_size_2', type: 'real' })
  w1EnemySize2: number;

  @Field(type => Int)
  @Column({ name: 'w1_enemy_position_x_3', type: 'integer' })
  w1EnemyPositionX3: number;

  @Field(type => Int)
  @Column({ name: 'w1_enemy_local_position_y_3', type: 'integer' })
  w1EnemyLocalPositionY3: number;

  @Field(type => Float)
  @Column({ name: 'w1_enemy_size_3', type: 'real' })
  w1EnemySize3: number;

  @Field(type => Int)
  @Column({ name: 'w1_enemy_position_x_4', type: 'integer' })
  w1EnemyPositionX4: number;

  @Field(type => Int)
  @Column({ name: 'w1_enemy_local_position_y_4', type: 'integer' })
  w1EnemyLocalPositionY4: number;

  @Field(type => Float)
  @Column({ name: 'w1_enemy_size_4', type: 'real' })
  w1EnemySize4: number;

  @Field(type => Int)
  @Column({ name: 'w1_enemy_position_x_5', type: 'integer' })
  w1EnemyPositionX5: number;

  @Field(type => Int)
  @Column({ name: 'w1_enemy_local_position_y_5', type: 'integer' })
  w1EnemyLocalPositionY5: number;

  @Field(type => Float)
  @Column({ name: 'w1_enemy_size_5', type: 'real' })
  w1EnemySize5: number;

  @Field(type => Int)
  @Column({ name: 'w2_enemy_position_x_1', type: 'integer' })
  w2EnemyPositionX1: number;

  @Field(type => Int)
  @Column({ name: 'w2_enemy_local_position_y_1', type: 'integer' })
  w2EnemyLocalPositionY1: number;

  @Field(type => Float)
  @Column({ name: 'w2_enemy_size_1', type: 'real' })
  w2EnemySize1: number;

  @Field(type => Int)
  @Column({ name: 'w2_enemy_position_x_2', type: 'integer' })
  w2EnemyPositionX2: number;

  @Field(type => Int)
  @Column({ name: 'w2_enemy_local_position_y_2', type: 'integer' })
  w2EnemyLocalPositionY2: number;

  @Field(type => Float)
  @Column({ name: 'w2_enemy_size_2', type: 'real' })
  w2EnemySize2: number;

  @Field(type => Int)
  @Column({ name: 'w2_enemy_position_x_3', type: 'integer' })
  w2EnemyPositionX3: number;

  @Field(type => Int)
  @Column({ name: 'w2_enemy_local_position_y_3', type: 'integer' })
  w2EnemyLocalPositionY3: number;

  @Field(type => Float)
  @Column({ name: 'w2_enemy_size_3', type: 'real' })
  w2EnemySize3: number;

  @Field(type => Int)
  @Column({ name: 'w2_enemy_position_x_4', type: 'integer' })
  w2EnemyPositionX4: number;

  @Field(type => Int)
  @Column({ name: 'w2_enemy_local_position_y_4', type: 'integer' })
  w2EnemyLocalPositionY4: number;

  @Field(type => Float)
  @Column({ name: 'w2_enemy_size_4', type: 'real' })
  w2EnemySize4: number;

  @Field(type => Int)
  @Column({ name: 'w2_enemy_position_x_5', type: 'integer' })
  w2EnemyPositionX5: number;

  @Field(type => Int)
  @Column({ name: 'w2_enemy_local_position_y_5', type: 'integer' })
  w2EnemyLocalPositionY5: number;

  @Field(type => Float)
  @Column({ name: 'w2_enemy_size_5', type: 'real' })
  w2EnemySize5: number;

  @Field(type => Int)
  @Column({ name: 'w3_enemy_position_x_1', type: 'integer' })
  w3EnemyPositionX1: number;

  @Field(type => Int)
  @Column({ name: 'w3_enemy_local_position_y_1', type: 'integer' })
  w3EnemyLocalPositionY1: number;

  @Field(type => Float)
  @Column({ name: 'w3_enemy_size_1', type: 'real' })
  w3EnemySize1: number;

  @Field(type => Int)
  @Column({ name: 'w3_enemy_position_x_2', type: 'integer' })
  w3EnemyPositionX2: number;

  @Field(type => Int)
  @Column({ name: 'w3_enemy_local_position_y_2', type: 'integer' })
  w3EnemyLocalPositionY2: number;

  @Field(type => Float)
  @Column({ name: 'w3_enemy_size_2', type: 'real' })
  w3EnemySize2: number;

  @Field(type => Int)
  @Column({ name: 'w3_enemy_position_x_3', type: 'integer' })
  w3EnemyPositionX3: number;

  @Field(type => Int)
  @Column({ name: 'w3_enemy_local_position_y_3', type: 'integer' })
  w3EnemyLocalPositionY3: number;

  @Field(type => Float)
  @Column({ name: 'w3_enemy_size_3', type: 'real' })
  w3EnemySize3: number;

  @Field(type => Int)
  @Column({ name: 'w3_enemy_position_x_4', type: 'integer' })
  w3EnemyPositionX4: number;

  @Field(type => Int)
  @Column({ name: 'w3_enemy_local_position_y_4', type: 'integer' })
  w3EnemyLocalPositionY4: number;

  @Field(type => Float)
  @Column({ name: 'w3_enemy_size_4', type: 'real' })
  w3EnemySize4: number;

  @Field(type => Int)
  @Column({ name: 'w3_enemy_position_x_5', type: 'integer' })
  w3EnemyPositionX5: number;

  @Field(type => Int)
  @Column({ name: 'w3_enemy_local_position_y_5', type: 'integer' })
  w3EnemyLocalPositionY5: number;

  @Field(type => Float)
  @Column({ name: 'w3_enemy_size_5', type: 'real' })
  w3EnemySize5: number;

  @Field(type => Int)
  @Column({ name: 'background', type: 'integer' })
  background: number;

  @Field(type => Int)
  @Column({ name: 'bg_position', type: 'integer' })
  bgPosition: number;

}

