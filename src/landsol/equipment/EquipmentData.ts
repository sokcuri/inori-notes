/* eslint-disable @typescript-eslint/no-unused-vars */
import { ObjectType, Field, Int, Float } from 'type-graphql';
import { getRepository } from 'typeorm';
import { EquipmentData } from '../../entities';

@ObjectType()
export class EquipmentDataObject {
  @Field(type => Int)
  equipmentId: number;

  @Field(type => String)
  equipmentName: string;

  @Field(type => String)
  description: string;

  @Field(type => Int)
  promotionLevel: number;

  @Field(type => Int)
  craftFlg: number;

  @Field(type => Int)
  equipmentEnhancePoint: number;

  @Field(type => Int)
  salePrice: number;

  @Field(type => Int)
  requireLevel: number;

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

  @Field(type => Int)
  enableDonation: number;

  @Field(type => Float)
  accuracy: number;

  @Field(type => Int)
  displayItem: number;

  @Field(type => Int)
  itemType: number;
}

export async function equipmentData(equipmentId: number): Promise<EquipmentDataObject> {
  return getRepository(EquipmentData)
    .createQueryBuilder('EquipmentData')
    .where('EquipmentData.equipmentId = :equipmentId', { equipmentId })
    .getOne();
}
