import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'campaign_mission_schedule' })
export class CampaignMissionSchedule extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  campaign_id: number;

  @Field()
  @Column('text')
  start_time: string;

  @Field()
  @Column('text')
  end_time: string;

  @Field()
  @Column('text')
  close_time: string;

}

