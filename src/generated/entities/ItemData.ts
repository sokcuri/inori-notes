import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'item_data' })
export class ItemData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'item_id', type: 'integer' })
  itemId: number;

  @Field()
  @Column({ name: 'item_name', type: 'text' })
  itemName: string;

  @Field()
  @Column({ name: 'description', type: 'text' })
  description: string;

  @Field()
  @Column({ name: 'promotion_level', type: 'integer' })
  promotionLevel: number;

  @Field()
  @Column({ name: 'item_type', type: 'integer' })
  itemType: number;

  @Field()
  @Column({ name: 'value', type: 'integer' })
  value: number;

  @Field()
  @Column({ name: 'price', type: 'integer' })
  price: number;

  @Field()
  @Column({ name: 'limit_num', type: 'integer' })
  limitNum: number;

  @Field()
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field()
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

}

