import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'campaign_freegacha_data' })
export class CampaignFreegachaData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field()
  @Column({ name: 'campaign_id', type: 'integer' })
  campaignId: number;

  @Field()
  @Column({ name: 'gacha_id', type: 'integer' })
  gachaId: number;

}

