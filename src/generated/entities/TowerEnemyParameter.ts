import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'tower_enemy_parameter' })
export class TowerEnemyParameter extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'enemy_id', type: 'integer' })
  enemyId: number;

  @Field()
  @Column({ name: 'unit_id', type: 'integer' })
  unitId: number;

  @Field()
  @Column({ name: 'name', type: 'text' })
  name: string;

  @Field()
  @Column({ name: 'level', type: 'integer' })
  level: number;

  @Field()
  @Column({ name: 'rarity', type: 'integer' })
  rarity: number;

  @Field()
  @Column({ name: 'promotion_level', type: 'integer' })
  promotionLevel: number;

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
  @Column({ name: 'wave_hp_recovery', type: 'integer' })
  waveHpRecovery: number;

  @Field()
  @Column({ name: 'wave_energy_recovery', type: 'integer' })
  waveEnergyRecovery: number;

  @Field()
  @Column({ name: 'dodge', type: 'integer' })
  dodge: number;

  @Field()
  @Column({ name: 'physical_penetrate', type: 'integer' })
  physicalPenetrate: number;

  @Field()
  @Column({ name: 'magic_penetrate', type: 'integer' })
  magicPenetrate: number;

  @Field()
  @Column({ name: 'life_steal', type: 'integer' })
  lifeSteal: number;

  @Field()
  @Column({ name: 'hp_recovery_rate', type: 'integer' })
  hpRecoveryRate: number;

  @Field()
  @Column({ name: 'energy_recovery_rate', type: 'integer' })
  energyRecoveryRate: number;

  @Field()
  @Column({ name: 'energy_reduce_rate', type: 'integer' })
  energyReduceRate: number;

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
  @Column({ name: 'ex_skill_lv_1', type: 'integer' })
  exSkillLv1: number;

  @Field()
  @Column({ name: 'ex_skill_lv_2', type: 'integer' })
  exSkillLv2: number;

  @Field()
  @Column({ name: 'ex_skill_lv_3', type: 'integer' })
  exSkillLv3: number;

  @Field()
  @Column({ name: 'ex_skill_lv_4', type: 'integer' })
  exSkillLv4: number;

  @Field()
  @Column({ name: 'ex_skill_lv_5', type: 'integer' })
  exSkillLv5: number;

  @Field()
  @Column({ name: 'resist_status_id', type: 'integer' })
  resistStatusId: number;

  @Field()
  @Column({ name: 'accuracy', type: 'integer' })
  accuracy: number;

  @Field()
  @Column({ name: 'enemy_color', type: 'integer' })
  enemyColor: number;

}

