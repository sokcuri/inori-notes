import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'unit_attack_pattern' })
export class UnitAttackPattern extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'pattern_id', type: 'integer' })
  patternId: number;

  @Field()
  @Column({ name: 'unit_id', type: 'integer' })
  unitId: number;

  @Field()
  @Column({ name: 'loop_start', type: 'integer' })
  loopStart: number;

  @Field()
  @Column({ name: 'loop_end', type: 'integer' })
  loopEnd: number;

  @Field()
  @Column({ name: 'atk_pattern_1', type: 'integer' })
  atkPattern1: number;

  @Field()
  @Column({ name: 'atk_pattern_2', type: 'integer' })
  atkPattern2: number;

  @Field()
  @Column({ name: 'atk_pattern_3', type: 'integer' })
  atkPattern3: number;

  @Field()
  @Column({ name: 'atk_pattern_4', type: 'integer' })
  atkPattern4: number;

  @Field()
  @Column({ name: 'atk_pattern_5', type: 'integer' })
  atkPattern5: number;

  @Field()
  @Column({ name: 'atk_pattern_6', type: 'integer' })
  atkPattern6: number;

  @Field()
  @Column({ name: 'atk_pattern_7', type: 'integer' })
  atkPattern7: number;

  @Field()
  @Column({ name: 'atk_pattern_8', type: 'integer' })
  atkPattern8: number;

  @Field()
  @Column({ name: 'atk_pattern_9', type: 'integer' })
  atkPattern9: number;

  @Field()
  @Column({ name: 'atk_pattern_10', type: 'integer' })
  atkPattern10: number;

  @Field()
  @Column({ name: 'atk_pattern_11', type: 'integer' })
  atkPattern11: number;

  @Field()
  @Column({ name: 'atk_pattern_12', type: 'integer' })
  atkPattern12: number;

  @Field()
  @Column({ name: 'atk_pattern_13', type: 'integer' })
  atkPattern13: number;

  @Field()
  @Column({ name: 'atk_pattern_14', type: 'integer' })
  atkPattern14: number;

  @Field()
  @Column({ name: 'atk_pattern_15', type: 'integer' })
  atkPattern15: number;

  @Field()
  @Column({ name: 'atk_pattern_16', type: 'integer' })
  atkPattern16: number;

  @Field()
  @Column({ name: 'atk_pattern_17', type: 'integer' })
  atkPattern17: number;

  @Field()
  @Column({ name: 'atk_pattern_18', type: 'integer' })
  atkPattern18: number;

  @Field()
  @Column({ name: 'atk_pattern_19', type: 'integer' })
  atkPattern19: number;

  @Field()
  @Column({ name: 'atk_pattern_20', type: 'integer' })
  atkPattern20: number;

}

