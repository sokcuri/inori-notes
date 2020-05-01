import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'srt_score' })
export class SrtScore extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'difficulty_level', type: 'integer' })
  difficultyLevel: number;

  @Field(type => Int)
  @Column({ name: 'coefficient_read_type_1', type: 'integer' })
  coefficientReadType1: number;

  @Field(type => Int)
  @Column({ name: 'coefficient_read_type_2', type: 'integer' })
  coefficientReadType2: number;

  @Field(type => Int)
  @Column({ name: 'coefficient_read_type_3', type: 'integer' })
  coefficientReadType3: number;

  @Field(type => Int)
  @Column({ name: 'coefficient_count_priconne_panel', type: 'integer' })
  coefficientCountPriconnePanel: number;

  @Field(type => Int)
  @Column({ name: 'coefficient_fever', type: 'integer' })
  coefficientFever: number;

  @Field(type => Int)
  @Column({ name: 'constant_turn_bonus', type: 'integer' })
  constantTurnBonus: number;

  @Field(type => Int)
  @Column({ name: 'coefficient_turn_bonus', type: 'integer' })
  coefficientTurnBonus: number;

  @Field(type => Int)
  @Column({ name: 'coefficient_avg_answer_time', type: 'integer' })
  coefficientAvgAnswerTime: number;

  @Field(type => Int)
  @Column({ name: 'constant_wrong_num', type: 'integer' })
  constantWrongNum: number;

  @Field(type => Int)
  @Column({ name: 'coefficient_wrong_num', type: 'integer' })
  coefficientWrongNum: number;

}

