/* eslint-disable @typescript-eslint/no-unused-vars */
import { Resolver, Query, Arg, Int, ObjectType, Field } from 'type-graphql';

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
  UnitSkillDetailObject,
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
  unitSkillDetail,
} from '../landsol';

@ObjectType()
class UnitResponse {

  @Field(type => ActualUnitBackgroundObject)
  actualBackground: ActualUnitBackgroundObject;

  @Field(type => UnitBackgroundObject)
  background: UnitBackgroundObject;

  @Field(type => UnitCommentsObject)
  comments: UnitCommentsObject;

  @Field(type => UnitDataObject)
  data: UnitDataObject;

  @Field(type => UnitProfileObject)
  profile: UnitProfileObject;

  @Field(type => [UnitPromotionObject])
  promotion: UnitPromotionObject[];

  @Field(type => [UnitPromotionStatusObject])
  promotionStatus: UnitPromotionStatusObject[];

  @Field(type => [UnitRarityObject])
  rarity: UnitRarityObject[];

  @Field(type => UnitSkillDataObject)
  skillData: UnitSkillDataObject;

  /**  */

  @Field(type => UnitSkillDetailObject)
  skillDetail: UnitSkillDetailObject;

  @Field(type => String)
  name: string;
}

@Resolver()
export class UnitResolver {
  @Query(returns => UnitResponse)
  async getUnit(
    @Arg("unitId", type => Int) unitId: number
  ): Promise<UnitResponse> {
    const actualBackground = await actualUnitBackground(unitId);
    const background = await unitBackground(unitId);
    const comments = await unitComments(unitId);
    const data = await unitData(unitId);
    const profile = await unitProfile(unitId);
    const promotion = await unitPromotion(unitId);
    const promotionStatus = await unitPromotionStatus(unitId);
    const rarity = await unitRarity(unitId);
    const skillData = await unitSkillData(unitId);

    const skillDetail = await unitSkillDetail(unitId);

    const name = 'test';
    return {
      actualBackground,
      background,
      comments,
      data,
      profile,
      promotion,
      promotionStatus,
      rarity,
      skillData,
      skillDetail,
      name
    };
  }


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

  @Query(returns => [UnitPromotionObject])
  async getUnitPromotion(
    @Arg("unitId", type => Int) unitId: number
  ): Promise<UnitPromotionObject[]> {
    return await unitPromotion(unitId);
  }

  @Query(returns => [UnitPromotionStatusObject])
  async getUnitPromotionStatus(
    @Arg("unitId", type => Int) unitId: number
  ): Promise<UnitPromotionStatusObject[]> {
    return await unitPromotionStatus(unitId);
  }
}
