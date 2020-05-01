import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'unique_equipment_data' })
export class UniqueEquipmentData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'equipment_id', type: 'integer' })
  equipmentId: number;

  @Field()
  @Column({ name: 'equipment_name', type: 'text' })
  equipmentName: string;

  @Field()
  @Column({ name: 'description', type: 'text' })
  description: string;

  @Field()
  @Column({ name: 'promotion_level', type: 'integer' })
  promotionLevel: number;

  @Field()
  @Column({ name: 'craft_flg', type: 'integer' })
  craftFlg: number;

  @Field()
  @Column({ name: 'equipment_enhance_point', type: 'integer' })
  equipmentEnhancePoint: number;

  @Field()
  @Column({ name: 'sale_price', type: 'integer' })
  salePrice: number;

  @Field()
  @Column({ name: 'require_level', type: 'integer' })
  requireLevel: number;

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
  @Column({ name: 'enable_donation', type: 'integer' })
  enableDonation: number;

  @Field()
  @Column({ name: 'accuracy', type: 'real' })
  accuracy: number;

}

