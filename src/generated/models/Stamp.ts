import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'stamp' })
export class Stamp extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  stamp_id: number;

  @Field()
  @Column('integer')
  disp_order: number;

  @Field()
  @Column('text')
  description: string;

  @Field()
  @Column('text')
  start_date: string;

  @Field()
  @Column('text')
  end_date: string;

}

