import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'unlock_unit_condition' })
export class UnlockUnitCondition extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'unit_id', type: 'integer' })
  unitId: number;

  @Field()
  @Column({ name: 'unit_name', type: 'text' })
  unitName: string;

  @Field()
  @Column({ name: 'class_id', type: 'integer' })
  classId: number;

  @Field()
  @Column({ name: 'pre_unit_id', type: 'integer' })
  preUnitId: number;

  @Field()
  @Column({ name: 'condition_type_1', type: 'integer' })
  conditionType1: number;

  @Field()
  @Column({ name: 'condition_type_detail_1', type: 'integer' })
  conditionTypeDetail1: number;

  @Field()
  @Column({ name: 'condition_id_1', type: 'integer' })
  conditionId1: number;

  @Field()
  @Column({ name: 'count_1', type: 'integer' })
  count1: number;

  @Field()
  @Column({ name: 'condition_type_2', type: 'integer' })
  conditionType2: number;

  @Field()
  @Column({ name: 'condition_type_detail_2', type: 'integer' })
  conditionTypeDetail2: number;

  @Field()
  @Column({ name: 'condition_id_2', type: 'integer' })
  conditionId2: number;

  @Field()
  @Column({ name: 'count_2', type: 'integer' })
  count2: number;

  @Field()
  @Column({ name: 'condition_type_3', type: 'integer' })
  conditionType3: number;

  @Field()
  @Column({ name: 'condition_type_detail_3', type: 'integer' })
  conditionTypeDetail3: number;

  @Field()
  @Column({ name: 'condition_id_3', type: 'integer' })
  conditionId3: number;

  @Field()
  @Column({ name: 'count_3', type: 'integer' })
  count3: number;

  @Field()
  @Column({ name: 'condition_type_4', type: 'integer' })
  conditionType4: number;

  @Field()
  @Column({ name: 'condition_type_detail_4', type: 'integer' })
  conditionTypeDetail4: number;

  @Field()
  @Column({ name: 'condition_id_4', type: 'integer' })
  conditionId4: number;

  @Field()
  @Column({ name: 'count_4', type: 'integer' })
  count4: number;

  @Field()
  @Column({ name: 'condition_type_5', type: 'integer' })
  conditionType5: number;

  @Field()
  @Column({ name: 'condition_type_detail_5', type: 'integer' })
  conditionTypeDetail5: number;

  @Field()
  @Column({ name: 'condition_id_5', type: 'integer' })
  conditionId5: number;

  @Field()
  @Column({ name: 'count_5', type: 'integer' })
  count5: number;

  @Field()
  @Column({ name: 'release_effect_type', type: 'integer' })
  releaseEffectType: number;

}

