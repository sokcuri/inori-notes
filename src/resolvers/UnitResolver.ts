/* eslint-disable @typescript-eslint/no-unused-vars */
import { Resolver, Query, Arg, Int } from 'type-graphql';

import {
  ActualUnitBackgroundObject,
  UnitBackgroundObject,
  UnitCommentsObject,
  UnitDataObject,
  UnitRarityObject,
  UnitProfileObject,
  UnitPromotionObject,
  UnitPromotionStatusObject,
  UnitSkillDataObject,
} from '../landsol';

import {
  actualUnitBackground,
  unitBackground,
  unitComments,
  unitData,
  unitProfile,
  unitPromotion,
  unitPromotionStatus,
  unitRarity,
  unitSkillData,
} from '../landsol';

@Resolver()
export class UnitResolver {
  @Query(returns => ActualUnitBackgroundObject)
  async getActualUnitBackground(
    @Arg("unitId", type => Int) unitId: number
  ): Promise<ActualUnitBackgroundObject> {
    return await actualUnitBackground(unitId);
  }

  @Query(returns => UnitBackgroundObject)
  async getUnitBackground(
    @Arg("unitId", type => Int) unitId: number
  ): Promise<UnitBackgroundObject> {
    return await unitBackground(unitId);
  }

  @Query(returns => UnitCommentsObject)
  async getUnitComments(
    @Arg("unitId", type => Int) unitId: number
  ): Promise<UnitCommentsObject> {
    return await unitComments(unitId);
  }

  @Query(returns => UnitDataObject)
  async getUnitData(
    @Arg("unitId", type => Int) unitId: number
  ): Promise<UnitDataObject> {
    return await unitData(unitId);
  }

  @Query(returns => UnitProfileObject)
  async getUnitProfile(
    @Arg("unitId", type => Int) unitId: number
  ): Promise<UnitProfileObject> {
    return await unitProfile(unitId);
  }

  @Query(returns => [UnitRarityObject])
  async getUnitRarity(
    @Arg("unitId", type => Int) unitId: number
  ): Promise<UnitRarityObject[]> {
    return await unitRarity(unitId);
  }

  @Query(returns => UnitSkillDataObject)
  async getUnitSkillData(
    @Arg("unitId", type => Int) unitId: number
  ): Promise<UnitSkillDataObject> {
    return await unitSkillData(unitId);
  }

  @Query(returns => UnitPromotionObject)
  async getUnitPromotion(
    @Arg("unitId", type => Int) unitId: number,
    @Arg("level", type => Int) level: number,
  ): Promise<UnitPromotionObject> {
    return await unitPromotion(unitId, level);
  }

  @Query(returns => [UnitPromotionStatusObject])
  async getUnitPromotionStatus(
    @Arg("unitId", type => Int) unitId: number
  ): Promise<UnitPromotionStatusObject[]> {
    return await unitPromotionStatus(unitId);
  }
}
