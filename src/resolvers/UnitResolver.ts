/* eslint-disable @typescript-eslint/no-unused-vars */
import { Resolver, Field, Query, Arg, Int, ObjectType } from 'type-graphql';
import { getRepository } from 'typeorm';
import {
  ActualUnitBackground,
  UnitBackground,
  UnitComments,
  UnitData,
  UnitProfile,
  UnitRarity,
  UnitPromotion,
  UnitPromotionStatus,
} from '../entities';

@ObjectType()
class UnitResponse {
  // we can freely add more fields or overwrite the existing one's types
  @Field(type => ActualUnitBackground, { nullable: true })
  actualUnitBackground?: ActualUnitBackground;

  @Field(type => UnitBackground, { nullable: true })
  unitBackground?: UnitBackground;

  @Field(type => UnitComments, { nullable: true })
  unitComments?: UnitComments;

  @Field(type => UnitProfile, { nullable: true })
  unitProfile?: UnitProfile;

  @Field(type => UnitData)
  unitData: UnitData;

  @Field(type => [UnitRarity])
  unitRarity: UnitRarity[];

  @Field(type => [UnitPromotionStatus])
  unitPromotionStatus: UnitPromotionStatus[];
}

async function actualUnitBackground(unitId: number) {
  return await getRepository(ActualUnitBackground)
    .createQueryBuilder('ActualUnitBackground')
    .where('ActualUnitBackground.unitId = :unitId', { unitId: unitId + 30 })
    .getOne();
}

async function unitBackground(unitId: number) {
  return await getRepository(UnitBackground)
    .createQueryBuilder('UnitBackground')
    .where('UnitBackground.unitId = :unitId', { unitId })
    .getOne();
}

async function unitComments(unitId: number) {
  return await getRepository(UnitComments)
    .createQueryBuilder('UnitComments')
    .where('UnitComments.unitId = :unitId', { unitId })
    .getOne();
}

async function unitProfile(unitId: number) {
  return await getRepository(UnitProfile)
    .createQueryBuilder('UnitProfile')
    .where('UnitProfile.unitId = :unitId', { unitId })
    .getOne();
}

async function unitData(unitId: number) {
  return await getRepository(UnitData)
  .createQueryBuilder('UnitData')
  .where('UnitData.unitId = :unitId', { unitId })
  .getOne();
}

async function unitRarity(unitId: number) {
  return await getRepository(UnitRarity)
  .createQueryBuilder('UnitRarity')
  .where('UnitRarity.unitId = :unitId', { unitId })
  .getMany();
}

async function unitPromotion(unitId: number, level: number) {
  return await getRepository(UnitPromotion)
  .createQueryBuilder('UnitPromotion')
  .where('UnitPromotion.unitId = :unitId AND UnitPromotion.promotionLevel = :level', { unitId, level })
  .getOne();
}

async function unitPromotionStatus(unitId: number) {
  return await getRepository(UnitPromotionStatus)
  .createQueryBuilder('UnitPromotionStatus')
  .where('UnitPromotionStatus.unitId = :unitId', { unitId })
  .getMany();
}

@Resolver()
export class UnitResolver {
  @Query(returns => UnitResponse)
  async getUnit(
    @Arg("unitId", type => Int) unitId: number
  ): Promise<UnitResponse> {
    return {
      actualUnitBackground: await actualUnitBackground(unitId),
      unitBackground: await unitBackground(unitId),
      unitComments: await unitComments(unitId),
      unitData: await unitData(unitId),
      unitProfile: await unitProfile(unitId),
      unitRarity: await unitRarity(unitId),
      unitPromotionStatus: await unitPromotionStatus(unitId)
    };
  }

  @Query(() => UnitPromotion)
  async getUnitPromotion(
    @Arg("unitId", type => Int) unitId: number,
    @Arg("level", type => Int) level: number,
  ): Promise<UnitPromotion> {
    return unitPromotion(unitId, level);
  }
}
