import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'campaign_freegacha_sp' })
export class CampaignFreegachaSp extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'campaign_id', type: 'integer' })
  campaignId: number;

  @Field()
  @Column({ name: 'max_exec_count', type: 'integer' })
  maxExecCount: number;

  @Field()
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field()
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

}

