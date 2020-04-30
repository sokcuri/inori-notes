import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'dungeon_area_data' })
export class DungeonAreaData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  dungeon_area_id: number;

  @Field()
  @Column('integer')
  dungeon_type: number;

  @Field()
  @Column('text')
  dungeon_name: string;

  @Field()
  @Column('text')
  description: string;

  @Field()
  @Column('integer')
  open_quest_id: number;

  @Field()
  @Column('integer')
  content_release_story: number;

  @Field()
  @Column('integer')
  initial_clear_story: number;

  @Field()
  @Column('integer')
  wave_group_id: number;

  @Field()
  @Column('integer')
  reward_group_id: number;

  @Field()
  @Column('integer')
  recommend_level: number;

  @Field()
  @Column('integer')
  quest_position_x: number;

  @Field()
  @Column('integer')
  quest_position_y: number;

  @Field()
  @Column('integer')
  icon_id: number;

  @Field()
  @Column('integer')
  coin_item_id: number;

  @Field()
  @Column('integer')
  enemy_image_1: number;

  @Field()
  @Column('integer')
  enemy_image_2: number;

  @Field()
  @Column('integer')
  enemy_image_3: number;

  @Field()
  @Column('integer')
  enemy_image_4: number;

  @Field()
  @Column('integer')
  enemy_image_5: number;

  @Field()
  @Column('integer')
  view_reward_id_1: number;

  @Field()
  @Column('integer')
  view_reward_id_2: number;

  @Field()
  @Column('integer')
  view_reward_id_3: number;

  @Field()
  @Column('integer')
  view_reward_id_4: number;

  @Field()
  @Column('integer')
  view_reward_id_5: number;

  @Field()
  @Column('integer')
  recovery_hp_rate: number;

  @Field()
  @Column('integer')
  recovery_tp_rate: number;

  @Field()
  @Column('text')
  start_time: string;

  @Field()
  @Column('text')
  end_time: string;

}

