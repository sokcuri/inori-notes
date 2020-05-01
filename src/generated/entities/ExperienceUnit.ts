import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'experience_unit' })
export class ExperienceUnit extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'unit_level', type: 'integer' })
  unitLevel: number;

  @Field(type => Int)
  @Column({ name: 'total_exp', type: 'integer' })
  totalExp: number;

}

