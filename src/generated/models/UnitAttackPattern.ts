import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'unit_attack_pattern' })
export class UnitAttackPattern extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  pattern_id: number;

  @Field()
  @Column('integer')
  unit_id: number;

  @Field()
  @Column('integer')
  loop_start: number;

  @Field()
  @Column('integer')
  loop_end: number;

  @Field()
  @Column('integer')
  atk_pattern_1: number;

  @Field()
  @Column('integer')
  atk_pattern_2: number;

  @Field()
  @Column('integer')
  atk_pattern_3: number;

  @Field()
  @Column('integer')
  atk_pattern_4: number;

  @Field()
  @Column('integer')
  atk_pattern_5: number;

  @Field()
  @Column('integer')
  atk_pattern_6: number;

  @Field()
  @Column('integer')
  atk_pattern_7: number;

  @Field()
  @Column('integer')
  atk_pattern_8: number;

  @Field()
  @Column('integer')
  atk_pattern_9: number;

  @Field()
  @Column('integer')
  atk_pattern_10: number;

  @Field()
  @Column('integer')
  atk_pattern_11: number;

  @Field()
  @Column('integer')
  atk_pattern_12: number;

  @Field()
  @Column('integer')
  atk_pattern_13: number;

  @Field()
  @Column('integer')
  atk_pattern_14: number;

  @Field()
  @Column('integer')
  atk_pattern_15: number;

  @Field()
  @Column('integer')
  atk_pattern_16: number;

  @Field()
  @Column('integer')
  atk_pattern_17: number;

  @Field()
  @Column('integer')
  atk_pattern_18: number;

  @Field()
  @Column('integer')
  atk_pattern_19: number;

  @Field()
  @Column('integer')
  atk_pattern_20: number;

}

