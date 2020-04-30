import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'season_pack' })
export class SeasonPack extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field()
  @Column({ name: 'mission_id', type: 'integer' })
  missionId: number;

  @Field()
  @Column({ name: 'disp_order', type: 'integer' })
  dispOrder: number;

  @Field()
  @Column({ name: 'category_icon', type: 'integer' })
  categoryIcon: number;

  @Field()
  @Column({ name: 'receive_text', type: 'text' })
  receiveText: string;

  @Field()
  @Column({ name: 'after_text', type: 'text' })
  afterText: string;

  @Field()
  @Column({ name: 'gift_message_id', type: 'integer' })
  giftMessageId: number;

  @Field()
  @Column({ name: 'term', type: 'integer' })
  term: number;

  @Field()
  @Column({ name: 'repurchase_day', type: 'integer' })
  repurchaseDay: number;

  @Field()
  @Column({ name: 'group_id', type: 'integer' })
  groupId: number;

  @Field()
  @Column({ name: 'system_id_1', type: 'integer' })
  systemId1: number;

  @Field()
  @Column({ name: 'add_num_1', type: 'integer' })
  addNum1: number;

  @Field()
  @Column({ name: 'item_record_id', type: 'integer' })
  itemRecordId: number;

  @Field()
  @Column({ name: 'condition_flg', type: 'integer' })
  conditionFlg: number;

  @Field()
  @Column({ name: 'reward_rate_1', type: 'integer' })
  rewardRate1: number;

}

