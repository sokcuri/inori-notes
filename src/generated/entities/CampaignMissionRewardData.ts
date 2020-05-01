import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'campaign_mission_reward_data' })
export class CampaignMissionRewardData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => Int)
  @Column({ name: 'campaign_mission_reward_id', type: 'integer' })
  campaignMissionRewardId: number;

  @Field(type => Int)
  @Column({ name: 'reward_type', type: 'integer' })
  rewardType: number;

  @Field(type => Int)
  @Column({ name: 'reward_id', type: 'integer', nullable: true })
  rewardId: number;

  @Field(type => Int)
  @Column({ name: 'reward_num', type: 'integer' })
  rewardNum: number;

}

