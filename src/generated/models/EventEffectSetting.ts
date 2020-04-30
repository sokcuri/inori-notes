import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'event_effect_setting' })
export class EventEffectSetting extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  event_id: number;

  @Field(type => ID)
  @PrimaryColumn('integer')
  type: number;

  @Field()
  @Column('integer')
  value: number;

}

