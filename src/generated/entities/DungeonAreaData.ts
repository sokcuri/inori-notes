import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'dungeon_area_data' })
export class DungeonAreaData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'dungeon_area_id', type: 'integer' })
  dungeonAreaId: number;

  @Field(type => Int)
  @Column({ name: 'dungeon_type', type: 'integer' })
  dungeonType: number;

  @Field(type => String)
  @Column({ name: 'dungeon_name', type: 'text' })
  dungeonName: string;

  @Field(type => String)
  @Column({ name: 'description', type: 'text' })
  description: string;

  @Field(type => Int)
  @Column({ name: 'open_quest_id', type: 'integer' })
  openQuestId: number;

  @Field(type => Int)
  @Column({ name: 'content_release_story', type: 'integer' })
  contentReleaseStory: number;

  @Field(type => Int)
  @Column({ name: 'initial_clear_story', type: 'integer' })
  initialClearStory: number;

  @Field(type => Int)
  @Column({ name: 'wave_group_id', type: 'integer' })
  waveGroupId: number;

  @Field(type => Int)
  @Column({ name: 'reward_group_id', type: 'integer' })
  rewardGroupId: number;

  @Field(type => Int)
  @Column({ name: 'recommend_level', type: 'integer' })
  recommendLevel: number;

  @Field(type => Int)
  @Column({ name: 'quest_position_x', type: 'integer' })
  questPositionX: number;

  @Field(type => Int)
  @Column({ name: 'quest_position_y', type: 'integer' })
  questPositionY: number;

  @Field(type => Int)
  @Column({ name: 'icon_id', type: 'integer' })
  iconId: number;

  @Field(type => Int)
  @Column({ name: 'coin_item_id', type: 'integer' })
  coinItemId: number;

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
  @Column({ name: 'view_reward_id_1', type: 'integer' })
  viewRewardId1: number;

  @Field(type => Int)
  @Column({ name: 'view_reward_id_2', type: 'integer' })
  viewRewardId2: number;

  @Field(type => Int)
  @Column({ name: 'view_reward_id_3', type: 'integer' })
  viewRewardId3: number;

  @Field(type => Int)
  @Column({ name: 'view_reward_id_4', type: 'integer' })
  viewRewardId4: number;

  @Field(type => Int)
  @Column({ name: 'view_reward_id_5', type: 'integer' })
  viewRewardId5: number;

  @Field(type => Int)
  @Column({ name: 'recovery_hp_rate', type: 'integer' })
  recoveryHpRate: number;

  @Field(type => Int)
  @Column({ name: 'recovery_tp_rate', type: 'integer' })
  recoveryTpRate: number;

  @Field(type => String)
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field(type => String)
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

}

