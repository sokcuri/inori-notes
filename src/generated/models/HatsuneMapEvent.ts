import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_map_event' })
export class HatsuneMapEvent extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  target_event_id: number;

  @Field()
  @Column('integer')
  event_type: number;

  @Field()
  @Column('integer')
  condition_id: number;

  @Field()
  @Column('integer')
  param1: number;

  @Field()
  @Column('integer')
  param2: number;

}

