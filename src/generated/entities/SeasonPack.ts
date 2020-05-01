import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'season_pack' })
export class SeasonPack extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => Int)
  @Column({ name: 'mission_id', type: 'integer' })
  missionId: number;

  @Field(type => Int)
  @Column({ name: 'disp_order', type: 'integer' })
  dispOrder: number;

  @Field(type => Int)
  @Column({ name: 'category_icon', type: 'integer' })
  categoryIcon: number;

  @Field(type => String)
  @Column({ name: 'receive_text', type: 'text' })
  receiveText: string;

  @Field(type => String)
  @Column({ name: 'after_text', type: 'text' })
  afterText: string;

  @Field(type => Int)
  @Column({ name: 'gift_message_id', type: 'integer' })
  giftMessageId: number;

  @Field(type => Int)
  @Column({ name: 'term', type: 'integer' })
  term: number;

  @Field(type => Int)
  @Column({ name: 'repurchase_day', type: 'integer' })
  repurchaseDay: number;

  @Field(type => Int)
  @Column({ name: 'group_id', type: 'integer' })
  groupId: number;

  @Field(type => Int)
  @Column({ name: 'system_id_1', type: 'integer' })
  systemId1: number;

  @Field(type => Int)
  @Column({ name: 'add_num_1', type: 'integer' })
  addNum1: number;

  @Field(type => Int)
  @Column({ name: 'item_record_id', type: 'integer' })
  itemRecordId: number;

  @Field(type => Int)
  @Column({ name: 'condition_flg', type: 'integer' })
  conditionFlg: number;

  @Field(type => Int)
  @Column({ name: 'reward_rate_1', type: 'integer' })
  rewardRate1: number;

}

