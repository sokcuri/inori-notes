/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Int, Float, ObjectType } from 'type-graphql';
import { UnitBackground } from '../../entities';
import { getRepository } from 'typeorm';

@ObjectType()
export class UnitBackgroundObject {
  @Field(type => Int)
  unitId: number;

  @Field(type => String)
  unitName: string;

  @Field(type => Int)
  bgId: number;

  @Field(type => String)
  bgName: string;

  @Field(type => Float)
  position: number;

  @Field(type => Int)
  faceType: number;

}

export async function unitBackground(unitId: number): Promise<UnitBackgroundObject> {
  return getRepository(UnitBackground)
    .createQueryBuilder('UnitBackground')
    .where('UnitBackground.unitId = :unitId', { unitId })
    .getOne();
}
