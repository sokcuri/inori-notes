import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'campaign_freegacha_sp' })
export class CampaignFreegachaSp extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  campaign_id: number;

  @Field()
  @Column('integer')
  max_exec_count: number;

  @Field()
  @Column('text')
  start_time: string;

  @Field()
  @Column('text')
  end_time: string;

}

