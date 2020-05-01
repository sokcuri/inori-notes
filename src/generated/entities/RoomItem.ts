import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'room_item' })
export class RoomItem extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field()
  @Column({ name: 'item_type', type: 'integer' })
  itemType: number;

  @Field()
  @Column({ name: 'category', type: 'integer' })
  category: number;

  @Field()
  @Column({ name: 'name', type: 'text' })
  name: string;

  @Field()
  @Column({ name: 'max_level', type: 'integer' })
  maxLevel: number;

  @Field()
  @Column({ name: 'enable_remove', type: 'integer' })
  enableRemove: number;

  @Field()
  @Column({ name: 'max_possession_num', type: 'integer' })
  maxPossessionNum: number;

  @Field()
  @Column({ name: 'effect_id_1', type: 'integer' })
  effectId1: number;

  @Field()
  @Column({ name: 'shop_start', type: 'text' })
  shopStart: string;

  @Field()
  @Column({ name: 'shop_end', type: 'text' })
  shopEnd: string;

  @Field()
  @Column({ name: 'shop_new_disp_end', type: 'text' })
  shopNewDispEnd: string;

  @Field()
  @Column({ name: 'cost_item_num', type: 'integer' })
  costItemNum: number;

  @Field()
  @Column({ name: 'shop_open_type', type: 'integer' })
  shopOpenType: number;

  @Field()
  @Column({ name: 'shop_open_id', type: 'integer' })
  shopOpenId: number;

  @Field()
  @Column({ name: 'shop_open_value', type: 'integer' })
  shopOpenValue: number;

  @Field()
  @Column({ name: 'sold_price', type: 'integer' })
  soldPrice: number;

  @Field()
  @Column({ name: 'sort', type: 'integer' })
  sort: number;

  @Field()
  @Column({ name: 'condition_quest_id', type: 'integer' })
  conditionQuestId: number;

}

