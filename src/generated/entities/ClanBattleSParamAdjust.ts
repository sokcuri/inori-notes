import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'clan_battle_s_param_adjust' })
export class ClanBattleSParamAdjust extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'param_adjust_id', type: 'integer' })
  paramAdjustId: number;

  @Field()
  @Column({ name: 'level', type: 'integer' })
  level: number;

  @Field()
  @Column({ name: 'hp', type: 'integer' })
  hp: number;

  @Field()
  @Column({ name: 'atk', type: 'integer' })
  atk: number;

  @Field()
  @Column({ name: 'magic_str', type: 'integer' })
  magicStr: number;

  @Field()
  @Column({ name: 'def', type: 'integer' })
  def: number;

  @Field()
  @Column({ name: 'magic_def', type: 'integer' })
  magicDef: number;

  @Field()
  @Column({ name: 'physical_critical', type: 'integer' })
  physicalCritical: number;

  @Field()
  @Column({ name: 'magic_critical', type: 'integer' })
  magicCritical: number;

  @Field()
  @Column({ name: 'energy_recovery_rate', type: 'integer' })
  energyRecoveryRate: number;

  @Field()
  @Column({ name: 'union_burst_level', type: 'integer' })
  unionBurstLevel: number;

  @Field()
  @Column({ name: 'main_skill_lv_1', type: 'integer' })
  mainSkillLv1: number;

  @Field()
  @Column({ name: 'main_skill_lv_2', type: 'integer' })
  mainSkillLv2: number;

  @Field()
  @Column({ name: 'main_skill_lv_3', type: 'integer' })
  mainSkillLv3: number;

  @Field()
  @Column({ name: 'main_skill_lv_4', type: 'integer' })
  mainSkillLv4: number;

  @Field()
  @Column({ name: 'main_skill_lv_5', type: 'integer' })
  mainSkillLv5: number;

  @Field()
  @Column({ name: 'main_skill_lv_6', type: 'integer' })
  mainSkillLv6: number;

  @Field()
  @Column({ name: 'main_skill_lv_7', type: 'integer' })
  mainSkillLv7: number;

  @Field()
  @Column({ name: 'main_skill_lv_8', type: 'integer' })
  mainSkillLv8: number;

  @Field()
  @Column({ name: 'main_skill_lv_9', type: 'integer' })
  mainSkillLv9: number;

  @Field()
  @Column({ name: 'main_skill_lv_10', type: 'integer' })
  mainSkillLv10: number;

  @Field()
  @Column({ name: 'accuracy', type: 'integer' })
  accuracy: number;

  @Field()
  @Column({ name: 'normal_atk_cast_time', type: 'integer' })
  normalAtkCastTime: number;

  @Field()
  @Column({ name: 'score_coefficient', type: 'integer' })
  scoreCoefficient: number;

}

