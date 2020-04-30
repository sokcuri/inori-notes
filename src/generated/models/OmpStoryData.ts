import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'omp_story_data' })
export class OmpStoryData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  omp_story_id: number;

  @Field()
  @Column('integer')
  event_id: number;

  @Field()
  @Column('integer')
  condition_quest_id: number;

  @Field()
  @Column('integer')
  condition_boss_id: number;

  @Field()
  @Column('integer')
  story_seq: number;

  @Field()
  @Column('integer')
  is_readable_on_result: number;

  @Field()
  @Column('integer')
  reward_type: number;

  @Field()
  @Column('integer')
  reward_id: number;

  @Field()
  @Column('integer')
  reward_count: number;

  @Field()
  @Column('text')
  sub_title: string;

}

