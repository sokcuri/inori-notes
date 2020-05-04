/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Int, ObjectType, Float } from 'type-graphql';
import { UnitData } from '../../entities';
import { getRepository } from 'typeorm';

@ObjectType()
export class UnitDataObject {
  @Field(type => Int)
  unitId: number;

  @Field(type => String)
  unitName: string;

  @Field(type => String)
  kana: string;

  @Field(type => Int)
  prefabId: number;

  @Field(type => Int)
  isLimited: number;

  @Field(type => Int)
  rarity: number;

  @Field(type => Int)
  motionType: number;

  @Field(type => Int)
  seType: number;

  @Field(type => Int)
  moveSpeed: number;

  @Field(type => Int)
  searchAreaWidth: number;

  @Field(type => Int)
  atkType: number;

  @Field(type => Float)
  normalAtkCastTime: number;

  @Field(type => Int)
  cutin1: number;

  @Field(type => Int)
  cutin2: number;

  @Field(type => Int)
  cutin1Star6: number;

  @Field(type => Int)
  cutin2Star6: number;

  @Field(type => Int)
  guildId: number;

  @Field(type => Int)
  exskillDisplay: number;

  @Field(type => String)
  comment: string;

  @Field(type => Int)
  onlyDispOwned: number;

  @Field(type => String)
  startTime: string;

  @Field(type => String)
  endTime: string;
}

export async function unitData(unitId: number): Promise<UnitDataObject> {
  return getRepository(UnitData)
    .createQueryBuilder('UnitData')
    .where('UnitData.unitId = :unitId', { unitId })
    .getOne();
}
