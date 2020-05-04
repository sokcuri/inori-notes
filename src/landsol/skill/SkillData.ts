/* eslint-disable @typescript-eslint/no-unused-vars */
import { ObjectType, Field, Int, Float } from 'type-graphql';
import { getRepository } from 'typeorm';
import { SkillData } from '../../entities';

@ObjectType()
export class SkillDataObject {
  @Field(type => Int)
  skillId: number;

  @Field(type => String)
  name: string;

  @Field(type => Int)
  skillType: number;

  @Field(type => Int)
  skillAreaWidth: number;

  @Field(type => Float)
  skillCastTime: number;

  @Field(type => Int)
  action1: number;

  @Field(type => Int)
  action2: number;

  @Field(type => Int)
  action3: number;

  @Field(type => Int)
  action4: number;

  @Field(type => Int)
  action5: number;

  @Field(type => Int)
  action6: number;

  @Field(type => Int)
  action7: number;

  @Field(type => Int)
  dependAction1: number;

  @Field(type => Int)
  dependAction2: number;

  @Field(type => Int)
  dependAction3: number;

  @Field(type => Int)
  dependAction4: number;

  @Field(type => Int)
  dependAction5: number;

  @Field(type => Int)
  dependAction6: number;

  @Field(type => Int)
  dependAction7: number;

  @Field(type => String)
  description: string;

  @Field(type => Int)
  iconType: number;

}

export default async function skillData(skillId: number): Promise<SkillData> {
  return getRepository(SkillData)
    .createQueryBuilder('UnitData')
    .where('UnitData.skillId = :skillId', { skillId })
    .getOne();
}
