import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'dungeon_quest_data' })
export class DungeonQuestData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'quest_id', type: 'integer' })
  questId: number;

  @Field()
  @Column({ name: 'dungeon_area_id', type: 'integer' })
  dungeonAreaId: number;

  @Field()
  @Column({ name: 'floor_num', type: 'integer' })
  floorNum: number;

  @Field()
  @Column({ name: 'limit_time', type: 'integer' })
  limitTime: number;

  @Field()
  @Column({ name: 'matching_coefficient', type: 'real' })
  matchingCoefficient: number;

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
  @Column({ name: 'reward_coin', type: 'integer' })
  rewardCoin: number;

  @Field()
  @Column({ name: 'chest_id', type: 'integer' })
  chestId: number;

  @Field()
  @Column({ name: 'odds_group_id', type: 'integer' })
  oddsGroupId: number;

  @Field()
  @Column({ name: 'background', type: 'integer' })
  background: number;

  @Field()
  @Column({ name: 'dungeon_quest_detail_bg_id', type: 'integer' })
  dungeonQuestDetailBgId: number;

  @Field()
  @Column({ name: 'dungeon_quest_detail_bg_position', type: 'integer' })
  dungeonQuestDetailBgPosition: number;

  @Field()
  @Column({ name: 'dungeon_quest_detail_monster_size', type: 'real' })
  dungeonQuestDetailMonsterSize: number;

  @Field()
  @Column({ name: 'dungeon_quest_detail_monster_height', type: 'real' })
  dungeonQuestDetailMonsterHeight: number;

  @Field()
  @Column({ name: 'wave_bgm_sheet_id_1', type: 'text' })
  waveBgmSheetId1: string;

  @Field()
  @Column({ name: 'wave_bgm_que_id_1', type: 'text' })
  waveBgmQueId1: string;

}

