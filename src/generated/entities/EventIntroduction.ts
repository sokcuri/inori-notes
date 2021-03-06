import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'event_introduction' })
export class EventIntroduction extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => Int)
  @Column({ name: 'event_id', type: 'integer' })
  eventId: number;

  @Field(type => Int)
  @Column({ name: 'introduction_number', type: 'integer' })
  introductionNumber: number;

  @Field(type => String)
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field(type => String)
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

  @Field(type => Int)
  @Column({ name: 'maximum_chunk_size_1', type: 'integer' })
  maximumChunkSize1: number;

  @Field(type => Int)
  @Column({ name: 'maximum_chunk_size_loop_1', type: 'integer' })
  maximumChunkSizeLoop1: number;

  @Field(type => Int)
  @Column({ name: 'maximum_chunk_size_2', type: 'integer' })
  maximumChunkSize2: number;

  @Field(type => Int)
  @Column({ name: 'maximum_chunk_size_loop_2', type: 'integer' })
  maximumChunkSizeLoop2: number;

  @Field(type => Int)
  @Column({ name: 'maximum_chunk_size_3', type: 'integer' })
  maximumChunkSize3: number;

  @Field(type => Int)
  @Column({ name: 'maximum_chunk_size_loop_3', type: 'integer' })
  maximumChunkSizeLoop3: number;

  @Field(type => String)
  @Column({ name: 'sheet_id', type: 'text' })
  sheetId: string;

  @Field(type => String)
  @Column({ name: 'que_id', type: 'text' })
  queId: string;

  @Field(type => [Int])
  get maximumChunkSize() {
    return [this.maximumChunkSize1, this.maximumChunkSize2, this.maximumChunkSize3];
  }

  @Field(type => [Int])
  get maximumChunkSizeLoop() {
    return [this.maximumChunkSizeLoop1, this.maximumChunkSizeLoop2, this.maximumChunkSizeLoop3];
  }

}

