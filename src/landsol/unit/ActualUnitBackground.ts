/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Int, ObjectType } from 'type-graphql';
import { ActualUnitBackground } from '../../entities';
import { getRepository } from 'typeorm';

@ObjectType()
export class ActualUnitBackgroundObject {
  @Field(type => Int)
  unitId: number;

  @Field(type => String)
  unitName: string;

  @Field(type => Int)
  bgId: number;

  @Field(type => Int)
  faceType: number;
}

export async function actualUnitBackground(unitId: number): Promise<ActualUnitBackgroundObject> {
  return getRepository(ActualUnitBackground)
    .createQueryBuilder('ActualUnitBackground')
    .where('ActualUnitBackground.unitId = :unitId', { unitId: Math.floor(unitId / 100) * 100 + 31 })
    .getOne();
}
