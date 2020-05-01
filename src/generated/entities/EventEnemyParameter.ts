import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'event_enemy_parameter' })
export class EventEnemyParameter extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'enemy_id', type: 'integer' })
  enemyId: number;

  @Field(type => Int)
  @Column({ name: 'unit_id', type: 'integer' })
  unitId: number;

  @Field(type => Int)
  @Column({ name: 'level', type: 'integer' })
  level: number;

  @Field(type => Int)
  @Column({ name: 'rarity', type: 'integer' })
  rarity: number;

  @Field(type => Int)
  @Column({ name: 'promotion_level', type: 'integer' })
  promotionLevel: number;

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
  @Column({ name: 'wave_hp_recovery', type: 'integer' })
  waveHpRecovery: number;

  @Field(type => Int)
  @Column({ name: 'wave_energy_recovery', type: 'integer' })
  waveEnergyRecovery: number;

  @Field(type => Int)
  @Column({ name: 'dodge', type: 'integer' })
  dodge: number;

  @Field(type => Int)
  @Column({ name: 'physical_penetrate', type: 'integer' })
  physicalPenetrate: number;

  @Field(type => Int)
  @Column({ name: 'magic_penetrate', type: 'integer' })
  magicPenetrate: number;

  @Field(type => Int)
  @Column({ name: 'life_steal', type: 'integer' })
  lifeSteal: number;

  @Field(type => Int)
  @Column({ name: 'hp_recovery_rate', type: 'integer' })
  hpRecoveryRate: number;

  @Field(type => Int)
  @Column({ name: 'energy_recovery_rate', type: 'integer' })
  energyRecoveryRate: number;

  @Field(type => Int)
  @Column({ name: 'energy_reduce_rate', type: 'integer' })
  energyReduceRate: number;

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
  @Column({ name: 'ex_skill_lv_1', type: 'integer' })
  exSkillLv1: number;

  @Field(type => Int)
  @Column({ name: 'ex_skill_lv_2', type: 'integer' })
  exSkillLv2: number;

  @Field(type => Int)
  @Column({ name: 'ex_skill_lv_3', type: 'integer' })
  exSkillLv3: number;

  @Field(type => Int)
  @Column({ name: 'ex_skill_lv_4', type: 'integer' })
  exSkillLv4: number;

  @Field(type => Int)
  @Column({ name: 'ex_skill_lv_5', type: 'integer' })
  exSkillLv5: number;

  @Field(type => Int)
  @Column({ name: 'resist_status_id', type: 'integer' })
  resistStatusId: number;

  @Field(type => Int)
  @Column({ name: 'accuracy', type: 'integer' })
  accuracy: number;

}

