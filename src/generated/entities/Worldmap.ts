import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'worldmap' })
export class Worldmap extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'course_id', type: 'integer' })
  courseId: number;

  @Field(type => String)
  @Column({ name: 'name', type: 'text' })
  name: string;

  @Field(type => Int)
  @Column({ name: 'map_id', type: 'integer' })
  mapId: number;

  @Field(type => String)
  @Column({ name: 'sheet_id', type: 'text' })
  sheetId: string;

  @Field(type => String)
  @Column({ name: 'que_id', type: 'text' })
  queId: string;

  @Field(type => Int)
  @Column({ name: 'start_area_id', type: 'integer' })
  startAreaId: number;

  @Field(type => Int)
  @Column({ name: 'end_area_id', type: 'integer' })
  endAreaId: number;

}

