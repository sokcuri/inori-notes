import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_schedule' })
export class HatsuneSchedule extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  event_id: number;

  @Field()
  @Column('text')
  teaser_time: string;

  @Field()
  @Column('text')
  start_time: string;

  @Field()
  @Column('text')
  end_time: string;

  @Field()
  @Column('text')
  close_time: string;

  @Field()
  @Column('integer')
  background: number;

  @Field()
  @Column('text')
  sheet_id: string;

  @Field()
  @Column('text')
  que_id: string;

  @Field()
  @Column('integer')
  banner_unit_id: number;

  @Field()
  @Column('text')
  count_start_time: string;

  @Field()
  @Column('integer')
  backgroud_size_x: number;

  @Field()
  @Column('integer')
  backgroud_size_y: number;

  @Field()
  @Column('integer')
  backgroud_pos_x: number;

  @Field()
  @Column('integer')
  backgroud_pos_y: number;

  @Field()
  @Column('integer')
  original_event_id: number;

  @Field()
  @Column('integer')
  series_event_id: number;

}

