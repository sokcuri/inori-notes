import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_map_event' })
export class HatsuneMapEvent extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => Int)
  @Column({ name: 'target_event_id', type: 'integer' })
  targetEventId: number;

  @Field(type => Int)
  @Column({ name: 'event_type', type: 'integer' })
  eventType: number;

  @Field(type => Int)
  @Column({ name: 'condition_id', type: 'integer' })
  conditionId: number;

  @Field(type => Int)
  @Column({ name: 'param1', type: 'integer' })
  param1: number;

  @Field(type => Int)
  @Column({ name: 'param2', type: 'integer' })
  param2: number;

}

