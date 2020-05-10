/* eslint-disable @typescript-eslint/no-unused-vars */
import { Resolver, Query, Arg, Int, ObjectType, Field, registerEnumType, Float } from 'type-graphql';
import * as Util from '../util';
import * as Entity from '../entities';
import { UnitNotExistError } from '../error';

import {
  Action,
  Skill,
  Profile,
  Unit,
} from '../landsol';

import {
  AttackType,
  SkillCategory,
  Position,
} from '../landsol/types';


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
    actualBackground: await Util.getOne(Entity.ActualUnitBackground, { unitId }),
    attackPattern: await Util.getOne(Entity.UnitAttackPattern, { unitId }),
    background: await Util.getOne(Entity.UnitBackground, { unitId }),
    comments: await Util.getOne(Entity.UnitComments, { unitId }),
    data: await Util.getOne(Entity.UnitData, { unitId }),
    profile: await Util.getOne(Entity.UnitProfile, { unitId }),
    promotion: await Util.getMany(Entity.UnitPromotion, { unitId }),
    promotionStatus: await Util.getMany(Entity.UnitPromotionStatus, { unitId }),
    rarity: await Util.getMany(Entity.UnitRarity, { unitId }),
    skillData: await Util.getOne(Entity.UnitSkillData, { unitId }),
  };
}

async function createAction(data: Entity.SkillAction) {
  const action = new Action();
  action.description = data.description;
  action.levelUpDisp = data.levelUpDisp;
  return action;
}

async function getActionList(skillData: Entity.SkillData) {
  const action: Action[] = [];

  for (let i = 0; i < skillData.action.length; i++) {
    const actionId = skillData.action[i];
    const data = await Util.getOne(Entity.SkillAction, { actionId });
    if (data) {
      action.push(await createAction(data));
    }
  }

  return action;
}

async function createSkill(category: SkillCategory, data: Entity.SkillData) {
  const skill = new Skill(category, data);

  const action = await getActionList(data);
  skill.action = action;


  // ;
  // data.dependAction;
  // const action = await Landsol.getOne(Entity.SkillAction, { skillId: skill.id });
  // console.log(action);

  // skill.action.push('test action 1');
  // skill.action.push('test action 2');
  // skill.action.push('test action 3');

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
    const data = await Util.getOne(Entity.SkillData, { skillId });
    if (data) {
      skill.push(await createSkill(SkillCategory['UB'], data));
    }
  }

  for (const skillId of [unionBurstEvolution]) {
    const data = await Util.getOne(Entity.SkillData, { skillId });
    if (data) {
      skill.push(await createSkill(SkillCategory['UB+'], data));
    }
  }

  for (const skillId of mainSkill) {
    const data = await Util.getOne(Entity.SkillData, { skillId });
    if (data) {
      skill.push(await createSkill(SkillCategory['Main'], data));
    }
  }

  for (const skillId of mainSkillEvolution) {
    const data = await Util.getOne(Entity.SkillData, { skillId });
    if (data) {
      skill.push(await createSkill(SkillCategory['Main+'], data));
    }
  }

  for (const skillId of spSkill) {
    const data = await Util.getOne(Entity.SkillData, { skillId });
    if (data) {
      skill.push(await createSkill(SkillCategory['SP'], data));
    }
  }

  for (const skillId of exSkill) {
    const data = await Util.getOne(Entity.SkillData, { skillId });
    if (data) {
      skill.push(await createSkill(SkillCategory['EX'], data));
    }
  }

  for (const skillId of exSkillEvolution) {
    const data = await Util.getOne(Entity.SkillData, { skillId });
    if (data) {
      skill.push(await createSkill(SkillCategory['EX+'], data));
    }
  }

  return skill;
}

@Resolver()
export class UnitResolver {
  @Query(returns => Unit)
  async unit(
    @Arg("unitId", type => Int) unitId: number
  ): Promise<Unit> {
    const data = await Util.getOne(Entity.UnitData, { unitId });
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
