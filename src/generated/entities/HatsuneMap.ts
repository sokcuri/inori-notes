import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_map' })
export class HatsuneMap extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'course_id', type: 'integer' })
  courseId: number;

  @Field()
  @Column({ name: 'event_id', type: 'integer' })
  eventId: number;

  @Field()
  @Column({ name: 'name', type: 'text' })
  name: string;

  @Field()
  @Column({ name: 'map_id', type: 'integer' })
  mapId: number;

  @Field()
  @Column({ name: 'sheet_id', type: 'text' })
  sheetId: string;

  @Field()
  @Column({ name: 'que_id', type: 'text' })
  queId: string;

  @Field()
  @Column({ name: 'start_area_id', type: 'integer' })
  startAreaId: number;

  @Field()
  @Column({ name: 'end_area_id', type: 'integer' })
  endAreaId: number;

}

