import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'event_story_data' })
export class EventStoryData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  story_group_id: number;

  @Field()
  @Column('integer')
  story_type: number;

  @Field()
  @Column('integer')
  value: number;

  @Field()
  @Column('text')
  title: string;

  @Field()
  @Column('integer')
  thumbnail_id: number;

  @Field()
  @Column('integer')
  disp_order: number;

  @Field()
  @Column('text')
  start_time: string;

  @Field()
  @Column('text')
  end_time: string;

}

