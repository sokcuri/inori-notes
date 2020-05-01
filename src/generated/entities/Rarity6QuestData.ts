import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'rarity_6_quest_data' })
export class Rarity6QuestData extends BaseEntity {
  @Field()
  @Column({ name: 'rarity_6_quest_id', type: 'integer' })
  rarity6QuestId: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'unit_id', type: 'integer' })
  unitId: number;

  @Field()
  @Column({ name: 'quest_name', type: 'text' })
  questName: string;

  @Field()
  @Column({ name: 'limit_time', type: 'integer' })
  limitTime: number;

  @Field()
  @Column({ name: 'recommended_level', type: 'integer' })
  recommendedLevel: number;

  @Field()
  @Column({ name: 'reward_group_id', type: 'integer' })
  rewardGroupId: number;

  @Field()
  @Column({ name: 'treasure_type', type: 'integer' })
  treasureType: number;

  @Field()
  @Column({ name: 'reward_image_1', type: 'integer' })
  rewardImage1: number;

  @Field()
  @Column({ name: 'reward_count_1', type: 'integer' })
  rewardCount1: number;

  @Field()
  @Column({ name: 'reward_image_2', type: 'integer' })
  rewardImage2: number;

  @Field()
  @Column({ name: 'reward_count_2', type: 'integer' })
  rewardCount2: number;

  @Field()
  @Column({ name: 'reward_image_3', type: 'integer' })
  rewardImage3: number;

  @Field()
  @Column({ name: 'reward_count_3', type: 'integer' })
  rewardCount3: number;

  @Field()
  @Column({ name: 'reward_image_4', type: 'integer' })
  rewardImage4: number;

  @Field()
  @Column({ name: 'reward_count_4', type: 'integer' })
  rewardCount4: number;

  @Field()
  @Column({ name: 'reward_image_5', type: 'integer' })
  rewardImage5: number;

  @Field()
  @Column({ name: 'reward_count_5', type: 'integer' })
  rewardCount5: number;

  @Field()
  @Column({ name: 'background', type: 'integer' })
  background: number;

  @Field()
  @Column({ name: 'bg_position', type: 'integer' })
  bgPosition: number;

  @Field()
  @Column({ name: 'wave_group_id', type: 'integer' })
  waveGroupId: number;

  @Field()
  @Column({ name: 'enemy_position_x_1', type: 'integer' })
  enemyPositionX1: number;

  @Field()
  @Column({ name: 'enemy_local_position_y_1', type: 'integer' })
  enemyLocalPositionY1: number;

  @Field()
  @Column({ name: 'enemy_size_1', type: 'real' })
  enemySize1: number;

  @Field()
  @Column({ name: 'enemy_position_x_2', type: 'integer' })
  enemyPositionX2: number;

  @Field()
  @Column({ name: 'enemy_local_position_y_2', type: 'integer' })
  enemyLocalPositionY2: number;

  @Field()
  @Column({ name: 'enemy_size_2', type: 'real' })
  enemySize2: number;

  @Field()
  @Column({ name: 'enemy_position_x_3', type: 'integer' })
  enemyPositionX3: number;

  @Field()
  @Column({ name: 'enemy_local_position_y_3', type: 'integer' })
  enemyLocalPositionY3: number;

  @Field()
  @Column({ name: 'enemy_size_3', type: 'real' })
  enemySize3: number;

  @Field()
  @Column({ name: 'enemy_position_x_4', type: 'integer' })
  enemyPositionX4: number;

  @Field()
  @Column({ name: 'enemy_local_position_y_4', type: 'integer' })
  enemyLocalPositionY4: number;

  @Field()
  @Column({ name: 'enemy_size_4', type: 'real' })
  enemySize4: number;

  @Field()
  @Column({ name: 'enemy_position_x_5', type: 'integer' })
  enemyPositionX5: number;

  @Field()
  @Column({ name: 'enemy_local_position_y_5', type: 'integer' })
  enemyLocalPositionY5: number;

  @Field()
  @Column({ name: 'enemy_size_5', type: 'real' })
  enemySize5: number;

  @Field()
  @Column({ name: 'wave_bgm', type: 'text' })
  waveBgm: string;

}

