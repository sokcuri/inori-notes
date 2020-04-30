import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'experience_unit' })
export class ExperienceUnit extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  unit_level: number;

  @Field()
  @Column('integer')
  total_exp: number;

}

