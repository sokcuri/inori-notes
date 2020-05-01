import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_schedule' })
export class HatsuneSchedule extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'event_id', type: 'integer' })
  eventId: number;

  @Field()
  @Column({ name: 'teaser_time', type: 'text' })
  teaserTime: string;

  @Field()
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field()
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

  @Field()
  @Column({ name: 'close_time', type: 'text' })
  closeTime: string;

  @Field()
  @Column({ name: 'background', type: 'integer' })
  background: number;

  @Field()
  @Column({ name: 'sheet_id', type: 'text' })
  sheetId: string;

  @Field()
  @Column({ name: 'que_id', type: 'text' })
  queId: string;

  @Field()
  @Column({ name: 'banner_unit_id', type: 'integer' })
  bannerUnitId: number;

  @Field()
  @Column({ name: 'count_start_time', type: 'text' })
  countStartTime: string;

  @Field()
  @Column({ name: 'backgroud_size_x', type: 'integer' })
  backgroudSizeX: number;

  @Field()
  @Column({ name: 'backgroud_size_y', type: 'integer' })
  backgroudSizeY: number;

  @Field()
  @Column({ name: 'backgroud_pos_x', type: 'integer' })
  backgroudPosX: number;

  @Field()
  @Column({ name: 'backgroud_pos_y', type: 'integer' })
  backgroudPosY: number;

  @Field()
  @Column({ name: 'original_event_id', type: 'integer' })
  originalEventId: number;

  @Field()
  @Column({ name: 'series_event_id', type: 'integer' })
  seriesEventId: number;

}

