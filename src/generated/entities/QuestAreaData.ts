import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'quest_area_data' })
export class QuestAreaData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'area_id', type: 'integer' })
  areaId: number;

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

  @Field(type => String)
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field(type => String)
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

}

