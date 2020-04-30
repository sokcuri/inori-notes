import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'event_bg_data' })
export class EventBgData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'event_id', type: 'integer' })
  eventId: number;

  @Field()
  @Column({ name: 'bg_id', type: 'integer' })
  bgId: number;

  @Field()
  @Column({ name: 'start_date', type: 'text' })
  startDate: string;

  @Field()
  @Column({ name: 'end_date', type: 'text' })
  endDate: string;

}

