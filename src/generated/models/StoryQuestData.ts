import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'story_quest_data' })
export class StoryQuestData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  story_quest_id: number;

  @Field()
  @Column('integer')
  story_id: number;

  @Field()
  @Column('text')
  quest_name: string;

  @Field()
  @Column('integer')
  limit_time: number;

  @Field()
  @Column('integer')
  background_1: number;

  @Field()
  @Column('integer')
  wave_group_id_1: number;

  @Field()
  @Column('text')
  wave_bgm_sheet_id_1: string;

  @Field()
  @Column('text')
  wave_bgm_que_id_1: string;

  @Field()
  @Column('integer')
  background_2: number;

  @Field()
  @Column('integer')
  wave_group_id_2: number;

  @Field()
  @Column('text')
  wave_bgm_sheet_id_2: string;

  @Field()
  @Column('text')
  wave_bgm_que_id_2: string;

  @Field()
  @Column('integer')
  background_3: number;

  @Field()
  @Column('integer')
  wave_group_id_3: number;

  @Field()
  @Column('text')
  wave_bgm_sheet_id_3: string;

  @Field()
  @Column('text')
  wave_bgm_que_id_3: string;

  @Field()
  @Column('integer')
  guest_unit_1: number;

  @Field()
  @Column('integer')
  guest_unit_2: number;

  @Field()
  @Column('integer')
  guest_unit_3: number;

  @Field()
  @Column('integer')
  guest_unit_4: number;

  @Field()
  @Column('integer')
  guest_unit_5: number;

}

