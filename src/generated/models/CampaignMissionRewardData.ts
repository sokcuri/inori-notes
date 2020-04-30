import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'campaign_mission_reward_data' })
export class CampaignMissionRewardData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  campaign_mission_reward_id: number;

  @Field()
  @Column('integer')
  reward_type: number;

  @Field()
  @Column({ nullable: true, type: 'integer' })
  reward_id?: number;

  @Field()
  @Column('integer')
  reward_num: number;

}

