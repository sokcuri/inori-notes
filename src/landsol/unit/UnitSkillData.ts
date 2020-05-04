/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Int, ObjectType } from 'type-graphql';
import { getRepository, BaseEntity } from 'typeorm';
import { UnitSkillData } from '../../entities';
import { SkillDataObject } from '..';
import { skillData } from '..';

interface UnitSkillBase<T> {
  unionBurst?: T;
  mainSkill?: T[];
  exSkill?: T[];
  exSkillEvolution?: T[];
  spSkill?: T[];
  unionBurstEvolution?: T;
  mainSkillEvolution?: T[];
}

@ObjectType()
export class UnitSkillDataObject extends BaseEntity implements UnitSkillBase<number> {
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

@ObjectType()
export class UnitSkillDetailObject extends BaseEntity implements UnitSkillBase<SkillDataObject> {
  @Field(type => SkillDataObject, { nullable: true })
  unionBurst?: SkillDataObject;

  @Field(type => [SkillDataObject], { nullable: true })
  mainSkill?: SkillDataObject[];

  @Field(type => [SkillDataObject], { nullable: true })
  exSkill?: SkillDataObject[];

  @Field(type => [SkillDataObject], { nullable: true })
  exSkillEvolution?: SkillDataObject[];

  @Field(type => [SkillDataObject], { nullable: true })
  spSkill?: SkillDataObject[];

  @Field(type => SkillDataObject, { nullable: true })
  unionBurstEvolution?: SkillDataObject;

  @Field(type => [SkillDataObject], { nullable: true })
  mainSkillEvolution?: SkillDataObject[];
}

async function toDetailObject(p: UnitSkillDataObject) {
  const toSkillData = async (skillId: number) => await skillData(skillId);
  const toSkillDataArray = async (skillIds: number[]) => {
    const skillDataArray = skillIds.filter(id => !!id).map(id => skillData(id));
    return Promise.all(skillDataArray);
  };

  const result = new UnitSkillDetailObject();

  result.unionBurst = await toSkillData(p.unionBurst);
  result.mainSkill = await toSkillDataArray(p.mainSkill);
  result.exSkill = await toSkillDataArray(p.exSkill);
  result.exSkillEvolution = await toSkillDataArray(p.exSkillEvolution);
  result.spSkill = await toSkillDataArray(p.spSkill);
  result.unionBurstEvolution = await toSkillData(p.unionBurstEvolution);
  result.mainSkillEvolution = await toSkillDataArray(p.mainSkillEvolution);
  return result;
}


export async function unitSkillData(unitId: number): Promise<UnitSkillDataObject> {
  return await getRepository<UnitSkillDataObject>(UnitSkillData)
  .createQueryBuilder('UnitSkillData')
  .where('UnitSkillData.unitId = :unitId', { unitId })
  .getOne();
}

export async function unitSkillDetail(unitId: number): Promise<UnitSkillDetailObject> {
  const skillData = await getRepository<UnitSkillDataObject>(UnitSkillData)
  .createQueryBuilder('UnitSkillData')
  .where('UnitSkillData.unitId = :unitId', { unitId })
  .getOne();

  return toDetailObject(skillData);
}
