import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'event_top_adv' })
export class EventTopAdv extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  event_top_adv_id: number;

  @Field()
  @Column('integer')
  event_id: number;

  @Field()
  @Column('integer')
  type: number;

  @Field()
  @Column('integer')
  value_1: number;

  @Field()
  @Column('integer')
  value_2: number;

  @Field()
  @Column('integer')
  value_3: number;

  @Field()
  @Column('integer')
  story_id: number;

  @Field()
  @Column('integer')
  character_id: number;

  @Field()
  @Column('text')
  start_time: string;

  @Field()
  @Column('text')
  end_time: string;

}

