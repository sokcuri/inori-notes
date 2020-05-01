import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'pct_itempoint' })
export class PctItempoint extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => Int)
  @Column({ name: 'item_id', type: 'integer' })
  itemId: number;

  @Field(type => Int)
  @Column({ name: 'pct_point_coefficient', type: 'integer' })
  pctPointCoefficient: number;

}

