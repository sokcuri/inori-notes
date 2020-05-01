import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'unit_status_coefficient' })
export class UnitStatusCoefficient extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'coefficient_id', type: 'integer' })
  coefficientId: number;

  @Field(type => Float)
  @Column({ name: 'hp_coefficient', type: 'real' })
  hpCoefficient: number;

  @Field(type => Float)
  @Column({ name: 'atk_coefficient', type: 'real' })
  atkCoefficient: number;

  @Field(type => Float)
  @Column({ name: 'magic_str_coefficient', type: 'real' })
  magicStrCoefficient: number;

  @Field(type => Float)
  @Column({ name: 'def_coefficient', type: 'real' })
  defCoefficient: number;

  @Field(type => Float)
  @Column({ name: 'magic_def_coefficient', type: 'real' })
  magicDefCoefficient: number;

  @Field(type => Float)
  @Column({ name: 'physical_critical_coefficient', type: 'real' })
  physicalCriticalCoefficient: number;

  @Field(type => Float)
  @Column({ name: 'magic_critical_coefficient', type: 'real' })
  magicCriticalCoefficient: number;

  @Field(type => Float)
  @Column({ name: 'wave_hp_recovery_coefficient', type: 'real' })
  waveHpRecoveryCoefficient: number;

  @Field(type => Float)
  @Column({ name: 'wave_energy_recovery_coefficient', type: 'real' })
  waveEnergyRecoveryCoefficient: number;

  @Field(type => Float)
  @Column({ name: 'dodge_coefficient', type: 'real' })
  dodgeCoefficient: number;

  @Field(type => Float)
  @Column({ name: 'physical_penetrate_coefficient', type: 'real' })
  physicalPenetrateCoefficient: number;

  @Field(type => Float)
  @Column({ name: 'magic_penetrate_coefficient', type: 'real' })
  magicPenetrateCoefficient: number;

  @Field(type => Float)
  @Column({ name: 'life_steal_coefficient', type: 'real' })
  lifeStealCoefficient: number;

  @Field(type => Float)
  @Column({ name: 'hp_recovery_rate_coefficient', type: 'real' })
  hpRecoveryRateCoefficient: number;

  @Field(type => Float)
  @Column({ name: 'energy_recovery_rate_coefficient', type: 'real' })
  energyRecoveryRateCoefficient: number;

  @Field(type => Float)
  @Column({ name: 'energy_reduce_rate_coefficient', type: 'real' })
  energyReduceRateCoefficient: number;

  @Field(type => Float)
  @Column({ name: 'skill_lv_coefficient', type: 'real' })
  skillLvCoefficient: number;

  @Field(type => Int)
  @Column({ name: 'exskill_evolution_coefficient', type: 'integer' })
  exskillEvolutionCoefficient: number;

  @Field(type => Float)
  @Column({ name: 'overall_coefficient', type: 'real' })
  overallCoefficient: number;

  @Field(type => Float)
  @Column({ name: 'accuracy_coefficient', type: 'real' })
  accuracyCoefficient: number;

  @Field(type => Int)
  @Column({ name: 'skill1_evolution_coefficient', type: 'integer' })
  skill1EvolutionCoefficient: number;

  @Field(type => Float)
  @Column({ name: 'skill1_evolution_slv_coefficient', type: 'real' })
  skill1EvolutionSlvCoefficient: number;

  @Field(type => Int)
  @Column({ name: 'ub_evolution_coefficient', type: 'integer' })
  ubEvolutionCoefficient: number;

  @Field(type => Float)
  @Column({ name: 'ub_evolution_slv_coefficient', type: 'real' })
  ubEvolutionSlvCoefficient: number;

}

