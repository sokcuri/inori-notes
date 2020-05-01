import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'login_bonus_detail' })
export class LoginBonusDetail extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field()
  @Column({ name: 'login_bonus_id', type: 'integer' })
  loginBonusId: number;

  @Field()
  @Column({ name: 'count', type: 'integer' })
  count: number;

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
  @Column({ name: 'character_id', type: 'integer' })
  characterId: number;

  @Field()
  @Column({ name: 'character_name', type: 'text' })
  characterName: string;

  @Field()
  @Column({ name: 'description', type: 'text' })
  description: string;

  @Field()
  @Column({ name: 'voice_id', type: 'integer' })
  voiceId: number;

  @Field()
  @Column({ name: 'bg_id', type: 'integer' })
  bgId: number;

}

