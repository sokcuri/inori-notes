import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'vote_data' })
export class VoteData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'vote_id', type: 'integer' })
  voteId: number;

  @Field(type => String)
  @Column({ name: 'vote_start_time', type: 'text' })
  voteStartTime: string;

  @Field(type => String)
  @Column({ name: 'vote_end_time', type: 'text' })
  voteEndTime: string;

  @Field(type => String)
  @Column({ name: 'result_start_time', type: 'text' })
  resultStartTime: string;

  @Field(type => String)
  @Column({ name: 'result_end_time', type: 'text' })
  resultEndTime: string;

  @Field(type => Int)
  @Column({ name: 'start_story_id', type: 'integer' })
  startStoryId: number;

  @Field(type => Int)
  @Column({ name: 'result_story_id', type: 'integer' })
  resultStoryId: number;

}

