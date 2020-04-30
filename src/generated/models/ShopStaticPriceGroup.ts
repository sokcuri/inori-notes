import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'shop_static_price_group' })
export class ShopStaticPriceGroup extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  price_group_id: number;

  @Field()
  @Column('integer')
  buy_count_from: number;

  @Field()
  @Column('integer')
  buy_count_to: number;

  @Field()
  @Column('integer')
  count: number;

}

