import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'ttk_score' })
export class TtkScore extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'difficulty_level', type: 'integer' })
  difficultyLevel: number;

  @Field(type => Int)
  @Column({ name: 'coefficient_difficulty', type: 'integer' })
  coefficientDifficulty: number;

  @Field(type => Int)
  @Column({ name: 'coefficient_coin_score', type: 'integer' })
  coefficientCoinScore: number;

  @Field(type => Int)
  @Column({ name: 'life', type: 'integer' })
  life: number;

  @Field(type => Int)
  @Column({ name: 'coefficient_wrong_num', type: 'integer' })
  coefficientWrongNum: number;

}

