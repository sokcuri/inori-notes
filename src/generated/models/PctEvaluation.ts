import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'pct_evaluation' })
export class PctEvaluation extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  evaluation_id: number;

  @Field()
  @Column('integer')
  evaluation_point: number;

  @Field()
  @Column('integer')
  fever_point: number;

  @Field()
  @Column('integer')
  meet_width: number;

}

