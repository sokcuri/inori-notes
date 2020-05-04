import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'clan_battle_param_adjust' })
export class ClanBattleParamAdjust extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'param_adjust_id', type: 'integer' })
  paramAdjustId: number;

  @Field(type => Int)
  @Column({ name: 'level', type: 'integer' })
  level: number;

  @Field(type => Int)
  @Column({ name: 'hp', type: 'integer' })
  hp: number;

  @Field(type => Int)
  @Column({ name: 'atk', type: 'integer' })
  atk: number;

  @Field(type => Int)
  @Column({ name: 'magic_str', type: 'integer' })
  magicStr: number;

  @Field(type => Int)
  @Column({ name: 'def', type: 'integer' })
  def: number;

  @Field(type => Int)
  @Column({ name: 'magic_def', type: 'integer' })
  magicDef: number;

  @Field(type => Int)
  @Column({ name: 'physical_critical', type: 'integer' })
  physicalCritical: number;

  @Field(type => Int)
  @Column({ name: 'magic_critical', type: 'integer' })
  magicCritical: number;

  @Field(type => Int)
  @Column({ name: 'energy_recovery_rate', type: 'integer' })
  energyRecoveryRate: number;

  @Field(type => Int)
  @Column({ name: 'union_burst_level', type: 'integer' })
  unionBurstLevel: number;

  @Field(type => Int)
  @Column({ name: 'main_skill_lv_1', type: 'integer' })
  mainSkillLv1: number;

  @Field(type => Int)
  @Column({ name: 'main_skill_lv_2', type: 'integer' })
  mainSkillLv2: number;

  @Field(type => Int)
  @Column({ name: 'main_skill_lv_3', type: 'integer' })
  mainSkillLv3: number;

  @Field(type => Int)
  @Column({ name: 'main_skill_lv_4', type: 'integer' })
  mainSkillLv4: number;

  @Field(type => Int)
  @Column({ name: 'main_skill_lv_5', type: 'integer' })
  mainSkillLv5: number;

  @Field(type => Int)
  @Column({ name: 'main_skill_lv_6', type: 'integer' })
  mainSkillLv6: number;

  @Field(type => Int)
  @Column({ name: 'main_skill_lv_7', type: 'integer' })
  mainSkillLv7: number;

  @Field(type => Int)
  @Column({ name: 'main_skill_lv_8', type: 'integer' })
  mainSkillLv8: number;

  @Field(type => Int)
  @Column({ name: 'main_skill_lv_9', type: 'integer' })
  mainSkillLv9: number;

  @Field(type => Int)
  @Column({ name: 'main_skill_lv_10', type: 'integer' })
  mainSkillLv10: number;

  @Field(type => Int)
  @Column({ name: 'accuracy', type: 'integer' })
  accuracy: number;

  @Field(type => Int)
  @Column({ name: 'normal_atk_cast_time', type: 'integer' })
  normalAtkCastTime: number;

  @Field(type => Int)
  @Column({ name: 'score_coefficient', type: 'integer' })
  scoreCoefficient: number;

  @Field(type => [Int])
  get mainSkillLv() {
    return [this.mainSkillLv1, this.mainSkillLv2, this.mainSkillLv3, this.mainSkillLv4, this.mainSkillLv5, this.mainSkillLv6, this.mainSkillLv7, this.mainSkillLv8, this.mainSkillLv9, this.mainSkillLv10];
  }

}

