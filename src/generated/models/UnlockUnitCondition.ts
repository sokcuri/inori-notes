import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'unlock_unit_condition' })
export class UnlockUnitCondition extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  unit_id: number;

  @Field()
  @Column('text')
  unit_name: string;

  @Field()
  @Column('integer')
  class_id: number;

  @Field()
  @Column('integer')
  pre_unit_id: number;

  @Field()
  @Column('integer')
  condition_type_1: number;

  @Field()
  @Column('integer')
  condition_type_detail_1: number;

  @Field()
  @Column('integer')
  condition_id_1: number;

  @Field()
  @Column('integer')
  count_1: number;

  @Field()
  @Column('integer')
  condition_type_2: number;

  @Field()
  @Column('integer')
  condition_type_detail_2: number;

  @Field()
  @Column('integer')
  condition_id_2: number;

  @Field()
  @Column('integer')
  count_2: number;

  @Field()
  @Column('integer')
  condition_type_3: number;

  @Field()
  @Column('integer')
  condition_type_detail_3: number;

  @Field()
  @Column('integer')
  condition_id_3: number;

  @Field()
  @Column('integer')
  count_3: number;

  @Field()
  @Column('integer')
  condition_type_4: number;

  @Field()
  @Column('integer')
  condition_type_detail_4: number;

  @Field()
  @Column('integer')
  condition_id_4: number;

  @Field()
  @Column('integer')
  count_4: number;

  @Field()
  @Column('integer')
  condition_type_5: number;

  @Field()
  @Column('integer')
  condition_type_detail_5: number;

  @Field()
  @Column('integer')
  condition_id_5: number;

  @Field()
  @Column('integer')
  count_5: number;

  @Field()
  @Column('integer')
  release_effect_type: number;

}

