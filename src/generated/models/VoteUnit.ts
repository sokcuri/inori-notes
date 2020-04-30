import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'vote_unit' })
export class VoteUnit extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  vote_id: number;

  @Field(type => ID)
  @PrimaryColumn('integer')
  unit_id: number;

  @Field()
  @Column('integer')
  unit_rarity: number;

}

