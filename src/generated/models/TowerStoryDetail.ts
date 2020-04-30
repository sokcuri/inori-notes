import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'tower_story_detail' })
export class TowerStoryDetail extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  story_id: number;

  @Field()
  @Column('integer')
  story_group_id: number;

  @Field()
  @Column('text')
  title: string;

  @Field()
  @Column('text')
  sub_title: string;

  @Field()
  @Column('integer')
  visible_type: number;

  @Field()
  @Column('integer')
  story_end: number;

  @Field()
  @Column('integer')
  pre_story_id: number;

  @Field()
  @Column('integer')
  love_level: number;

  @Field()
  @Column('integer')
  requirement_id: number;

  @Field()
  @Column('integer')
  unlock_quest_id: number;

  @Field()
  @Column('integer')
  story_quest_id: number;

  @Field()
  @Column('integer')
  reward_type_1: number;

  @Field()
  @Column('integer')
  reward_id_1: number;

  @Field()
  @Column('integer')
  reward_value_1: number;

  @Field()
  @Column('integer')
  reward_type_2: number;

  @Field()
  @Column('integer')
  reward_id_2: number;

  @Field()
  @Column('integer')
  reward_value_2: number;

  @Field()
  @Column('integer')
  reward_type_3: number;

  @Field()
  @Column('integer')
  reward_id_3: number;

  @Field()
  @Column('integer')
  reward_value_3: number;

  @Field()
  @Column('text')
  start_time: string;

  @Field()
  @Column('text')
  end_time: string;

}

