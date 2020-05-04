/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Int, ObjectType } from 'type-graphql';
import { getRepository, BaseEntity } from 'typeorm';
import { UnitSkillData } from '../../entities';
import { SkillDataObject } from '..';
import { skillData } from '..';

interface UnitSkillBase<T> {
  unitId: number;
  unionBurst?: T;
  mainSkill?: T[];
  exSkill?: T[];
  exSkillEvolution?: T[];
  spSkill?: T[];
  unionBurstEvolution?: T;
  mainSkillEvolution?: T[];
}

@ObjectType()
export class UnitSkillDataObject implements UnitSkillBase<number> {
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

@ObjectType()
export class UnitSkillDetailObject implements UnitSkillBase<SkillDataObject> {
  @Field(type => Int)
  unitId: number;

  @Field(type => SkillDataObject, { nullable: true })
  unionBurst?: SkillDataObject;

  @Field(type => [SkillDataObject], { nullable: 'itemsAndList' })
  mainSkill?: SkillDataObject[];

  @Field(type => [SkillDataObject], { nullable: 'itemsAndList' })
  exSkill?: SkillDataObject[];

  @Field(type => [SkillDataObject], { nullable: 'itemsAndList' })
  exSkillEvolution?: SkillDataObject[];

  @Field(type => [SkillDataObject], { nullable: 'itemsAndList' })
  spSkill?: SkillDataObject[];

  @Field(type => SkillDataObject, { nullable: true })
  unionBurstEvolution?: SkillDataObject;

  @Field(type => [SkillDataObject], { nullable: 'itemsAndList' })
  mainSkillEvolution?: SkillDataObject[];
}

async function toDetailObject(p: UnitSkillDataObject, func: Function) {
  const toData = async (id: number) => func(id);
  const toArray = async (ids: number[]) => Promise.all(ids.filter(id => !!id).map(id => func(id)));

  const result = new UnitSkillDetailObject();
  result.unionBurst = await toData(p.unionBurst);
  result.mainSkill = await toArray(p.mainSkill);
  result.exSkill = await toArray(p.exSkill);
  result.exSkillEvolution = await toArray(p.exSkillEvolution);
  result.spSkill = await toArray(p.spSkill);
  result.unionBurstEvolution = await toData(p.unionBurstEvolution);
  result.mainSkillEvolution = await toArray(p.mainSkillEvolution);
  return result;
}

export async function unitSkillData(unitId: number): Promise<UnitSkillDataObject> {
  return await getRepository<UnitSkillDataObject>(UnitSkillData)
  .createQueryBuilder('UnitSkillData')
  .where('UnitSkillData.unitId = :unitId', { unitId })
  .getOne();
}

export async function unitSkillDetail(unitId: number): Promise<UnitSkillDetailObject> {
  const data = await getRepository<UnitSkillDataObject>(UnitSkillData)
  .createQueryBuilder('UnitSkillData')
  .where('UnitSkillData.unitId = :unitId', { unitId })
  .getOne();

  return toDetailObject(data, skillData);
}
