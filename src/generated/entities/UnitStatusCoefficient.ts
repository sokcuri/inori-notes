import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'unit_status_coefficient' })
export class UnitStatusCoefficient extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'coefficient_id', type: 'integer' })
  coefficientId: number;

  @Field()
  @Column({ name: 'hp_coefficient', type: 'real' })
  hpCoefficient: number;

  @Field()
  @Column({ name: 'atk_coefficient', type: 'real' })
  atkCoefficient: number;

  @Field()
  @Column({ name: 'magic_str_coefficient', type: 'real' })
  magicStrCoefficient: number;

  @Field()
  @Column({ name: 'def_coefficient', type: 'real' })
  defCoefficient: number;

  @Field()
  @Column({ name: 'magic_def_coefficient', type: 'real' })
  magicDefCoefficient: number;

  @Field()
  @Column({ name: 'physical_critical_coefficient', type: 'real' })
  physicalCriticalCoefficient: number;

  @Field()
  @Column({ name: 'magic_critical_coefficient', type: 'real' })
  magicCriticalCoefficient: number;

  @Field()
  @Column({ name: 'wave_hp_recovery_coefficient', type: 'real' })
  waveHpRecoveryCoefficient: number;

  @Field()
  @Column({ name: 'wave_energy_recovery_coefficient', type: 'real' })
  waveEnergyRecoveryCoefficient: number;

  @Field()
  @Column({ name: 'dodge_coefficient', type: 'real' })
  dodgeCoefficient: number;

  @Field()
  @Column({ name: 'physical_penetrate_coefficient', type: 'real' })
  physicalPenetrateCoefficient: number;

  @Field()
  @Column({ name: 'magic_penetrate_coefficient', type: 'real' })
  magicPenetrateCoefficient: number;

  @Field()
  @Column({ name: 'life_steal_coefficient', type: 'real' })
  lifeStealCoefficient: number;

  @Field()
  @Column({ name: 'hp_recovery_rate_coefficient', type: 'real' })
  hpRecoveryRateCoefficient: number;

  @Field()
  @Column({ name: 'energy_recovery_rate_coefficient', type: 'real' })
  energyRecoveryRateCoefficient: number;

  @Field()
  @Column({ name: 'energy_reduce_rate_coefficient', type: 'real' })
  energyReduceRateCoefficient: number;

  @Field()
  @Column({ name: 'skill_lv_coefficient', type: 'real' })
  skillLvCoefficient: number;

  @Field()
  @Column({ name: 'exskill_evolution_coefficient', type: 'integer' })
  exskillEvolutionCoefficient: number;

  @Field()
  @Column({ name: 'overall_coefficient', type: 'real' })
  overallCoefficient: number;

  @Field()
  @Column({ name: 'accuracy_coefficient', type: 'real' })
  accuracyCoefficient: number;

  @Field()
  @Column({ name: 'skill1_evolution_coefficient', type: 'integer' })
  skill1EvolutionCoefficient: number;

  @Field()
  @Column({ name: 'skill1_evolution_slv_coefficient', type: 'real' })
  skill1EvolutionSlvCoefficient: number;

  @Field()
  @Column({ name: 'ub_evolution_coefficient', type: 'integer' })
  ubEvolutionCoefficient: number;

  @Field()
  @Column({ name: 'ub_evolution_slv_coefficient', type: 'real' })
  ubEvolutionSlvCoefficient: number;

}

