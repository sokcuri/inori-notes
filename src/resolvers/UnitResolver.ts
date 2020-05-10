/* eslint-disable @typescript-eslint/no-unused-vars */
import { Resolver, Query, Arg, Int, ObjectType, Field, registerEnumType, Float } from 'type-graphql';
import * as Entity from '../entities';
import * as Landsol from '../landsol';

import { UnitNotExistError } from '../error';

enum AttackType {
  Physical = 1,
  Magical = 2,
}

enum Position {
  Front = '전열',
  Middle = '중열',
  End = '후열',
}

enum SkillCategory {
  'UB',
  'UB+',
  'Main',
  'Main+',
  'EX',
  'EX+',
  'SP',
}

@ObjectType()
class Skill {
  constructor(category: SkillCategory, data: Entity.SkillData) {
    this.id = data.skillId;
    this.name = data.name;
    this.category = SkillCategory[category];
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
  iconType: number;

  @Field(type => [String])
  action: string[];
}

@ObjectType()
class Profile {
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
  get birth() {
    return `${this.birthMonth}월 ${this.birthDay}일`;
  }

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

  @Field(type => String)
  catchCopy: string;

  @Field(type => String)
  selfText: string;
}

@ObjectType()
class Response {
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
  position: Position;

  @Field(type => Profile)
  profile: Profile;

  @Field(type => String)
  comment: string;

  @Field(type => [Skill])
  skill: Skill[];
}

registerEnumType(AttackType, {
  name: "AttackType",
  description: "attack type",
});

interface UnitObject {
  actualBackground: Entity.ActualUnitBackground;
  attackPattern: Entity.UnitAttackPattern;
  background: Entity.UnitBackground;
  comments: Entity.UnitComments;
  data: Entity.UnitData;
  profile: Entity.UnitProfile;
  promotion: Entity.UnitPromotion[];
  promotionStatus: Entity.UnitPromotionStatus[];
  rarity: Entity.UnitRarity[];
  skillData: Entity.UnitSkillData;
}

async function getUnitObject(unitId: number): Promise<UnitObject> {
  return {
    actualBackground: await Landsol.getOne(Entity.ActualUnitBackground, { unitId }),
    attackPattern: await Landsol.getOne(Entity.UnitAttackPattern, { unitId }),
    background: await Landsol.getOne(Entity.UnitBackground, { unitId }),
    comments: await Landsol.getOne(Entity.UnitComments, { unitId }),
    data: await Landsol.getOne(Entity.UnitData, { unitId }),
    profile: await Landsol.getOne(Entity.UnitProfile, { unitId }),
    promotion: await Landsol.getMany(Entity.UnitPromotion, { unitId }),
    promotionStatus: await Landsol.getMany(Entity.UnitPromotionStatus, { unitId }),
    rarity: await Landsol.getMany(Entity.UnitRarity, { unitId }),
    skillData: await Landsol.getOne(Entity.UnitSkillData, { unitId }),
  };
}

async function createSkill(category: SkillCategory, data: Entity.SkillData) {
  const skill = new Skill(category, data);
  skill.action.push('test action 1');
  skill.action.push('test action 2');
  skill.action.push('test action 3');

  return skill;
}

async function getSkillList(unit: UnitObject) {
  const skill: Skill[] = [];

  const {
    unionBurst,
    unionBurstEvolution,
    mainSkill,
    mainSkillEvolution,
    spSkill,
    exSkill,
    exSkillEvolution
  } = unit.skillData;

  for (const skillId of [unionBurst]) {
    const data = await Landsol.getOne(Entity.SkillData, { skillId });
    if (data) {
      skill.push(await createSkill(SkillCategory['UB'], data));
    }
  }

  for (const skillId of [unionBurstEvolution]) {
    const data = await Landsol.getOne(Entity.SkillData, { skillId });
    if (data) {
      skill.push(await createSkill(SkillCategory['UB+'], data));
    }
  }

  for (const skillId of mainSkill) {
    const data = await Landsol.getOne(Entity.SkillData, { skillId });
    if (data) {
      skill.push(await createSkill(SkillCategory['Main'], data));
    }
  }

  for (const skillId of mainSkillEvolution) {
    const data = await Landsol.getOne(Entity.SkillData, { skillId });
    if (data) {
      skill.push(await createSkill(SkillCategory['Main+'], data));
    }
  }

  for (const skillId of spSkill) {
    const data = await Landsol.getOne(Entity.SkillData, { skillId });
    if (data) {
      skill.push(await createSkill(SkillCategory['SP'], data));
    }
  }

  for (const skillId of exSkill) {
    const data = await Landsol.getOne(Entity.SkillData, { skillId });
    if (data) {
      skill.push(await createSkill(SkillCategory['EX'], data));
    }
  }

  for (const skillId of exSkillEvolution) {
    const data = await Landsol.getOne(Entity.SkillData, { skillId });
    if (data) {
      skill.push(await createSkill(SkillCategory['EX+'], data));
    }
  }

  return skill;
}

@Resolver()
export class UnitResolver {
  @Query(returns => Response)
  async unit(
    @Arg("unitId", type => Int) unitId: number
  ): Promise<Response> {
    const data = await Landsol.getOne(Entity.UnitData, { unitId });
    if (!data) {
      throw new UnitNotExistError(unitId);
    }

    const unit = await getUnitObject(unitId);
    const skill = await getSkillList(unit);

    function getPosition() {
      if (unit.data.searchAreaWidth <= 300) {
        return Position.Front;
      } else if (unit.data.searchAreaWidth <= 600) {
        return Position.Middle;
      } else {
        return Position.End;
      }
    }

    const {
      unitName: name,
      kana: unitName,
      searchAreaWidth: range,
      rarity,
      comment,
    } = unit.data;

    const attackType = unit.data.atkType === AttackType.Physical ? '물리' : '마법';

    const profile = (unit.profile as unknown) as Profile;
    const position = getPosition();

    return { name, attackType, unitName, rarity, range, position, comment, profile, skill };
  }
}
