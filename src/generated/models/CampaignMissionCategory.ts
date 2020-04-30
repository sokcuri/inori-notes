import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'campaign_mission_category' })
export class CampaignMissionCategory extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  campaign_id: number;

  @Field()
  @Column('integer')
  type: number;

  @Field()
  @Column('integer')
  lv_from: number;

  @Field()
  @Column('integer')
  lv_to: number;

}

