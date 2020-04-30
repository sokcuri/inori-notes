import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'clan_battle_s_param_adjust' })
export class ClanBattleSParamAdjust extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  param_adjust_id: number;

  @Field()
  @Column('integer')
  level: number;

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
  energy_recovery_rate: number;

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
  accuracy: number;

  @Field()
  @Column('integer')
  normal_atk_cast_time: number;

  @Field()
  @Column('integer')
  score_coefficient: number;

}

