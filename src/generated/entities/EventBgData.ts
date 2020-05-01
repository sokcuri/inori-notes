import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'event_bg_data' })
export class EventBgData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'event_id', type: 'integer' })
  eventId: number;

  @Field(type => Int)
  @Column({ name: 'bg_id', type: 'integer' })
  bgId: number;

  @Field(type => String)
  @Column({ name: 'start_date', type: 'text' })
  startDate: string;

  @Field(type => String)
  @Column({ name: 'end_date', type: 'text' })
  endDate: string;

}

