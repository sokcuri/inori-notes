import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_map_event' })
export class HatsuneMapEvent extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field()
  @Column({ name: 'target_event_id', type: 'integer' })
  targetEventId: number;

  @Field()
  @Column({ name: 'event_type', type: 'integer' })
  eventType: number;

  @Field()
  @Column({ name: 'condition_id', type: 'integer' })
  conditionId: number;

  @Field()
  @Column({ name: 'param1', type: 'integer' })
  param1: number;

  @Field()
  @Column({ name: 'param2', type: 'integer' })
  param2: number;

}

