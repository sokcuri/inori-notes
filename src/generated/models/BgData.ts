import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'bg_data' })
export class BgData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'view_name', type: 'text' })
  viewName: string;

  @Field()
  @Column({ name: 'bg_id', type: 'integer' })
  bgId: number;

  @Field()
  @Column({ name: 'event_id', type: 'integer' })
  eventId: number;

}

