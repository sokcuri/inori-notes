import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'ttk_score' })
export class TtkScore extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'difficulty_level', type: 'integer' })
  difficultyLevel: number;

  @Field()
  @Column({ name: 'coefficient_difficulty', type: 'integer' })
  coefficientDifficulty: number;

  @Field()
  @Column({ name: 'coefficient_coin_score', type: 'integer' })
  coefficientCoinScore: number;

  @Field()
  @Column({ name: 'life', type: 'integer' })
  life: number;

  @Field()
  @Column({ name: 'coefficient_wrong_num', type: 'integer' })
  coefficientWrongNum: number;

}

