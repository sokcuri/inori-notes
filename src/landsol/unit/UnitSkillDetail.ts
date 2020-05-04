/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Int, ObjectType } from 'type-graphql';
import { BaseEntity } from 'typeorm';

import { SkillDataObject, UnitSkillDataObject, skillData, unitSkillData } from '..';

@ObjectType()
export class UnitSkillDetailObject extends BaseEntity {
  @Field(type => Int)
  unitId: number;

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

  result.unitId = p.unitId;
  result.unionBurst = await toSkillData(p.unionBurst);
  result.mainSkill = await toSkillDataArray(p.mainSkill);
  result.exSkill = await toSkillDataArray(p.exSkill);
  result.exSkillEvolution = await toSkillDataArray(p.exSkillEvolution);
  result.spSkill = await toSkillDataArray(p.spSkill);
  result.unionBurstEvolution = await toSkillData(p.unionBurstEvolution);
  result.mainSkillEvolution = await toSkillDataArray(p.mainSkillEvolution);
  return result;
}

export async function unitSkillDetail(unitId: number): Promise<UnitSkillDetailObject> {
  const skillData = await unitSkillData(unitId);
  return toDetailObject(skillData);
}
