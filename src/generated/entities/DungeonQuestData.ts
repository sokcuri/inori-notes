import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'dungeon_quest_data' })
export class DungeonQuestData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'quest_id', type: 'integer' })
  questId: number;

  @Field(type => Int)
  @Column({ name: 'dungeon_area_id', type: 'integer' })
  dungeonAreaId: number;

  @Field(type => Int)
  @Column({ name: 'floor_num', type: 'integer' })
  floorNum: number;

  @Field(type => Int)
  @Column({ name: 'limit_time', type: 'integer' })
  limitTime: number;

  @Field(type => Float)
  @Column({ name: 'matching_coefficient', type: 'real' })
  matchingCoefficient: number;

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
  @Column({ name: 'reward_coin', type: 'integer' })
  rewardCoin: number;

  @Field(type => Int)
  @Column({ name: 'chest_id', type: 'integer' })
  chestId: number;

  @Field(type => Int)
  @Column({ name: 'odds_group_id', type: 'integer' })
  oddsGroupId: number;

  @Field(type => Int)
  @Column({ name: 'background', type: 'integer' })
  background: number;

  @Field(type => Int)
  @Column({ name: 'dungeon_quest_detail_bg_id', type: 'integer' })
  dungeonQuestDetailBgId: number;

  @Field(type => Int)
  @Column({ name: 'dungeon_quest_detail_bg_position', type: 'integer' })
  dungeonQuestDetailBgPosition: number;

  @Field(type => Float)
  @Column({ name: 'dungeon_quest_detail_monster_size', type: 'real' })
  dungeonQuestDetailMonsterSize: number;

  @Field(type => Float)
  @Column({ name: 'dungeon_quest_detail_monster_height', type: 'real' })
  dungeonQuestDetailMonsterHeight: number;

  @Field(type => String)
  @Column({ name: 'wave_bgm_sheet_id_1', type: 'text' })
  waveBgmSheetId1: string;

  @Field(type => String)
  @Column({ name: 'wave_bgm_que_id_1', type: 'text' })
  waveBgmQueId1: string;

  @Field(type => [Int])
  get rewardImage() {
    return [this.rewardImage1, this.rewardImage2, this.rewardImage3];
  }

}

