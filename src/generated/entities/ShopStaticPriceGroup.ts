import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'shop_static_price_group' })
export class ShopStaticPriceGroup extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => Int)
  @Column({ name: 'price_group_id', type: 'integer' })
  priceGroupId: number;

  @Field(type => Int)
  @Column({ name: 'buy_count_from', type: 'integer' })
  buyCountFrom: number;

  @Field(type => Int)
  @Column({ name: 'buy_count_to', type: 'integer' })
  buyCountTo: number;

  @Field(type => Int)
  @Column({ name: 'count', type: 'integer' })
  count: number;

}

