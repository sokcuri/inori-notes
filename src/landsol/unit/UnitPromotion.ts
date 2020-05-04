/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Int, ObjectType } from 'type-graphql';
import { UnitPromotion } from '../../entities';
import { getRepository } from 'typeorm';

@ObjectType()
export class UnitPromotionObject {
  @Field(type => Int)
  unitId: number;

  @Field(type => Int)
  promotionLevel: number;

  @Field(type => [Int])
  equipSlot: number[];
}

export async function unitPromotion(unitId: number): Promise<UnitPromotionObject[]> {
  return getRepository(UnitPromotion)
    .createQueryBuilder('UnitPromotion')
    .where('UnitPromotion.unitId = :unitId', { unitId })
    .getMany();
}
