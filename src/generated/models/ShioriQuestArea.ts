import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'shiori_quest_area' })
export class ShioriQuestArea extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  area_id: number;

  @Field()
  @Column('integer')
  event_id: number;

  @Field()
  @Column('text')
  area_name: string;

  @Field()
  @Column('integer')
  map_type: number;

  @Field()
  @Column('text')
  sheet_id: string;

  @Field()
  @Column('text')
  que_id: string;

  @Field()
  @Column('integer')
  area_disp: number;

  @Field()
  @Column('integer')
  map_id: number;

  @Field()
  @Column('integer')
  scroll_width: number;

  @Field()
  @Column('integer')
  scroll_height: number;

  @Field()
  @Column('integer')
  open_tutorial_id: number;

  @Field()
  @Column('text')
  tutorial_param_1: string;

  @Field()
  @Column('text')
  tutorial_param_2: string;

  @Field()
  @Column('integer')
  additional_effect: number;

}

