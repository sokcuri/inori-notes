import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'item_data' })
export class ItemData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'item_id', type: 'integer' })
  itemId: number;

  @Field(type => String)
  @Column({ name: 'item_name', type: 'text' })
  itemName: string;

  @Field(type => String)
  @Column({ name: 'description', type: 'text' })
  description: string;

  @Field(type => Int)
  @Column({ name: 'promotion_level', type: 'integer' })
  promotionLevel: number;

  @Field(type => Int)
  @Column({ name: 'item_type', type: 'integer' })
  itemType: number;

  @Field(type => Int)
  @Column({ name: 'value', type: 'integer' })
  value: number;

  @Field(type => Int)
  @Column({ name: 'price', type: 'integer' })
  price: number;

  @Field(type => Int)
  @Column({ name: 'limit_num', type: 'integer' })
  limitNum: number;

  @Field(type => String)
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field(type => String)
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

}

