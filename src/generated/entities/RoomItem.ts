import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'room_item' })
export class RoomItem extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => Int)
  @Column({ name: 'item_type', type: 'integer' })
  itemType: number;

  @Field(type => Int)
  @Column({ name: 'category', type: 'integer' })
  category: number;

  @Field(type => String)
  @Column({ name: 'name', type: 'text' })
  name: string;

  @Field(type => Int)
  @Column({ name: 'max_level', type: 'integer' })
  maxLevel: number;

  @Field(type => Int)
  @Column({ name: 'enable_remove', type: 'integer' })
  enableRemove: number;

  @Field(type => Int)
  @Column({ name: 'max_possession_num', type: 'integer' })
  maxPossessionNum: number;

  @Field(type => Int)
  @Column({ name: 'effect_id_1', type: 'integer' })
  effectId1: number;

  @Field(type => String)
  @Column({ name: 'shop_start', type: 'text' })
  shopStart: string;

  @Field(type => String)
  @Column({ name: 'shop_end', type: 'text' })
  shopEnd: string;

  @Field(type => String)
  @Column({ name: 'shop_new_disp_end', type: 'text' })
  shopNewDispEnd: string;

  @Field(type => Int)
  @Column({ name: 'cost_item_num', type: 'integer' })
  costItemNum: number;

  @Field(type => Int)
  @Column({ name: 'shop_open_type', type: 'integer' })
  shopOpenType: number;

  @Field(type => Int)
  @Column({ name: 'shop_open_id', type: 'integer' })
  shopOpenId: number;

  @Field(type => Int)
  @Column({ name: 'shop_open_value', type: 'integer' })
  shopOpenValue: number;

  @Field(type => Int)
  @Column({ name: 'sold_price', type: 'integer' })
  soldPrice: number;

  @Field(type => Int)
  @Column({ name: 'sort', type: 'integer' })
  sort: number;

}

