/* eslint-disable @typescript-eslint/no-unused-vars */
import { Int, ObjectType, Field } from 'type-graphql';
import * as Landsol from '../landsol';
import * as Types from './types';

@ObjectType()
export class Unit {
  @Field(type => String)
  name: string;

  @Field(type => String)
  attackType: string;

  @Field(type => String)
  unitName: string;

  @Field(type => Int)
  rarity: number;

  @Field(type => Int)
  range: number;

  @Field(type => String)
  position: Types.Position;

  @Field(type => Landsol.Profile)
  profile: Landsol.Profile;

  @Field(type => String)
  comment: string;

  @Field(type => [Landsol.Skill])
  skill: Landsol.Skill[];
}
