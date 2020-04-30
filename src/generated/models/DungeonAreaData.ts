import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'dungeon_area_data' })
export class DungeonAreaData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'dungeon_area_id', type: 'integer' })
  dungeonAreaId: number;

  @Field()
  @Column({ name: 'dungeon_type', type: 'integer' })
  dungeonType: number;

  @Field()
  @Column({ name: 'dungeon_name', type: 'text' })
  dungeonName: string;

  @Field()
  @Column({ name: 'description', type: 'text' })
  description: string;

  @Field()
  @Column({ name: 'open_quest_id', type: 'integer' })
  openQuestId: number;

  @Field()
  @Column({ name: 'content_release_story', type: 'integer' })
  contentReleaseStory: number;

  @Field()
  @Column({ name: 'initial_clear_story', type: 'integer' })
  initialClearStory: number;

  @Field()
  @Column({ name: 'wave_group_id', type: 'integer' })
  waveGroupId: number;

  @Field()
  @Column({ name: 'reward_group_id', type: 'integer' })
  rewardGroupId: number;

  @Field()
  @Column({ name: 'recommend_level', type: 'integer' })
  recommendLevel: number;

  @Field()
  @Column({ name: 'quest_position_x', type: 'integer' })
  questPositionX: number;

  @Field()
  @Column({ name: 'quest_position_y', type: 'integer' })
  questPositionY: number;

  @Field()
  @Column({ name: 'icon_id', type: 'integer' })
  iconId: number;

  @Field()
  @Column({ name: 'coin_item_id', type: 'integer' })
  coinItemId: number;

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
  @Column({ name: 'view_reward_id_1', type: 'integer' })
  viewRewardId1: number;

  @Field()
  @Column({ name: 'view_reward_id_2', type: 'integer' })
  viewRewardId2: number;

  @Field()
  @Column({ name: 'view_reward_id_3', type: 'integer' })
  viewRewardId3: number;

  @Field()
  @Column({ name: 'view_reward_id_4', type: 'integer' })
  viewRewardId4: number;

  @Field()
  @Column({ name: 'view_reward_id_5', type: 'integer' })
  viewRewardId5: number;

  @Field()
  @Column({ name: 'recovery_hp_rate', type: 'integer' })
  recoveryHpRate: number;

  @Field()
  @Column({ name: 'recovery_tp_rate', type: 'integer' })
  recoveryTpRate: number;

  @Field()
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field()
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

}

