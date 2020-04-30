import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'kaiser_quest_data' })
export class KaiserQuestData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  kaiser_boss_id: number;

  @Field()
  @Column('text')
  name: string;

  @Field()
  @Column('integer')
  map_type: number;

  @Field()
  @Column('integer')
  battle_start_story_id: number;

  @Field()
  @Column('integer')
  battle_finish_story_id: number;

  @Field()
  @Column('integer')
  disappearance_story_id: number;

  @Field()
  @Column('integer')
  limit_time: number;

  @Field()
  @Column('integer')
  restriction_group_id: number;

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
  fix_reward_group_id: number;

  @Field()
  @Column('text')
  odds_group_id: string;

  @Field()
  @Column('integer')
  chest_id: number;

  @Field()
  @Column('integer')
  extermination_reward_group: number;

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
  enemy_position_x: number;

  @Field()
  @Column('integer')
  enemy_local_position_y: number;

  @Field()
  @Column('real')
  enemy_size_1: number;

  @Field()
  @Column('real')
  result_boss_position_y: number;

  @Field()
  @Column('text')
  wave_bgm: string;

  @Field()
  @Column('real')
  reward_gold_coefficient: number;

  @Field()
  @Column('integer')
  limited_mana: number;

  @Field()
  @Column('integer')
  clear_story_id_1: number;

  @Field()
  @Column('integer')
  clear_story_id_2: number;

}

