/* eslint-disable @typescript-eslint/no-unused-vars */
import { Resolver, Field, Query, Arg, Int, ObjectType, ID } from 'type-graphql';
import { getRepository, BaseEntity } from 'typeorm';
import {
  ActualUnitBackground,
  UnitBackground,
  UnitComments,
  UnitData,
  UnitProfile,
  UnitRarity,
  UnitPromotion,
  UnitPromotionStatus,
  UnitSkillData,
} from '../entities';

@ObjectType()
class ActualUnitBackgroundResp extends ActualUnitBackground { }

@ObjectType()
class UnitBackgroundResp extends UnitBackground { }

@ObjectType()
class UnitCommentsResp extends UnitComments { }

@ObjectType()
class UnitDataResp extends UnitData { }

@ObjectType()
class UnitProfileResp extends UnitProfile { }

@ObjectType()
class UnitRarityResp extends UnitRarity { }

@ObjectType()
class UnitPromotionResp extends UnitPromotion { }

@ObjectType()
class UnitPromotionStatusResp extends UnitPromotionStatus { }

@ObjectType()
class UnitSkillDataResp extends BaseEntity {
  @Field(type => ID)
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

async function actualUnitBackground(unitId: number): Promise<ActualUnitBackgroundResp> {
  return getRepository(ActualUnitBackground)
    .createQueryBuilder('ActualUnitBackground')
    .where('ActualUnitBackground.unitId = :unitId', { unitId: unitId + 30 })
    .getOne();
}

async function unitBackground(unitId: number): Promise<UnitBackgroundResp> {
  return getRepository(UnitBackground)
    .createQueryBuilder('UnitBackground')
    .where('UnitBackground.unitId = :unitId', { unitId })
    .getOne();
}

async function unitComments(unitId: number): Promise<UnitCommentsResp> {
  return getRepository(UnitComments)
    .createQueryBuilder('UnitComments')
    .where('UnitComments.unitId = :unitId', { unitId })
    .getOne();
}

async function unitProfile(unitId: number): Promise<UnitProfileResp> {
  return getRepository(UnitProfile)
    .createQueryBuilder('UnitProfile')
    .where('UnitProfile.unitId = :unitId', { unitId })
    .getOne();
}

async function unitData(unitId: number): Promise<UnitDataResp> {
  return getRepository(UnitData)
  .createQueryBuilder('UnitData')
  .where('UnitData.unitId = :unitId', { unitId })
  .getOne();
}

async function unitRarity(unitId: number): Promise<UnitRarityResp[]> {
  return getRepository(UnitRarity)
  .createQueryBuilder('UnitRarity')
  .where('UnitRarity.unitId = :unitId', { unitId })
  .getMany();
}

async function unitSkillData(unitId: number): Promise<UnitSkillDataResp> {
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

  const resp = new UnitSkillDataResp();
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

async function unitPromotion(unitId: number, level: number): Promise<UnitPromotionResp> {
  return getRepository(UnitPromotion)
  .createQueryBuilder('UnitPromotion')
  .where('UnitPromotion.unitId = :unitId AND UnitPromotion.promotionLevel = :level', { unitId, level })
  .getOne();
}

async function unitPromotionStatus(unitId: number): Promise<UnitPromotionStatusResp[]> {
  return getRepository(UnitPromotionStatus)
  .createQueryBuilder('UnitPromotionStatus')
  .where('UnitPromotionStatus.unitId = :unitId', { unitId })
  .getMany();
}

@Resolver()
export class UnitResolver {
  @Query(returns => ActualUnitBackgroundResp)
  async getActualUnitBackground(
    @Arg("unitId", type => Int) unitId: number
  ): Promise<ActualUnitBackgroundResp> {
    return await actualUnitBackground(unitId);
  }

  @Query(returns => UnitBackgroundResp)
  async getUnitBackground(
    @Arg("unitId", type => Int) unitId: number
  ): Promise<UnitBackgroundResp> {
    return await unitBackground(unitId);
  }

  @Query(returns => UnitCommentsResp)
  async getUnitComments(
    @Arg("unitId", type => Int) unitId: number
  ): Promise<UnitCommentsResp> {
    return await unitComments(unitId);
  }

  @Query(returns => UnitDataResp)
  async getUnitData(
    @Arg("unitId", type => Int) unitId: number
  ): Promise<UnitDataResp> {
    return await unitData(unitId);
  }

  @Query(returns => UnitProfileResp)
  async getUnitProfile(
    @Arg("unitId", type => Int) unitId: number
  ): Promise<UnitProfileResp> {
    return await unitProfile(unitId);
  }

  @Query(returns => [UnitRarityResp])
  async getUnitRarity(
    @Arg("unitId", type => Int) unitId: number
  ): Promise<UnitRarityResp[]> {
    return await unitRarity(unitId);
  }

  @Query(returns => UnitSkillDataResp)
  async getUnitSkillData(
    @Arg("unitId", type => Int) unitId: number
  ): Promise<UnitSkillDataResp> {
    return await unitSkillData(unitId);
  }

  @Query(returns => UnitPromotion)
  async getUnitPromotion(
    @Arg("unitId", type => Int) unitId: number,
    @Arg("level", type => Int) level: number,
  ): Promise<UnitPromotion> {
    return await unitPromotion(unitId, level);
  }

  @Query(returns => [UnitPromotionStatus])
  async getUnitPromotionStatus(
    @Arg("unitId", type => Int) unitId: number
  ): Promise<UnitPromotionStatus[]> {
    return await unitPromotionStatus(unitId);
  }
}
