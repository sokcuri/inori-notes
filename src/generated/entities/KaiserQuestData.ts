import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'kaiser_quest_data' })
export class KaiserQuestData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'kaiser_boss_id', type: 'integer' })
  kaiserBossId: number;

  @Field(type => String)
  @Column({ name: 'name', type: 'text' })
  name: string;

  @Field(type => Int)
  @Column({ name: 'map_type', type: 'integer' })
  mapType: number;

  @Field(type => Int)
  @Column({ name: 'battle_start_story_id', type: 'integer' })
  battleStartStoryId: number;

  @Field(type => Int)
  @Column({ name: 'battle_finish_story_id', type: 'integer' })
  battleFinishStoryId: number;

  @Field(type => Int)
  @Column({ name: 'disappearance_story_id', type: 'integer' })
  disappearanceStoryId: number;

  @Field(type => Int)
  @Column({ name: 'limit_time', type: 'integer' })
  limitTime: number;

  @Field(type => Int)
  @Column({ name: 'restriction_group_id', type: 'integer' })
  restrictionGroupId: number;

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
  @Column({ name: 'fix_reward_group_id', type: 'integer' })
  fixRewardGroupId: number;

  @Field(type => String)
  @Column({ name: 'odds_group_id', type: 'text' })
  oddsGroupId: string;

  @Field(type => Int)
  @Column({ name: 'chest_id', type: 'integer' })
  chestId: number;

  @Field(type => Int)
  @Column({ name: 'extermination_reward_group', type: 'integer' })
  exterminationRewardGroup: number;

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
  @Column({ name: 'enemy_position_x', type: 'integer' })
  enemyPositionX: number;

  @Field(type => Int)
  @Column({ name: 'enemy_local_position_y', type: 'integer' })
  enemyLocalPositionY: number;

  @Field(type => Float)
  @Column({ name: 'enemy_size_1', type: 'real' })
  enemySize1: number;

  @Field(type => Float)
  @Column({ name: 'result_boss_position_y', type: 'real' })
  resultBossPositionY: number;

  @Field(type => String)
  @Column({ name: 'wave_bgm', type: 'text' })
  waveBgm: string;

  @Field(type => Float)
  @Column({ name: 'reward_gold_coefficient', type: 'real' })
  rewardGoldCoefficient: number;

  @Field(type => Int)
  @Column({ name: 'limited_mana', type: 'integer' })
  limitedMana: number;

  @Field(type => Int)
  @Column({ name: 'clear_story_id_1', type: 'integer' })
  clearStoryId1: number;

  @Field(type => Int)
  @Column({ name: 'clear_story_id_2', type: 'integer' })
  clearStoryId2: number;

  @Field(type => [Int])
  get rewardImage() {
    return [this.rewardImage1, this.rewardImage2, this.rewardImage3, this.rewardImage4, this.rewardImage5];
  }

  @Field(type => [Int])
  get rewardCount() {
    return [this.rewardCount1, this.rewardCount2, this.rewardCount3, this.rewardCount4, this.rewardCount5];
  }

  @Field(type => [Float])
  get enemySize() {
    return [this.enemySize1];
  }

  @Field(type => [Int])
  get clearStoryId() {
    return [this.clearStoryId1, this.clearStoryId2];
  }

}

