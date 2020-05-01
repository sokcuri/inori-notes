import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'unlock_skill_data' })
export class UnlockSkillData extends BaseEntity {
  @Field(type => Int)
  @Column({ name: 'promotion_level', type: 'integer' })
  promotionLevel: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'unlock_skill', type: 'integer' })
  unlockSkill: number;

}

