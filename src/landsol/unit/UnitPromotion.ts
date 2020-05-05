/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Int, ObjectType } from 'type-graphql';
import { UnitPromotion } from '../../entities';
import { getRepository } from 'typeorm';
import {
  EquipmentDataObject,
  EquipmentCraftObject,
  EquipmentEnhanceRateObject
} from '..';

import {
  equipmentCraft,
  equipmentData,
  equipmentEnhanceRate
} from '..';

interface UnitPromotionBase<T> {
  promotionLevel: number;
  equipSlot?: T[];
}

@ObjectType()
class EquipmentObject {
  @Field(type => EquipmentCraftObject, { nullable: true })
  craft?: EquipmentCraftObject;

  @Field(type => EquipmentDataObject, { nullable: true })
  data?: EquipmentDataObject;

  @Field(type => EquipmentEnhanceRateObject, { nullable: true })
  enhanceRate?: EquipmentEnhanceRateObject;
}

@ObjectType()
export class UnitPromotionObject implements UnitPromotionBase<number> {
  @Field(type => Int)
  promotionLevel: number;

  @Field(type => [Int])
  equipSlot: number[];
}

@ObjectType()
export class UnitPromotionDetailObject implements UnitPromotionBase<EquipmentObject> {
  @Field(type => Int)
  promotionLevel: number;

  @Field(type => [EquipmentObject], { nullable: 'itemsAndList' })
  equipSlot?: EquipmentObject[];
}

async function toDetailObject(unitPromotion: UnitPromotionObject[]) {
  const result: UnitPromotionDetailObject[] = [];
  for (const item of unitPromotion) {
    const detail = new UnitPromotionDetailObject();
    detail.promotionLevel = item.promotionLevel;
    detail.equipSlot = [];

    for (const id of item.equipSlot) {
      const equipmentObject = new EquipmentObject();
      equipmentObject.craft = await equipmentCraft(id);
      equipmentObject.data = await equipmentData(id);
      equipmentObject.enhanceRate = await equipmentEnhanceRate(id);
      detail.equipSlot.push(equipmentObject);
    }
    result.push(detail);
  }
  return result;
}

export async function unitPromotion(unitId: number): Promise<UnitPromotionObject[]> {
  return getRepository(UnitPromotion)
    .createQueryBuilder('UnitPromotion')
    .where('UnitPromotion.unitId = :unitId', { unitId })
    .getMany();
}

export async function unitPromotionDetail(unitId: number): Promise<UnitPromotionDetailObject[]> {
  const data = await getRepository(UnitPromotion)
    .createQueryBuilder('UnitPromotion')
    .where('UnitPromotion.unitId = :unitId', { unitId })
    .getMany();

  return await toDetailObject(data);
}
