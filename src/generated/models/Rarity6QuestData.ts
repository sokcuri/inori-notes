import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'rarity_6_quest_data' })
export class Rarity6QuestData extends BaseEntity {
  @Field()
  @Column('integer')
  rarity_6_quest_id: number;

  @Field(type => ID)
  @PrimaryColumn('integer')
  unit_id: number;

  @Field()
  @Column('text')
  quest_name: string;

  @Field()
  @Column('integer')
  limit_time: number;

  @Field()
  @Column('integer')
  recommended_level: number;

  @Field()
  @Column('integer')
  reward_group_id: number;

  @Field()
  @Column('integer')
  treasure_type: number;

  @Field()
  @Column('integer')
  reward_image_1: number;

  @Field()
  @Column('integer')
  reward_count_1: number;

  @Field()
  @Column('integer')
  reward_image_2: number;

  @Field()
  @Column('integer')
  reward_count_2: number;

  @Field()
  @Column('integer')
  reward_image_3: number;

  @Field()
  @Column('integer')
  reward_count_3: number;

  @Field()
  @Column('integer')
  reward_image_4: number;

  @Field()
  @Column('integer')
  reward_count_4: number;

  @Field()
  @Column('integer')
  reward_image_5: number;

  @Field()
  @Column('integer')
  reward_count_5: number;

  @Field()
  @Column('integer')
  background: number;

  @Field()
  @Column('integer')
  bg_position: number;

  @Field()
  @Column('integer')
  wave_group_id: number;

  @Field()
  @Column('integer')
  enemy_position_x_1: number;

  @Field()
  @Column('integer')
  enemy_local_position_y_1: number;

  @Field()
  @Column('real')
  enemy_size_1: number;

  @Field()
  @Column('integer')
  enemy_position_x_2: number;

  @Field()
  @Column('integer')
  enemy_local_position_y_2: number;

  @Field()
  @Column('real')
  enemy_size_2: number;

  @Field()
  @Column('integer')
  enemy_position_x_3: number;

  @Field()
  @Column('integer')
  enemy_local_position_y_3: number;

  @Field()
  @Column('real')
  enemy_size_3: number;

  @Field()
  @Column('integer')
  enemy_position_x_4: number;

  @Field()
  @Column('integer')
  enemy_local_position_y_4: number;

  @Field()
  @Column('real')
  enemy_size_4: number;

  @Field()
  @Column('integer')
  enemy_position_x_5: number;

  @Field()
  @Column('integer')
  enemy_local_position_y_5: number;

  @Field()
  @Column('real')
  enemy_size_5: number;

  @Field()
  @Column('text')
  wave_bgm: string;

}

