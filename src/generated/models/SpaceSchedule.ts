import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'space_schedule' })
export class SpaceSchedule extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  space_id: number;

  @Field()
  @Column('text')
  teaser_time: string;

  @Field()
  @Column('text')
  start_time: string;

  @Field()
  @Column('text')
  count_start_time: string;

  @Field()
  @Column('text')
  count_end_time: string;

  @Field()
  @Column('text')
  end_time: string;

  @Field()
  @Column('integer')
  sid: number;

  @Field()
  @Column('integer')
  pre_story_id: number;

}

