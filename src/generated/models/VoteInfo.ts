import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'vote_info' })
export class VoteInfo extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  vote_id: number;

  @Field(type => ID)
  @PrimaryColumn('integer')
  vote_help_index: number;

  @Field()
  @Column('text')
  vote_title: string;

  @Field()
  @Column('text')
  vote_help: string;

}

