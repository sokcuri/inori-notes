import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'campaign_freegacha' })
export class CampaignFreegacha extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  campaign_id: number;

  @Field()
  @Column('integer')
  freegacha_1: number;

  @Field()
  @Column('integer')
  freegacha_10: number;

  @Field()
  @Column('text')
  start_time: string;

  @Field()
  @Column('text')
  end_time: string;

  @Field()
  @Column('integer')
  stock_10_flag: number;

  @Field()
  @Column('integer')
  relation_id: number;

  @Field()
  @Column('integer')
  relation_count: number;

}

