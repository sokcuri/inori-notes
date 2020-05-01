import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

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

  @Field()
  @Column({ name: 'unlock_flag', type: 'integer' })
  unlockFlag: number;

  @Field()
  @Column({ name: 'consume_gold', type: 'integer' })
  consumeGold: number;

  @Field()
  @Column({ name: 'material_type', type: 'integer' })
  materialType: number;

  @Field()
  @Column({ name: 'material_id', type: 'integer' })
  materialId: number;

  @Field()
  @Column({ name: 'material_count', type: 'integer' })
  materialCount: number;

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
  @Column({ name: 'accuracy', type: 'integer' })
  accuracy: number;

}

