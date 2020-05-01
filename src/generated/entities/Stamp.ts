import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'stamp' })
export class Stamp extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'stamp_id', type: 'integer' })
  stampId: number;

  @Field(type => Int)
  @Column({ name: 'disp_order', type: 'integer' })
  dispOrder: number;

  @Field(type => String)
  @Column({ name: 'description', type: 'text' })
  description: string;

  @Field(type => String)
  @Column({ name: 'start_date', type: 'text' })
  startDate: string;

  @Field(type => String)
  @Column({ name: 'end_date', type: 'text' })
  endDate: string;

}

