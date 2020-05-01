import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'bg_data' })
export class BgData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'view_name', type: 'text' })
  viewName: string;

  @Field(type => Int)
  @Column({ name: 'bg_id', type: 'integer' })
  bgId: number;

  @Field(type => Int)
  @Column({ name: 'event_id', type: 'integer' })
  eventId: number;

}

