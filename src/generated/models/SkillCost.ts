import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'skill_cost' })
export class SkillCost extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  target_level: number;

  @Field()
  @Column('integer')
  cost: number;

}

