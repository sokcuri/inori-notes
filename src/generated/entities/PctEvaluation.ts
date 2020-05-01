import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'pct_evaluation' })
export class PctEvaluation extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'evaluation_id', type: 'integer' })
  evaluationId: number;

  @Field(type => Int)
  @Column({ name: 'evaluation_point', type: 'integer' })
  evaluationPoint: number;

  @Field(type => Int)
  @Column({ name: 'fever_point', type: 'integer' })
  feverPoint: number;

  @Field(type => Int)
  @Column({ name: 'meet_width', type: 'integer' })
  meetWidth: number;

}

