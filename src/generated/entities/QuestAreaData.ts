import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'quest_area_data' })
export class QuestAreaData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'area_id', type: 'integer' })
  areaId: number;

  @Field()
  @Column({ name: 'area_name', type: 'text' })
  areaName: string;

  @Field()
  @Column({ name: 'area_display_name', type: 'text' })
  areaDisplayName: string;

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
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field()
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

}

