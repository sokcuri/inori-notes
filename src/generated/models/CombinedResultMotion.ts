import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'combined_result_motion' })
export class CombinedResultMotion extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  result_id: number;

  @Field()
  @Column('integer')
  unit_id_1: number;

  @Field()
  @Column('integer')
  disp_order_1: number;

  @Field()
  @Column('integer')
  unit_id_2: number;

  @Field()
  @Column('integer')
  disp_order_2: number;

  @Field()
  @Column('integer')
  unit_id_3: number;

  @Field()
  @Column('integer')
  disp_order_3: number;

  @Field()
  @Column('integer')
  unit_id_4: number;

  @Field()
  @Column('integer')
  disp_order_4: number;

  @Field()
  @Column('integer')
  unit_id_5: number;

  @Field()
  @Column('integer')
  disp_order_5: number;

}

