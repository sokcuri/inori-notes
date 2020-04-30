import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'dungeon_quest_data' })
export class DungeonQuestData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  quest_id: number;

  @Field()
  @Column('integer')
  dungeon_area_id: number;

  @Field()
  @Column('integer')
  floor_num: number;

  @Field()
  @Column('integer')
  limit_time: number;

  @Field()
  @Column('real')
  matching_coefficient: number;

  @Field()
  @Column('integer')
  reward_image_1: number;

  @Field()
  @Column('integer')
  reward_image_2: number;

  @Field()
  @Column('integer')
  reward_image_3: number;

  @Field()
  @Column('integer')
  reward_coin: number;

  @Field()
  @Column('integer')
  chest_id: number;

  @Field()
  @Column('integer')
  odds_group_id: number;

  @Field()
  @Column('integer')
  background: number;

  @Field()
  @Column('integer')
  dungeon_quest_detail_bg_id: number;

  @Field()
  @Column('integer')
  dungeon_quest_detail_bg_position: number;

  @Field()
  @Column('real')
  dungeon_quest_detail_monster_size: number;

  @Field()
  @Column('real')
  dungeon_quest_detail_monster_height: number;

  @Field()
  @Column('text')
  wave_bgm_sheet_id_1: string;

  @Field()
  @Column('text')
  wave_bgm_que_id_1: string;

}

