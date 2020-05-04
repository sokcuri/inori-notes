import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'event_top_adv' })
export class EventTopAdv extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'event_top_adv_id', type: 'integer' })
  eventTopAdvId: number;

  @Field(type => Int)
  @Column({ name: 'event_id', type: 'integer' })
  eventId: number;

  @Field(type => Int)
  @Column({ name: 'type', type: 'integer' })
  type: number;

  @Field(type => Int)
  @Column({ name: 'value_1', type: 'integer' })
  value1: number;

  @Field(type => Int)
  @Column({ name: 'value_2', type: 'integer' })
  value2: number;

  @Field(type => Int)
  @Column({ name: 'value_3', type: 'integer' })
  value3: number;

  @Field(type => Int)
  @Column({ name: 'story_id', type: 'integer' })
  storyId: number;

  @Field(type => Int)
  @Column({ name: 'character_id', type: 'integer' })
  characterId: number;

  @Field(type => String)
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field(type => String)
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

  @Field(type => [Int])
  get value() {
    return [this.value1, this.value2, this.value3];
  }

}

