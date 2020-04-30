import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'unlock_rarity_6' })
export class UnlockRarity6 extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  unit_id: number;

  @Field(type => ID)
  @PrimaryColumn('integer')
  slot_id: number;

  @Field(type => ID)
  @PrimaryColumn('integer')
  unlock_level: number;

  @Field()
  @Column('integer')
  unlock_flag: number;

  @Field()
  @Column('integer')
  consume_gold: number;

  @Field()
  @Column('integer')
  material_type: number;

  @Field()
  @Column('integer')
  material_id: number;

  @Field()
  @Column('integer')
  material_count: number;

  @Field()
  @Column('integer')
  hp: number;

  @Field()
  @Column('integer')
  atk: number;

  @Field()
  @Column('integer')
  magic_str: number;

  @Field()
  @Column('integer')
  def: number;

  @Field()
  @Column('integer')
  magic_def: number;

  @Field()
  @Column('integer')
  physical_critical: number;

  @Field()
  @Column('integer')
  magic_critical: number;

  @Field()
  @Column('integer')
  wave_hp_recovery: number;

  @Field()
  @Column('integer')
  wave_energy_recovery: number;

  @Field()
  @Column('integer')
  dodge: number;

  @Field()
  @Column('integer')
  physical_penetrate: number;

  @Field()
  @Column('integer')
  magic_penetrate: number;

  @Field()
  @Column('integer')
  life_steal: number;

  @Field()
  @Column('integer')
  hp_recovery_rate: number;

  @Field()
  @Column('integer')
  energy_recovery_rate: number;

  @Field()
  @Column('integer')
  energy_reduce_rate: number;

  @Field()
  @Column('integer')
  accuracy: number;

}

