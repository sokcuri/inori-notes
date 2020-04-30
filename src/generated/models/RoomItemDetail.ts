import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'room_item_detail' })
export class RoomItemDetail extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  room_item_id: number;

  @Field(type => ID)
  @PrimaryColumn('integer')
  level: number;

  @Field()
  @Column('text')
  item_detail: string;

  @Field()
  @Column('integer')
  lvup_trigger_type: number;

  @Field()
  @Column('integer')
  lvup_trigger_id: number;

  @Field()
  @Column('integer')
  lvup_trigger_value: number;

  @Field()
  @Column('integer')
  lvup_trigger_type_2: number;

  @Field()
  @Column('integer')
  lvup_trigger_id_2: number;

  @Field()
  @Column('integer')
  lvup_trigger_value_2: number;

  @Field()
  @Column('integer')
  lvup_item1_type: number;

  @Field()
  @Column('integer')
  lvup_item1_id: number;

  @Field()
  @Column('integer')
  lvup_item1_num: number;

  @Field()
  @Column('integer')
  lvup_time: number;

}

