import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'vote_info' })
export class VoteInfo extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'vote_id', type: 'integer' })
  voteId: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'vote_help_index', type: 'integer' })
  voteHelpIndex: number;

  @Field(type => String)
  @Column({ name: 'vote_title', type: 'text' })
  voteTitle: string;

  @Field(type => String)
  @Column({ name: 'vote_help', type: 'text' })
  voteHelp: string;

}

