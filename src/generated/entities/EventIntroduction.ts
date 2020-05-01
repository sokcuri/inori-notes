import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'event_introduction' })
export class EventIntroduction extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field()
  @Column({ name: 'event_id', type: 'integer' })
  eventId: number;

  @Field()
  @Column({ name: 'introduction_number', type: 'integer' })
  introductionNumber: number;

  @Field()
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field()
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

  @Field()
  @Column({ name: 'maximum_chunk_size_1', type: 'integer' })
  maximumChunkSize1: number;

  @Field()
  @Column({ name: 'maximum_chunk_size_loop_1', type: 'integer' })
  maximumChunkSizeLoop1: number;

  @Field()
  @Column({ name: 'maximum_chunk_size_2', type: 'integer' })
  maximumChunkSize2: number;

  @Field()
  @Column({ name: 'maximum_chunk_size_loop_2', type: 'integer' })
  maximumChunkSizeLoop2: number;

  @Field()
  @Column({ name: 'maximum_chunk_size_3', type: 'integer' })
  maximumChunkSize3: number;

  @Field()
  @Column({ name: 'maximum_chunk_size_loop_3', type: 'integer' })
  maximumChunkSizeLoop3: number;

  @Field()
  @Column({ name: 'sheet_id', type: 'text' })
  sheetId: string;

  @Field()
  @Column({ name: 'que_id', type: 'text' })
  queId: string;

}

