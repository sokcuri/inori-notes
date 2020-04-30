import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'event_bg_data' })
export class EventBgData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  event_id: number;

  @Field()
  @Column('integer')
  bg_id: number;

  @Field()
  @Column('text')
  start_date: string;

  @Field()
  @Column('text')
  end_date: string;

}

