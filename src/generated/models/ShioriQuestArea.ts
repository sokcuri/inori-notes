import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'shiori_quest_area' })
export class ShioriQuestArea extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'area_id', type: 'integer' })
  areaId: number;

  @Field()
  @Column({ name: 'event_id', type: 'integer' })
  eventId: number;

  @Field()
  @Column({ name: 'area_name', type: 'text' })
  areaName: string;

  @Field()
  @Column({ name: 'map_type', type: 'integer' })
  mapType: number;

  @Field()
  @Column({ name: 'sheet_id', type: 'text' })
  sheetId: string;

  @Field()
  @Column({ name: 'que_id', type: 'text' })
  queId: string;

  @Field()
  @Column({ name: 'area_disp', type: 'integer' })
  areaDisp: number;

  @Field()
  @Column({ name: 'map_id', type: 'integer' })
  mapId: number;

  @Field()
  @Column({ name: 'scroll_width', type: 'integer' })
  scrollWidth: number;

  @Field()
  @Column({ name: 'scroll_height', type: 'integer' })
  scrollHeight: number;

  @Field()
  @Column({ name: 'open_tutorial_id', type: 'integer' })
  openTutorialId: number;

  @Field()
  @Column({ name: 'tutorial_param_1', type: 'text' })
  tutorialParam1: string;

  @Field()
  @Column({ name: 'tutorial_param_2', type: 'text' })
  tutorialParam2: string;

  @Field()
  @Column({ name: 'additional_effect', type: 'integer' })
  additionalEffect: number;

}

