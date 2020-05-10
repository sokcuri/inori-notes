/* eslint-disable @typescript-eslint/no-unused-vars */
import { Int, ObjectType, Field, Float } from 'type-graphql';
import * as Entity from '../entities';
import * as Landsol from '../landsol';
import * as Types from './types';

@ObjectType()
export class Skill {
  constructor(category: Types.SkillCategory, data: Entity.SkillData) {
    this.id = data.skillId;
    this.name = data.name;
    this.category = Types.SkillCategory[category];
    this.skillType = data.skillType;
    this.range = data.skillAreaWidth;
    this.castTime = data.skillCastTime;
    this.description = data.description;
    this.iconType = data.iconType;
    this.action = [];
  }

  @Field(type => Int)
  id: number;

  @Field(type => String)
  name: string;

  @Field(type => String)
  category: string;

  @Field(type => Int)
  skillType: number;

  @Field(type => Int)
  range: number;

  @Field(type => Float)
  castTime: number;

  @Field(type => String)
  description: string;

  @Field(type => Int)
  iconType: Types.SkillIconType;

  @Field(type => [Landsol.Action])
  action: Landsol.Action[];
}
