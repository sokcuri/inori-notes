import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'nyx_story_data' })
export class NyxStoryData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  story_id: number;

  @Field()
  @Column('integer')
  story_seq: number;

  @Field()
  @Column('integer')
  story_phase: number;

  @Field()
  @Column('text')
  title: string;

  @Field()
  @Column('text')
  sub_title: string;

  @Field()
  @Column('text')
  read_condition_time: string;

  @Field()
  @Column('integer')
  condition_quest_id: number;

  @Field()
  @Column('integer')
  condition_boss_count: number;

  @Field()
  @Column('integer')
  adv_flg: number;

  @Field()
  @Column('integer')
  adv_id: number;

}

