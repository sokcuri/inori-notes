import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'event_top_adv' })
export class EventTopAdv extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'event_top_adv_id', type: 'integer' })
  eventTopAdvId: number;

  @Field()
  @Column({ name: 'event_id', type: 'integer' })
  eventId: number;

  @Field()
  @Column({ name: 'type', type: 'integer' })
  type: number;

  @Field()
  @Column({ name: 'value_1', type: 'integer' })
  value1: number;

  @Field()
  @Column({ name: 'value_2', type: 'integer' })
  value2: number;

  @Field()
  @Column({ name: 'value_3', type: 'integer' })
  value3: number;

  @Field()
  @Column({ name: 'story_id', type: 'integer' })
  storyId: number;

  @Field()
  @Column({ name: 'character_id', type: 'integer' })
  characterId: number;

  @Field()
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field()
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

}

