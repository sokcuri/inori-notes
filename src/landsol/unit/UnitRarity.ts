/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Int, Float, ObjectType } from 'type-graphql';
import { UnitRarity } from '../../entities';
import { getRepository } from 'typeorm';

@ObjectType()
export class UnitRarityObject {
  @Field(type => Int)
  unitId: number;

  @Field(type => Int)
  rarity: number;

  @Field(type => Float)
  hp: number;

  @Field(type => Float)
  hpGrowth: number;

  @Field(type => Float)
  atk: number;

  @Field(type => Float)
  atkGrowth: number;

  @Field(type => Float)
  magicStr: number;

  @Field(type => Float)
  magicStrGrowth: number;

  @Field(type => Float)
  def: number;

  @Field(type => Float)
  defGrowth: number;

  @Field(type => Float)
  magicDef: number;

  @Field(type => Float)
  magicDefGrowth: number;

  @Field(type => Float)
  physicalCritical: number;

  @Field(type => Float)
  physicalCriticalGrowth: number;

  @Field(type => Float)
  magicCritical: number;

  @Field(type => Float)
  magicCriticalGrowth: number;

  @Field(type => Float)
  waveHpRecovery: number;

  @Field(type => Float)
  waveHpRecoveryGrowth: number;

  @Field(type => Float)
  waveEnergyRecovery: number;

  @Field(type => Float)
  waveEnergyRecoveryGrowth: number;

  @Field(type => Float)
  dodge: number;

  @Field(type => Float)
  dodgeGrowth: number;

  @Field(type => Float)
  physicalPenetrate: number;

  @Field(type => Float)
  physicalPenetrateGrowth: number;

  @Field(type => Float)
  magicPenetrate: number;

  @Field(type => Float)
  magicPenetrateGrowth: number;

  @Field(type => Float)
  lifeSteal: number;

  @Field(type => Float)
  lifeStealGrowth: number;

  @Field(type => Float)
  hpRecoveryRate: number;

  @Field(type => Float)
  hpRecoveryRateGrowth: number;

  @Field(type => Float)
  energyRecoveryRate: number;

  @Field(type => Float)
  energyRecoveryRateGrowth: number;

  @Field(type => Float)
  energyReduceRate: number;

  @Field(type => Float)
  energyReduceRateGrowth: number;

  @Field(type => Int)
  unitMaterialId: number;

  @Field(type => Int)
  consumeNum: number;

  @Field(type => Int)
  consumeGold: number;

  @Field(type => Float)
  accuracy: number;

  @Field(type => Float)
  accuracyGrowth: number;
}

export async function unitRarity(unitId: number): Promise<UnitRarityObject[]> {
  return getRepository(UnitRarity)
    .createQueryBuilder('UnitRarity')
    .where('UnitRarity.unitId = :unitId', { unitId })
    .getMany();
}
