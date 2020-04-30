import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'unit_status_coefficient' })
export class UnitStatusCoefficient extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  coefficient_id: number;

  @Field()
  @Column('real')
  hp_coefficient: number;

  @Field()
  @Column('real')
  atk_coefficient: number;

  @Field()
  @Column('real')
  magic_str_coefficient: number;

  @Field()
  @Column('real')
  def_coefficient: number;

  @Field()
  @Column('real')
  magic_def_coefficient: number;

  @Field()
  @Column('real')
  physical_critical_coefficient: number;

  @Field()
  @Column('real')
  magic_critical_coefficient: number;

  @Field()
  @Column('real')
  wave_hp_recovery_coefficient: number;

  @Field()
  @Column('real')
  wave_energy_recovery_coefficient: number;

  @Field()
  @Column('real')
  dodge_coefficient: number;

  @Field()
  @Column('real')
  physical_penetrate_coefficient: number;

  @Field()
  @Column('real')
  magic_penetrate_coefficient: number;

  @Field()
  @Column('real')
  life_steal_coefficient: number;

  @Field()
  @Column('real')
  hp_recovery_rate_coefficient: number;

  @Field()
  @Column('real')
  energy_recovery_rate_coefficient: number;

  @Field()
  @Column('real')
  energy_reduce_rate_coefficient: number;

  @Field()
  @Column('real')
  skill_lv_coefficient: number;

  @Field()
  @Column('integer')
  exskill_evolution_coefficient: number;

  @Field()
  @Column('real')
  overall_coefficient: number;

  @Field()
  @Column('real')
  accuracy_coefficient: number;

  @Field()
  @Column('integer')
  skill1_evolution_coefficient: number;

  @Field()
  @Column('real')
  skill1_evolution_slv_coefficient: number;

  @Field()
  @Column('integer')
  ub_evolution_coefficient: number;

  @Field()
  @Column('real')
  ub_evolution_slv_coefficient: number;

}

