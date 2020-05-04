import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'campaign_freegacha' })
export class CampaignFreegacha extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => Int)
  @Column({ name: 'campaign_id', type: 'integer' })
  campaignId: number;

  @Field(type => Int)
  @Column({ name: 'freegacha_1', type: 'integer' })
  freegacha1: number;

  @Field(type => Int)
  @Column({ name: 'freegacha_10', type: 'integer' })
  freegacha10: number;

  @Field(type => String)
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field(type => String)
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

  @Field(type => Int)
  @Column({ name: 'stock_10_flag', type: 'integer' })
  stock10Flag: number;

  @Field(type => Int)
  @Column({ name: 'relation_id', type: 'integer' })
  relationId: number;

  @Field(type => Int)
  @Column({ name: 'relation_count', type: 'integer' })
  relationCount: number;

  @Field(type => [Int])
  get freegacha() {
    return [this.freegacha1, this.freegacha10];
  }

}

