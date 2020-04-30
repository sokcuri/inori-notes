import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'unit_skill_data' })
export class UnitSkillData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  unit_id: number;

  @Field()
  @Column('integer')
  union_burst: number;

  @Field()
  @Column('integer')
  main_skill_1: number;

  @Field()
  @Column('integer')
  main_skill_2: number;

  @Field()
  @Column('integer')
  main_skill_3: number;

  @Field()
  @Column('integer')
  main_skill_4: number;

  @Field()
  @Column('integer')
  main_skill_5: number;

  @Field()
  @Column('integer')
  main_skill_6: number;

  @Field()
  @Column('integer')
  main_skill_7: number;

  @Field()
  @Column('integer')
  main_skill_8: number;

  @Field()
  @Column('integer')
  main_skill_9: number;

  @Field()
  @Column('integer')
  main_skill_10: number;

  @Field()
  @Column('integer')
  ex_skill_1: number;

  @Field()
  @Column('integer')
  ex_skill_evolution_1: number;

  @Field()
  @Column('integer')
  ex_skill_2: number;

  @Field()
  @Column('integer')
  ex_skill_evolution_2: number;

  @Field()
  @Column('integer')
  ex_skill_3: number;

  @Field()
  @Column('integer')
  ex_skill_evolution_3: number;

  @Field()
  @Column('integer')
  ex_skill_4: number;

  @Field()
  @Column('integer')
  ex_skill_evolution_4: number;

  @Field()
  @Column('integer')
  ex_skill_5: number;

  @Field()
  @Column('integer')
  ex_skill_evolution_5: number;

  @Field()
  @Column('integer')
  sp_skill_1: number;

  @Field()
  @Column('integer')
  sp_skill_2: number;

  @Field()
  @Column('integer')
  sp_skill_3: number;

  @Field()
  @Column('integer')
  sp_skill_4: number;

  @Field()
  @Column('integer')
  sp_skill_5: number;

  @Field()
  @Column('integer')
  union_burst_evolution: number;

  @Field()
  @Column('integer')
  main_skill_evolution_1: number;

  @Field()
  @Column('integer')
  main_skill_evolution_2: number;

}

