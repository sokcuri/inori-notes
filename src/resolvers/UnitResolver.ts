/* eslint-disable @typescript-eslint/camelcase */
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

enum SkillIconType {
  PhysicalSwing         = 1001, // 물리 스킬
  MagicalSwing          = 1002, // 마법 스킬
  BuffStat              = 1003, // 스텟 버프
  DebuffStat            = 1004, // 스텟 디버프
  RecoveryHP            = 1005, // HP 회복
  RecoveryTP            = 1006, // TP 회복
  Snare                 = 1007, // 속박 (츠무기)
  Devil                 = 1008, // 저주 및 속박, 마법 방어력 감소 (할사키)
  Charm                 = 1009, // 매혹
  Dark                  = 1010, // 암흑
  Silence               = 1011, // 침묵
  TauntAll              = 1012, // 도발 (적 전체 도발)
  Barrier               = 1013, // 무효화 배리어
  General_1014          = 1014, // unused
  DebuffField           = 1015, // 마법 방어력 감소 및 TP 상승 감소 필드, 행동속도 감소
  BuffField             = 1016, // 아군의 HP를 회복하는 필드 전개
  Summon                = 1017, // 소환 (예외. 스위트 생츄어리)
  Stun                  = 1018, // 스턴
  Sleep                 = 1019, // 수면
  Freeze                = 1020, // 동면
  Bondage               = 1021, // unused
  Poison                = 1022, // 중독 (독 상태로 만듬, 물리 방어력 감소)
  Burn                  = 1023, // 화상
  Chaos                 = 1024, // 혼돈
  PhysicalSwing2        = 2001, // 물리 스킬
  MagicalSwing2         = 2002, // 마법 스킬
  BuffStat2             = 2003, // 스텟 버프
  DebuffStat2           = 2004, // 스텟 디버프
  RecoveryHP2           = 2005, // HP 회복
  RecoveryTP2           = 2006, // TP 회복
  Snare2                = 2007, // 속박
  Devil2                = 2008, // 저주 및 속박, 마법 방어력 감소
  Charm2                = 2009, // 매혹
  Dark2                 = 2010, // 암흑
  TauntAll2             = 2012, // 도발
  Barrier2              = 2013, // 무효화 배리어
  General_2014          = 2014, // unused
  DebuffField2          = 2015, // 마법 방어력 감소 및 TP 상승 감소 필드, 행동속도 감소
  BuffField2            = 2016, // 아군의 HP를 회복하는 필드 전개
  Summon2               = 2017, // 소환 (예외. 스위트 생츄어리)
  Stun2                 = 2018, // 스턴
  Bondage2              = 2021, // unused
  Poison2               = 2022, // 중독
  Chaos2                = 2024, // 혼돈
  IncreasePhysicalATK   = 3001, // 전투 시작 시 자신의 물리 공격력 증가
  IncreasePhysicalDEF   = 3002, // 전투 시작 시 자신의 물리 방어력 증가
  IncreaseMagicalATK    = 3003, // 전투 시작 시 자신의 마법 공격력 증가
  IncreaseMagicalDEF    = 3004, // 전투 시작 시 자신의 마법 방어력 증가
  IncreaseMaximumHP     = 3005, // 전투 시작 시 자신의 최대 HP 증가
  General_3006          = 3006, // unused
  General_3007          = 3007, // unused
  General_3008          = 3008, // unused
  General_3009          = 3009, // unused
  General_3010          = 3010, // unused
  General_3011          = 3011, // unused
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
  iconType: SkillIconType;

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
