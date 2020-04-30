import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'unit_rarity' })
export class UnitRarity extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'unit_id', type: 'integer' })
  unitId: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'rarity', type: 'integer' })
  rarity: number;

  @Field()
  @Column({ name: 'hp', type: 'real' })
  hp: number;

  @Field()
  @Column({ name: 'hp_growth', type: 'real' })
  hpGrowth: number;

  @Field()
  @Column({ name: 'atk', type: 'real' })
  atk: number;

  @Field()
  @Column({ name: 'atk_growth', type: 'real' })
  atkGrowth: number;

  @Field()
  @Column({ name: 'magic_str', type: 'real' })
  magicStr: number;

  @Field()
  @Column({ name: 'magic_str_growth', type: 'real' })
  magicStrGrowth: number;

  @Field()
  @Column({ name: 'def', type: 'real' })
  def: number;

  @Field()
  @Column({ name: 'def_growth', type: 'real' })
  defGrowth: number;

  @Field()
  @Column({ name: 'magic_def', type: 'real' })
  magicDef: number;

  @Field()
  @Column({ name: 'magic_def_growth', type: 'real' })
  magicDefGrowth: number;

  @Field()
  @Column({ name: 'physical_critical', type: 'real' })
  physicalCritical: number;

  @Field()
  @Column({ name: 'physical_critical_growth', type: 'real' })
  physicalCriticalGrowth: number;

  @Field()
  @Column({ name: 'magic_critical', type: 'real' })
  magicCritical: number;

  @Field()
  @Column({ name: 'magic_critical_growth', type: 'real' })
  magicCriticalGrowth: number;

  @Field()
  @Column({ name: 'wave_hp_recovery', type: 'real' })
  waveHpRecovery: number;

  @Field()
  @Column({ name: 'wave_hp_recovery_growth', type: 'real' })
  waveHpRecoveryGrowth: number;

  @Field()
  @Column({ name: 'wave_energy_recovery', type: 'real' })
  waveEnergyRecovery: number;

  @Field()
  @Column({ name: 'wave_energy_recovery_growth', type: 'real' })
  waveEnergyRecoveryGrowth: number;

  @Field()
  @Column({ name: 'dodge', type: 'real' })
  dodge: number;

  @Field()
  @Column({ name: 'dodge_growth', type: 'real' })
  dodgeGrowth: number;

  @Field()
  @Column({ name: 'physical_penetrate', type: 'real' })
  physicalPenetrate: number;

  @Field()
  @Column({ name: 'physical_penetrate_growth', type: 'real' })
  physicalPenetrateGrowth: number;

  @Field()
  @Column({ name: 'magic_penetrate', type: 'real' })
  magicPenetrate: number;

  @Field()
  @Column({ name: 'magic_penetrate_growth', type: 'real' })
  magicPenetrateGrowth: number;

  @Field()
  @Column({ name: 'life_steal', type: 'real' })
  lifeSteal: number;

  @Field()
  @Column({ name: 'life_steal_growth', type: 'real' })
  lifeStealGrowth: number;

  @Field()
  @Column({ name: 'hp_recovery_rate', type: 'real' })
  hpRecoveryRate: number;

  @Field()
  @Column({ name: 'hp_recovery_rate_growth', type: 'real' })
  hpRecoveryRateGrowth: number;

  @Field()
  @Column({ name: 'energy_recovery_rate', type: 'real' })
  energyRecoveryRate: number;

  @Field()
  @Column({ name: 'energy_recovery_rate_growth', type: 'real' })
  energyRecoveryRateGrowth: number;

  @Field()
  @Column({ name: 'energy_reduce_rate', type: 'real' })
  energyReduceRate: number;

  @Field()
  @Column({ name: 'energy_reduce_rate_growth', type: 'real' })
  energyReduceRateGrowth: number;

  @Field()
  @Column({ name: 'unit_material_id', type: 'integer' })
  unitMaterialId: number;

  @Field()
  @Column({ name: 'consume_num', type: 'integer' })
  consumeNum: number;

  @Field()
  @Column({ name: 'consume_gold', type: 'integer' })
  consumeGold: number;

  @Field()
  @Column({ name: 'accuracy', type: 'real' })
  accuracy: number;

  @Field()
  @Column({ name: 'accuracy_growth', type: 'real' })
  accuracyGrowth: number;

}

