/* eslint-disable @typescript-eslint/no-unused-vars */
import { ObjectType, Field, Int, Float } from 'type-graphql';
import { getRepository } from 'typeorm';
import { SkillAction } from '../../entities';

@ObjectType()
export class SkillActionObject {
  @Field(type => Int)
  actionId: number;

  @Field(type => Int)
  classId: number;

  @Field(type => Int)
  actionType: number;

  @Field(type => [Int])
  actionDetail: number[];

  @Field(type => Int)
  actionDetail1: number;

  @Field(type => Int)
  actionDetail2: number;

  @Field(type => Int)
  actionDetail3: number;

  @Field(type => [Float])
  actionValue: number[];

  @Field(type => Float)
  actionValue1: number;

  @Field(type => Float)
  actionValue2: number;

  @Field(type => Float)
  actionValue3: number;

  @Field(type => Float)
  actionValue4: number;

  @Field(type => Float)
  actionValue5: number;

  @Field(type => Float)
  actionValue6: number;

  @Field(type => Float)
  actionValue7: number;

  @Field(type => Int)
  targetAssignment: number;

  @Field(type => Int)
  targetArea: number;

  @Field(type => Int)
  targetRange: number;

  @Field(type => Int)
  targetType: number;

  @Field(type => Int)
  targetNumber: number;

  @Field(type => Int)
  targetCount: number;

  @Field(type => String)
  description: string;

  @Field(type => String)
  levelUpDisp: string;
}

export async function skillAction(skillId: number): Promise<SkillActionObject> {
  return getRepository(SkillAction)
    .createQueryBuilder('SkillAction')
    .where('SkillAction.skillId = :skillId', { skillId })
    .getOne();
}
