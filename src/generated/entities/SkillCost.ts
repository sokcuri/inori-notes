import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'skill_cost' })
export class SkillCost extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'target_level', type: 'integer' })
  targetLevel: number;

  @Field(type => Int)
  @Column({ name: 'cost', type: 'integer' })
  cost: number;

}

