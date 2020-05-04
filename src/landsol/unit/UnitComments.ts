/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Int, Float, ObjectType } from 'type-graphql';
import { UnitComments } from '../../entities';
import { getRepository } from 'typeorm';

@ObjectType()
export class UnitCommentsObject {
  @Field(type => Int)
  id: number;

  @Field(type => Int)
  unitId: number;

  @Field(type => Int)
  useType: number;

  @Field(type => Int)
  voiceId: number;

  @Field(type => Int)
  faceId: number;

  @Field(type => Float)
  changeTime: number;

  @Field(type => Int)
  changeFace: number;

  @Field(type => String)
  description: string;

}

export async function unitComments(unitId: number): Promise<UnitCommentsObject> {
  return getRepository(UnitComments)
    .createQueryBuilder('UnitComments')
    .where('UnitComments.unitId = :unitId', { unitId })
    .getOne();
}
