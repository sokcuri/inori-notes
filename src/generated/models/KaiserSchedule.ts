import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'kaiser_schedule' })
export class KaiserSchedule extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

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
  count_start_time: string;

  @Field()
  @Column('text')
  close_time: string;

  @Field()
  @Column('integer')
  story_id: number;

  @Field()
  @Column('integer')
  close_story_condition_id: number;

  @Field()
  @Column('integer')
  close_story_id: number;

  @Field()
  @Column('text')
  top_bgm: string;

  @Field()
  @Column('text')
  top_bg: string;

  @Field()
  @Column('text')
  after_bgm: string;

  @Field()
  @Column('text')
  after_bg: string;

}

