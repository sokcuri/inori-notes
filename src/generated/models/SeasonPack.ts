import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'season_pack' })
export class SeasonPack extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  mission_id: number;

  @Field()
  @Column('integer')
  disp_order: number;

  @Field()
  @Column('integer')
  category_icon: number;

  @Field()
  @Column('text')
  receive_text: string;

  @Field()
  @Column('text')
  after_text: string;

  @Field()
  @Column('integer')
  gift_message_id: number;

  @Field()
  @Column('integer')
  term: number;

  @Field()
  @Column('integer')
  repurchase_day: number;

  @Field()
  @Column('integer')
  group_id: number;

  @Field()
  @Column('integer')
  system_id_1: number;

  @Field()
  @Column('integer')
  add_num_1: number;

  @Field()
  @Column('integer')
  item_record_id: number;

  @Field()
  @Column('integer')
  condition_flg: number;

  @Field()
  @Column('integer')
  reward_rate_1: number;

}

