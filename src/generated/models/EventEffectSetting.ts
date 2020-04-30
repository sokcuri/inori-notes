import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'event_effect_setting' })
export class EventEffectSetting extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'event_id', type: 'integer' })
  eventId: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'type', type: 'integer' })
  type: number;

  @Field()
  @Column({ name: 'value', type: 'integer' })
  value: number;

}

