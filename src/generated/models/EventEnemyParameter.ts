import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'event_enemy_parameter' })
export class EventEnemyParameter extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  enemy_id: number;

  @Field()
  @Column('integer')
  unit_id: number;

  @Field()
  @Column('integer')
  level: number;

  @Field()
  @Column('integer')
  rarity: number;

  @Field()
  @Column('integer')
  promotion_level: number;

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
  union_burst_level: number;

  @Field()
  @Column('integer')
  main_skill_lv_1: number;

  @Field()
  @Column('integer')
  main_skill_lv_2: number;

  @Field()
  @Column('integer')
  main_skill_lv_3: number;

  @Field()
  @Column('integer')
  main_skill_lv_4: number;

  @Field()
  @Column('integer')
  main_skill_lv_5: number;

  @Field()
  @Column('integer')
  main_skill_lv_6: number;

  @Field()
  @Column('integer')
  main_skill_lv_7: number;

  @Field()
  @Column('integer')
  main_skill_lv_8: number;

  @Field()
  @Column('integer')
  main_skill_lv_9: number;

  @Field()
  @Column('integer')
  main_skill_lv_10: number;

  @Field()
  @Column('integer')
  ex_skill_lv_1: number;

  @Field()
  @Column('integer')
  ex_skill_lv_2: number;

  @Field()
  @Column('integer')
  ex_skill_lv_3: number;

  @Field()
  @Column('integer')
  ex_skill_lv_4: number;

  @Field()
  @Column('integer')
  ex_skill_lv_5: number;

  @Field()
  @Column('integer')
  resist_status_id: number;

  @Field()
  @Column('integer')
  accuracy: number;

}

