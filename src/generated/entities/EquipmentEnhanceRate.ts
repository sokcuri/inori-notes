import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'equipment_enhance_rate' })
export class EquipmentEnhanceRate extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'equipment_id', type: 'integer' })
  equipmentId: number;

  @Field(type => String)
  @Column({ name: 'equipment_name', type: 'text' })
  equipmentName: string;

  @Field(type => String)
  @Column({ name: 'description', type: 'text' })
  description: string;

  @Field(type => Int)
  @Column({ name: 'promotion_level', type: 'integer' })
  promotionLevel: number;

  @Field(type => Float)
  @Column({ name: 'hp', type: 'real' })
  hp: number;

  @Field(type => Float)
  @Column({ name: 'atk', type: 'real' })
  atk: number;

  @Field(type => Float)
  @Column({ name: 'magic_str', type: 'real' })
  magicStr: number;

  @Field(type => Float)
  @Column({ name: 'def', type: 'real' })
  def: number;

  @Field(type => Float)
  @Column({ name: 'magic_def', type: 'real' })
  magicDef: number;

  @Field(type => Float)
  @Column({ name: 'physical_critical', type: 'real' })
  physicalCritical: number;

  @Field(type => Float)
  @Column({ name: 'magic_critical', type: 'real' })
  magicCritical: number;

  @Field(type => Float)
  @Column({ name: 'wave_hp_recovery', type: 'real' })
  waveHpRecovery: number;

  @Field(type => Float)
  @Column({ name: 'wave_energy_recovery', type: 'real' })
  waveEnergyRecovery: number;

  @Field(type => Float)
  @Column({ name: 'dodge', type: 'real' })
  dodge: number;

  @Field(type => Float)
  @Column({ name: 'physical_penetrate', type: 'real' })
  physicalPenetrate: number;

  @Field(type => Float)
  @Column({ name: 'magic_penetrate', type: 'real' })
  magicPenetrate: number;

  @Field(type => Float)
  @Column({ name: 'life_steal', type: 'real' })
  lifeSteal: number;

  @Field(type => Float)
  @Column({ name: 'hp_recovery_rate', type: 'real' })
  hpRecoveryRate: number;

  @Field(type => Float)
  @Column({ name: 'energy_recovery_rate', type: 'real' })
  energyRecoveryRate: number;

  @Field(type => Float)
  @Column({ name: 'energy_reduce_rate', type: 'real' })
  energyReduceRate: number;

  @Field(type => Float)
  @Column({ name: 'accuracy', type: 'real' })
  accuracy: number;

}

