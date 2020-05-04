import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'unit_promotion_status' })
export class UnitPromotionStatus extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  unit_id: number;

  @Field(type => ID)
  @PrimaryColumn('integer')
  promotion_level: number;

  @Field()
  @Column('real')
  hp: number;

  @Field()
  @Column('real')
  atk: number;

  @Field()
  @Column('real')
  magic_str: number;

  @Field()
  @Column('real')
  def: number;

  @Field()
  @Column('real')
  magic_def: number;

  @Field()
  @Column('real')
  physical_critical: number;

  @Field()
  @Column('real')
  magic_critical: number;

  @Field()
  @Column('real')
  wave_hp_recovery: number;

  @Field()
  @Column('real')
  wave_energy_recovery: number;

  @Field()
  @Column('real')
  dodge: number;

  @Field()
  @Column('real')
  physical_penetrate: number;

  @Field()
  @Column('real')
  magic_penetrate: number;

  @Field()
  @Column('real')
  life_steal: number;

  @Field()
  @Column('real')
  hp_recovery_rate: number;

  @Field()
  @Column('real')
  energy_recovery_rate: number;

  @Field()
  @Column('real')
  energy_reduce_rate: number;

  @Field()
  @Column('real')
  accuracy: number;

}

