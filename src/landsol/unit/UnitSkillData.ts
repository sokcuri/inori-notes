/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Int, ObjectType } from 'type-graphql';
import { getRepository, BaseEntity } from 'typeorm';
import { UnitSkillData } from '../../entities';

@ObjectType()
export class UnitSkillDataObject extends BaseEntity {
  @Field(type => Int)
  unitId: number;

  @Field(type => Int, { nullable: true })
  unionBurst?: number;

  @Field(type => [Int], { nullable: true })
  mainSkill?: number[];

  @Field(type => [Int], { nullable: true })
  exSkill?: number[];

  @Field(type => [Int], { nullable: true })
  exSkillEvolution?: number[];

  @Field(type => [Int], { nullable: true })
  spSkill?: number[];

  @Field(type => Int, { nullable: true })
  unionBurstEvolution?: number;

  @Field(type => [Int], { nullable: true })
  mainSkillEvolution?: number[];
}

export async function unitSkillData(unitId: number): Promise<UnitSkillDataObject> {
  return await getRepository<UnitSkillDataObject>(UnitSkillData)
  .createQueryBuilder('UnitSkillData')
  .where('UnitSkillData.unitId = :unitId', { unitId })
  .getOne();
}
