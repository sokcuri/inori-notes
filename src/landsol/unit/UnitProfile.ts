/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Int, ObjectType } from 'type-graphql';
import { UnitProfile } from '../../entities';
import { getRepository } from 'typeorm';

@ObjectType()
export class UnitProfileObject {
  @Field(type => Int)
  unitId: number;

  @Field(type => String)
  unitName: string;

  @Field(type => String)
  age: string;

  @Field(type => String)
  guild: string;

  @Field(type => String)
  race: string;

  @Field(type => String)
  height: string;

  @Field(type => String)
  weight: string;

  @Field(type => String)
  birthMonth: string;

  @Field(type => String)
  birthDay: string;

  @Field(type => String)
  bloodType: string;

  @Field(type => String)
  favorite: string;

  @Field(type => String)
  voice: string;

  @Field(type => Int)
  voiceId: number;

  @Field(type => String)
  catchCopy: string;

  @Field(type => String)
  selfText: string;

  @Field(type => String)
  guildId: string;
}

export async function unitProfile(unitId: number): Promise<UnitProfileObject> {
  return getRepository(UnitProfile)
    .createQueryBuilder('UnitProfile')
    .where('UnitProfile.unitId = :unitId', { unitId })
    .getOne();
}
