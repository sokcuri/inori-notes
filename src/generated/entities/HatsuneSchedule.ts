import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_schedule' })
export class HatsuneSchedule extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'event_id', type: 'integer' })
  eventId: number;

  @Field(type => String)
  @Column({ name: 'teaser_time', type: 'text' })
  teaserTime: string;

  @Field(type => String)
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field(type => String)
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

  @Field(type => String)
  @Column({ name: 'close_time', type: 'text' })
  closeTime: string;

  @Field(type => Int)
  @Column({ name: 'background', type: 'integer' })
  background: number;

  @Field(type => String)
  @Column({ name: 'sheet_id', type: 'text' })
  sheetId: string;

  @Field(type => String)
  @Column({ name: 'que_id', type: 'text' })
  queId: string;

  @Field(type => Int)
  @Column({ name: 'banner_unit_id', type: 'integer' })
  bannerUnitId: number;

  @Field(type => String)
  @Column({ name: 'count_start_time', type: 'text' })
  countStartTime: string;

  @Field(type => Int)
  @Column({ name: 'backgroud_size_x', type: 'integer' })
  backgroudSizeX: number;

  @Field(type => Int)
  @Column({ name: 'backgroud_size_y', type: 'integer' })
  backgroudSizeY: number;

  @Field(type => Int)
  @Column({ name: 'backgroud_pos_x', type: 'integer' })
  backgroudPosX: number;

  @Field(type => Int)
  @Column({ name: 'backgroud_pos_y', type: 'integer' })
  backgroudPosY: number;

  @Field(type => Int)
  @Column({ name: 'original_event_id', type: 'integer' })
  originalEventId: number;

}

