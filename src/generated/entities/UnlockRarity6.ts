import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'unlock_rarity_6' })
export class UnlockRarity6 extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'unit_id', type: 'integer' })
  unitId: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'slot_id', type: 'integer' })
  slotId: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'unlock_level', type: 'integer' })
  unlockLevel: number;

  @Field(type => Int)
  @Column({ name: 'unlock_flag', type: 'integer' })
  unlockFlag: number;

  @Field(type => Int)
  @Column({ name: 'consume_gold', type: 'integer' })
  consumeGold: number;

  @Field(type => Int)
  @Column({ name: 'material_type', type: 'integer' })
  materialType: number;

  @Field(type => Int)
  @Column({ name: 'material_id', type: 'integer' })
  materialId: number;

  @Field(type => Int)
  @Column({ name: 'material_count', type: 'integer' })
  materialCount: number;

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
  @Column({ name: 'accuracy', type: 'integer' })
  accuracy: number;

}

