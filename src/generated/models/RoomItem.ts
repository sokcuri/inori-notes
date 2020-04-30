import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'room_item' })
export class RoomItem extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  item_type: number;

  @Field()
  @Column('integer')
  category: number;

  @Field()
  @Column('text')
  name: string;

  @Field()
  @Column('integer')
  max_level: number;

  @Field()
  @Column('integer')
  enable_remove: number;

  @Field()
  @Column('integer')
  max_possession_num: number;

  @Field()
  @Column('integer')
  effect_id_1: number;

  @Field()
  @Column('text')
  shop_start: string;

  @Field()
  @Column('text')
  shop_end: string;

  @Field()
  @Column('text')
  shop_new_disp_end: string;

  @Field()
  @Column('integer')
  cost_item_num: number;

  @Field()
  @Column('integer')
  shop_open_type: number;

  @Field()
  @Column('integer')
  shop_open_id: number;

  @Field()
  @Column('integer')
  shop_open_value: number;

  @Field()
  @Column('integer')
  sold_price: number;

  @Field()
  @Column('integer')
  sort: number;

  @Field()
  @Column('integer')
  condition_quest_id: number;

}

