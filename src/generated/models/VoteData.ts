import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'vote_data' })
export class VoteData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  vote_id: number;

  @Field()
  @Column('text')
  vote_start_time: string;

  @Field()
  @Column('text')
  vote_end_time: string;

  @Field()
  @Column('text')
  result_start_time: string;

  @Field()
  @Column('text')
  result_end_time: string;

  @Field()
  @Column('integer')
  start_story_id: number;

  @Field()
  @Column('integer')
  result_story_id: number;

}

