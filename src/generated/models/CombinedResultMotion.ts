import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'combined_result_motion' })
export class CombinedResultMotion extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'result_id', type: 'integer' })
  resultId: number;

  @Field()
  @Column({ name: 'unit_id_1', type: 'integer' })
  unitId1: number;

  @Field()
  @Column({ name: 'disp_order_1', type: 'integer' })
  dispOrder1: number;

  @Field()
  @Column({ name: 'unit_id_2', type: 'integer' })
  unitId2: number;

  @Field()
  @Column({ name: 'disp_order_2', type: 'integer' })
  dispOrder2: number;

  @Field()
  @Column({ name: 'unit_id_3', type: 'integer' })
  unitId3: number;

  @Field()
  @Column({ name: 'disp_order_3', type: 'integer' })
  dispOrder3: number;

  @Field()
  @Column({ name: 'unit_id_4', type: 'integer' })
  unitId4: number;

  @Field()
  @Column({ name: 'disp_order_4', type: 'integer' })
  dispOrder4: number;

  @Field()
  @Column({ name: 'unit_id_5', type: 'integer' })
  unitId5: number;

  @Field()
  @Column({ name: 'disp_order_5', type: 'integer' })
  dispOrder5: number;

}

