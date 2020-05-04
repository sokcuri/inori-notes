/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Int, Float, ObjectType } from 'type-graphql';
import { UnitPromotionStatus } from '../../entities';
import { getRepository } from 'typeorm';

@ObjectType()
export class UnitPromotionStatusObject {
  @Field(type => Int)
  unitId: number;

  @Field(type => Int)
  promotionLevel: number;

  @Field(type => Float)
  hp: number;

  @Field(type => Float)
  atk: number;

  @Field(type => Float)
  magicStr: number;

  @Field(type => Float)
  def: number;

  @Field(type => Float)
  magicDef: number;

  @Field(type => Float)
  physicalCritical: number;

  @Field(type => Float)
  magicCritical: number;

  @Field(type => Float)
  waveHpRecovery: number;

  @Field(type => Float)
  waveEnergyRecovery: number;

  @Field(type => Float)
  dodge: number;

  @Field(type => Float)
  physicalPenetrate: number;

  @Field(type => Float)
  magicPenetrate: number;

  @Field(type => Float)
  lifeSteal: number;

  @Field(type => Float)
  hpRecoveryRate: number;

  @Field(type => Float)
  energyRecoveryRate: number;

  @Field(type => Float)
  energyReduceRate: number;

  @Field(type => Float)
  accuracy: number;

}

export async function unitPromotionStatus(unitId: number): Promise<UnitPromotionStatusObject[]> {
  return getRepository(UnitPromotionStatus)
    .createQueryBuilder('UnitPromotionStatus')
    .where('UnitPromotionStatus.unitId = :unitId', { unitId })
    .getMany();
}
