/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Int, ObjectType } from 'type-graphql';
import { UnitPromotion, EquipmentData } from '../../entities';
import { getRepository } from 'typeorm';
import { equipmentData } from '..';

interface UnitPromotionBase<T> {
  promotionLevel: number;
  equipSlot?: T[];
}

@ObjectType()
export class UnitPromotionObject implements UnitPromotionBase<number> {
  @Field(type => Int)
  promotionLevel: number;

  @Field(type => [Int])
  equipSlot: number[];
}

@ObjectType()
export class UnitPromotionDetailObject implements UnitPromotionBase<EquipmentData> {
  @Field(type => Int)
  promotionLevel: number;

  @Field(type => [EquipmentData], { nullable: 'itemsAndList' })
  equipSlot?: EquipmentData[];
}

async function toDetailObject(p: UnitPromotionObject[], func: Function) {
  const toData = async (id: number) => func(id);
  const toArray = async (ids: number[]) => Promise.all(ids.filter(id => !!id).map(id => func(id)));

  const result: UnitPromotionDetailObject[] = [];
  for (const item of p) {
    const obj = new UnitPromotionDetailObject();
    obj.promotionLevel = item.promotionLevel;
    obj.equipSlot = await toArray(item.equipSlot);
    result.push(obj);
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

  return toDetailObject(data, equipmentData);
}
