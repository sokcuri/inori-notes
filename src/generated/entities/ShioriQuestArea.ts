import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'shiori_quest_area' })
export class ShioriQuestArea extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'area_id', type: 'integer' })
  areaId: number;

  @Field(type => Int)
  @Column({ name: 'event_id', type: 'integer' })
  eventId: number;

  @Field(type => String)
  @Column({ name: 'area_name', type: 'text' })
  areaName: string;

  @Field(type => Int)
  @Column({ name: 'map_type', type: 'integer' })
  mapType: number;

  @Field(type => String)
  @Column({ name: 'sheet_id', type: 'text' })
  sheetId: string;

  @Field(type => String)
  @Column({ name: 'que_id', type: 'text' })
  queId: string;

  @Field(type => Int)
  @Column({ name: 'area_disp', type: 'integer' })
  areaDisp: number;

  @Field(type => Int)
  @Column({ name: 'map_id', type: 'integer' })
  mapId: number;

  @Field(type => Int)
  @Column({ name: 'scroll_width', type: 'integer' })
  scrollWidth: number;

  @Field(type => Int)
  @Column({ name: 'scroll_height', type: 'integer' })
  scrollHeight: number;

  @Field(type => Int)
  @Column({ name: 'open_tutorial_id', type: 'integer' })
  openTutorialId: number;

  @Field(type => String)
  @Column({ name: 'tutorial_param_1', type: 'text' })
  tutorialParam1: string;

  @Field(type => String)
  @Column({ name: 'tutorial_param_2', type: 'text' })
  tutorialParam2: string;

  @Field(type => Int)
  @Column({ name: 'additional_effect', type: 'integer' })
  additionalEffect: number;

  @Field(type => [String])
  get tutorialParam() {
    return [this.tutorialParam1, this.tutorialParam2];
  }

}

