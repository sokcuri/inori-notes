import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'unlock_skill_data' })
export class UnlockSkillData extends BaseEntity {
  @Field()
  @Column('integer')
  promotion_level: number;

  @Field(type => ID)
  @PrimaryColumn('integer')
  unlock_skill: number;

}

