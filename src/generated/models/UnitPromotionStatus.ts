import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'unit_promotion_status' })
export class UnitPromotionStatus extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'unit_id', type: 'integer' })
  unitId: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'promotion_level', type: 'integer' })
  promotionLevel: number;

  @Field()
  @Column({ name: 'hp', type: 'real' })
  hp: number;

  @Field()
  @Column({ name: 'atk', type: 'real' })
  atk: number;

  @Field()
  @Column({ name: 'magic_str', type: 'real' })
  magicStr: number;

  @Field()
  @Column({ name: 'def', type: 'real' })
  def: number;

  @Field()
  @Column({ name: 'magic_def', type: 'real' })
  magicDef: number;

  @Field()
  @Column({ name: 'physical_critical', type: 'real' })
  physicalCritical: number;

  @Field()
  @Column({ name: 'magic_critical', type: 'real' })
  magicCritical: number;

  @Field()
  @Column({ name: 'wave_hp_recovery', type: 'real' })
  waveHpRecovery: number;

  @Field()
  @Column({ name: 'wave_energy_recovery', type: 'real' })
  waveEnergyRecovery: number;

  @Field()
  @Column({ name: 'dodge', type: 'real' })
  dodge: number;

  @Field()
  @Column({ name: 'physical_penetrate', type: 'real' })
  physicalPenetrate: number;

  @Field()
  @Column({ name: 'magic_penetrate', type: 'real' })
  magicPenetrate: number;

  @Field()
  @Column({ name: 'life_steal', type: 'real' })
  lifeSteal: number;

  @Field()
  @Column({ name: 'hp_recovery_rate', type: 'real' })
  hpRecoveryRate: number;

  @Field()
  @Column({ name: 'energy_recovery_rate', type: 'real' })
  energyRecoveryRate: number;

  @Field()
  @Column({ name: 'energy_reduce_rate', type: 'real' })
  energyReduceRate: number;

  @Field()
  @Column({ name: 'accuracy', type: 'real' })
  accuracy: number;

}

