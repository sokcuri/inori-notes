import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'combined_result_motion' })
export class CombinedResultMotion extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'result_id', type: 'integer' })
  resultId: number;

  @Field(type => Int)
  @Column({ name: 'unit_id_1', type: 'integer' })
  unitId1: number;

  @Field(type => Int)
  @Column({ name: 'disp_order_1', type: 'integer' })
  dispOrder1: number;

  @Field(type => Int)
  @Column({ name: 'unit_id_2', type: 'integer' })
  unitId2: number;

  @Field(type => Int)
  @Column({ name: 'disp_order_2', type: 'integer' })
  dispOrder2: number;

  @Field(type => Int)
  @Column({ name: 'unit_id_3', type: 'integer' })
  unitId3: number;

  @Field(type => Int)
  @Column({ name: 'disp_order_3', type: 'integer' })
  dispOrder3: number;

  @Field(type => Int)
  @Column({ name: 'unit_id_4', type: 'integer' })
  unitId4: number;

  @Field(type => Int)
  @Column({ name: 'disp_order_4', type: 'integer' })
  dispOrder4: number;

  @Field(type => Int)
  @Column({ name: 'unit_id_5', type: 'integer' })
  unitId5: number;

  @Field(type => Int)
  @Column({ name: 'disp_order_5', type: 'integer' })
  dispOrder5: number;

  @Field(type => [Int])
  get unitId() {
    return [this.unitId1, this.unitId2, this.unitId3, this.unitId4, this.unitId5];
  }

  @Field(type => [Int])
  get dispOrder() {
    return [this.dispOrder1, this.dispOrder2, this.dispOrder3, this.dispOrder4, this.dispOrder5];
  }

}

