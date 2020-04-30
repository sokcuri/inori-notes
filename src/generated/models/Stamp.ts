import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'stamp' })
export class Stamp extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'stamp_id', type: 'integer' })
  stampId: number;

  @Field()
  @Column({ name: 'disp_order', type: 'integer' })
  dispOrder: number;

  @Field()
  @Column({ name: 'description', type: 'text' })
  description: string;

  @Field()
  @Column({ name: 'start_date', type: 'text' })
  startDate: string;

  @Field()
  @Column({ name: 'end_date', type: 'text' })
  endDate: string;

}

