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
  UnitPromotionDetailObject,
  unitPromotionDetail,
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

import { UnitNotExistError } from '../error';

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

  @Field(type => [UnitPromotionDetailObject])
  promotionDetail: UnitPromotionDetailObject[];

  @Field(type => String)
  name: string;
}

@Resolver()
export class UnitResolver {
  @Query(returns => UnitResponse)
  async unit(
    @Arg("unitId", type => Int) unitId: number
  ): Promise<UnitResponse> {
    const data = await unitData(unitId);
    if (!data) {
      throw new UnitNotExistError(unitId);
    }

    const actualBackground = await actualUnitBackground(unitId);
    const background = await unitBackground(unitId);
    const comments = await unitComments(unitId);
    const profile = await unitProfile(unitId);
    const promotion = await unitPromotion(unitId);
    const promotionStatus = await unitPromotionStatus(unitId);
    const rarity = await unitRarity(unitId);
    const skillData = await unitSkillData(unitId);

    const skillDetail = await unitSkillDetail(unitId);
    const promotionDetail = await unitPromotionDetail(unitId);

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
      promotionDetail,
      name
    };
  }


  @Query(returns => ActualUnitBackgroundObject)
  async actualUnitBackground(
    @Arg("unitId", type => Int) unitId: number
  ): Promise<ActualUnitBackgroundObject> {
    return await actualUnitBackground(unitId);
  }

  @Query(returns => UnitBackgroundObject)
  async unitBackground(
    @Arg("unitId", type => Int) unitId: number
  ): Promise<UnitBackgroundObject> {
    return await unitBackground(unitId);
  }

  @Query(returns => UnitCommentsObject)
  async unitComments(
    @Arg("unitId", type => Int) unitId: number
  ): Promise<UnitCommentsObject> {
    return await unitComments(unitId);
  }

  @Query(returns => UnitDataObject)
  async unitData(
    @Arg("unitId", type => Int) unitId: number
  ): Promise<UnitDataObject> {
    return await unitData(unitId);
  }

  @Query(returns => UnitProfileObject)
  async unitProfile(
    @Arg("unitId", type => Int) unitId: number
  ): Promise<UnitProfileObject> {
    return await unitProfile(unitId);
  }

  @Query(returns => [UnitRarityObject])
  async unitRarity(
    @Arg("unitId", type => Int) unitId: number
  ): Promise<UnitRarityObject[]> {
    return await unitRarity(unitId);
  }

  @Query(returns => UnitSkillDataObject)
  async unitSkillData(
    @Arg("unitId", type => Int) unitId: number
  ): Promise<UnitSkillDataObject> {
    return await unitSkillData(unitId);
  }

  @Query(returns => [UnitPromotionObject])
  async unitPromotion(
    @Arg("unitId", type => Int) unitId: number
  ): Promise<UnitPromotionObject[]> {
    return await unitPromotion(unitId);
  }

  @Query(returns => [UnitPromotionStatusObject])
  async unitPromotionStatus(
    @Arg("unitId", type => Int) unitId: number
  ): Promise<UnitPromotionStatusObject[]> {
    return await unitPromotionStatus(unitId);
  }
}
