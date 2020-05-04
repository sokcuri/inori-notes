import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'room_item_detail' })
export class RoomItemDetail extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'room_item_id', type: 'integer' })
  roomItemId: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'level', type: 'integer' })
  level: number;

  @Field(type => String)
  @Column({ name: 'item_detail', type: 'text' })
  itemDetail: string;

  @Field(type => Int)
  @Column({ name: 'lvup_trigger_type', type: 'integer' })
  lvupTriggerType: number;

  @Field(type => Int)
  @Column({ name: 'lvup_trigger_id', type: 'integer' })
  lvupTriggerId: number;

  @Field(type => Int)
  @Column({ name: 'lvup_trigger_value', type: 'integer' })
  lvupTriggerValue: number;

  @Field(type => Int)
  @Column({ name: 'lvup_trigger_type_2', type: 'integer' })
  lvupTriggerType2: number;

  @Field(type => Int)
  @Column({ name: 'lvup_trigger_id_2', type: 'integer' })
  lvupTriggerId2: number;

  @Field(type => Int)
  @Column({ name: 'lvup_trigger_value_2', type: 'integer' })
  lvupTriggerValue2: number;

  @Field(type => Int)
  @Column({ name: 'lvup_item1_type', type: 'integer' })
  lvupItem1Type: number;

  @Field(type => Int)
  @Column({ name: 'lvup_item1_id', type: 'integer' })
  lvupItem1Id: number;

  @Field(type => Int)
  @Column({ name: 'lvup_item1_num', type: 'integer' })
  lvupItem1Num: number;

  @Field(type => Int)
  @Column({ name: 'lvup_time', type: 'integer' })
  lvupTime: number;

  @Field(type => [Int])
  get lvupTriggerType() {
    return [this.lvupTriggerType2];
  }

  @Field(type => [Int])
  get lvupTriggerId() {
    return [this.lvupTriggerId2];
  }

  @Field(type => [Int])
  get lvupTriggerValue() {
    return [this.lvupTriggerValue2];
  }

}

