import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'pct_evaluation' })
export class PctEvaluation extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'evaluation_id', type: 'integer' })
  evaluationId: number;

  @Field()
  @Column({ name: 'evaluation_point', type: 'integer' })
  evaluationPoint: number;

  @Field()
  @Column({ name: 'fever_point', type: 'integer' })
  feverPoint: number;

  @Field()
  @Column({ name: 'meet_width', type: 'integer' })
  meetWidth: number;

}

