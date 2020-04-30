import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'item_data' })
export class ItemData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  item_id: number;

  @Field()
  @Column('text')
  item_name: string;

  @Field()
  @Column('text')
  description: string;

  @Field()
  @Column('integer')
  promotion_level: number;

  @Field()
  @Column('integer')
  item_type: number;

  @Field()
  @Column('integer')
  value: number;

  @Field()
  @Column('integer')
  price: number;

  @Field()
  @Column('integer')
  limit_num: number;

  @Field()
  @Column('text')
  start_time: string;

  @Field()
  @Column('text')
  end_time: string;

}

