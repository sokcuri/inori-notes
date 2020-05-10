import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'campaign_schedule' })
export class CampaignSchedule extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => Int)
  @Column({ name: 'campaign_category', type: 'integer' })
  campaignCategory: number;

  @Field(type => Float)
  @Column({ name: 'value', type: 'real' })
  value: number;

  @Field(type => Int)
  @Column({ name: 'system_id', type: 'integer' })
  systemId: number;

  @Field(type => Int)
  @Column({ name: 'icon_image', type: 'integer' })
  iconImage: number;

  @Field(type => String)
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field(type => String)
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

}

