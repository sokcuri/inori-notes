import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_emblem_mission_reward' })
export class HatsuneEmblemMissionReward extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field()
  @Column({ name: 'mission_reward_id', type: 'integer' })
  missionRewardId: number;

  @Field()
  @Column({ name: 'reward_type', type: 'integer' })
  rewardType: number;

  @Field()
  @Column({ name: 'reward_id', type: 'integer' })
  rewardId: number;

  @Field()
  @Column({ name: 'reward_num', type: 'integer' })
  rewardNum: number;

  @Field()
  @Column({ name: 'icon_type', type: 'integer' })
  iconType: number;

}

