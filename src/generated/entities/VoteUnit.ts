import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'vote_unit' })
export class VoteUnit extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'vote_id', type: 'integer' })
  voteId: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'unit_id', type: 'integer' })
  unitId: number;

  @Field(type => Int)
  @Column({ name: 'unit_rarity', type: 'integer' })
  unitRarity: number;

}

