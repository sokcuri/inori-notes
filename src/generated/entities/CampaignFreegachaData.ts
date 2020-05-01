import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'campaign_freegacha_data' })
export class CampaignFreegachaData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => Int)
  @Column({ name: 'campaign_id', type: 'integer' })
  campaignId: number;

  @Field(type => Int)
  @Column({ name: 'gacha_id', type: 'integer' })
  gachaId: number;

}

