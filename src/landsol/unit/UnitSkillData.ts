/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Int, ObjectType } from 'type-graphql';
import { getRepository, BaseEntity } from 'typeorm';
import { UnitSkillData } from '../../entities';

@ObjectType()
export class UnitSkillDataObject extends BaseEntity {
  @Field(type => Int)
  unitId: number;

  @Field(type => Int)
  unionBurst: number;

  @Field(type => [Int])
  mainSkill: number[];

  @Field(type => [Int])
  exSkill: number[];

  @Field(type => [Int])
  exSkillEvolution: number[];

  @Field(type => [Int])
  spSkill: number[];

  @Field(type => [Int])
  unionBurstEvolution: number[];

  @Field(type => [Int])
  mainSkillEvolution: number[];
}


export async function unitSkillData(unitId: number): Promise<UnitSkillDataObject> {
  const skillData = await getRepository(UnitSkillData)
  .createQueryBuilder('UnitSkillData')
  .where('UnitSkillData.unitId = :unitId', { unitId })
  .getOne();

  const groups = (prefix: string) => {
    const result: number[] = [];
    Object.entries(skillData)
      .filter(item => item[0].indexOf(prefix) !== -1)
      .forEach(item => {
        const [name, value] = item;
        const id = +name.substr(prefix.length + name.indexOf(prefix));
        if (!isNaN(id)) {
          result.push(value);
        }
      });
    return result;
  };

  const resp = new UnitSkillDataObject();
  resp.unitId = skillData.unitId;
  resp.unionBurst = skillData.unionBurst;
  resp.mainSkill = groups('mainSkill');
  resp.exSkill = groups('exSkill');
  resp.exSkillEvolution = groups('exSkillEvolution');
  resp.spSkill = groups('spSkill');
  resp.unionBurstEvolution = groups('unionBurstEvolution');
  resp.mainSkillEvolution = groups('mainSkillEvolution');
  return resp;
}
