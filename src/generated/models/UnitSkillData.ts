import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'unit_skill_data' })
export class UnitSkillData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'unit_id', type: 'integer' })
  unitId: number;

  @Field()
  @Column({ name: 'union_burst', type: 'integer' })
  unionBurst: number;

  @Field()
  @Column({ name: 'main_skill_1', type: 'integer' })
  mainSkill1: number;

  @Field()
  @Column({ name: 'main_skill_2', type: 'integer' })
  mainSkill2: number;

  @Field()
  @Column({ name: 'main_skill_3', type: 'integer' })
  mainSkill3: number;

  @Field()
  @Column({ name: 'main_skill_4', type: 'integer' })
  mainSkill4: number;

  @Field()
  @Column({ name: 'main_skill_5', type: 'integer' })
  mainSkill5: number;

  @Field()
  @Column({ name: 'main_skill_6', type: 'integer' })
  mainSkill6: number;

  @Field()
  @Column({ name: 'main_skill_7', type: 'integer' })
  mainSkill7: number;

  @Field()
  @Column({ name: 'main_skill_8', type: 'integer' })
  mainSkill8: number;

  @Field()
  @Column({ name: 'main_skill_9', type: 'integer' })
  mainSkill9: number;

  @Field()
  @Column({ name: 'main_skill_10', type: 'integer' })
  mainSkill10: number;

  @Field()
  @Column({ name: 'ex_skill_1', type: 'integer' })
  exSkill1: number;

  @Field()
  @Column({ name: 'ex_skill_evolution_1', type: 'integer' })
  exSkillEvolution1: number;

  @Field()
  @Column({ name: 'ex_skill_2', type: 'integer' })
  exSkill2: number;

  @Field()
  @Column({ name: 'ex_skill_evolution_2', type: 'integer' })
  exSkillEvolution2: number;

  @Field()
  @Column({ name: 'ex_skill_3', type: 'integer' })
  exSkill3: number;

  @Field()
  @Column({ name: 'ex_skill_evolution_3', type: 'integer' })
  exSkillEvolution3: number;

  @Field()
  @Column({ name: 'ex_skill_4', type: 'integer' })
  exSkill4: number;

  @Field()
  @Column({ name: 'ex_skill_evolution_4', type: 'integer' })
  exSkillEvolution4: number;

  @Field()
  @Column({ name: 'ex_skill_5', type: 'integer' })
  exSkill5: number;

  @Field()
  @Column({ name: 'ex_skill_evolution_5', type: 'integer' })
  exSkillEvolution5: number;

  @Field()
  @Column({ name: 'sp_skill_1', type: 'integer' })
  spSkill1: number;

  @Field()
  @Column({ name: 'sp_skill_2', type: 'integer' })
  spSkill2: number;

  @Field()
  @Column({ name: 'sp_skill_3', type: 'integer' })
  spSkill3: number;

  @Field()
  @Column({ name: 'sp_skill_4', type: 'integer' })
  spSkill4: number;

  @Field()
  @Column({ name: 'sp_skill_5', type: 'integer' })
  spSkill5: number;

  @Field()
  @Column({ name: 'union_burst_evolution', type: 'integer' })
  unionBurstEvolution: number;

  @Field()
  @Column({ name: 'main_skill_evolution_1', type: 'integer' })
  mainSkillEvolution1: number;

  @Field()
  @Column({ name: 'main_skill_evolution_2', type: 'integer' })
  mainSkillEvolution2: number;

}

