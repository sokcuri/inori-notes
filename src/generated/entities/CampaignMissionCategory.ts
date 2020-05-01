import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'campaign_mission_category' })
export class CampaignMissionCategory extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => Int)
  @Column({ name: 'campaign_id', type: 'integer' })
  campaignId: number;

  @Field(type => Int)
  @Column({ name: 'type', type: 'integer' })
  type: number;

  @Field(type => Int)
  @Column({ name: 'lv_from', type: 'integer' })
  lvFrom: number;

  @Field(type => Int)
  @Column({ name: 'lv_to', type: 'integer' })
  lvTo: number;

}

