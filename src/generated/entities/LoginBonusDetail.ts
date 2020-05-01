import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'login_bonus_detail' })
export class LoginBonusDetail extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => Int)
  @Column({ name: 'login_bonus_id', type: 'integer' })
  loginBonusId: number;

  @Field(type => Int)
  @Column({ name: 'count', type: 'integer' })
  count: number;

  @Field(type => Int)
  @Column({ name: 'reward_type', type: 'integer' })
  rewardType: number;

  @Field(type => Int)
  @Column({ name: 'reward_id', type: 'integer' })
  rewardId: number;

  @Field(type => Int)
  @Column({ name: 'reward_num', type: 'integer' })
  rewardNum: number;

  @Field(type => Int)
  @Column({ name: 'character_id', type: 'integer' })
  characterId: number;

  @Field(type => String)
  @Column({ name: 'character_name', type: 'text' })
  characterName: string;

  @Field(type => String)
  @Column({ name: 'description', type: 'text' })
  description: string;

  @Field(type => Int)
  @Column({ name: 'voice_id', type: 'integer' })
  voiceId: number;

  @Field(type => Int)
  @Column({ name: 'bg_id', type: 'integer' })
  bgId: number;

}

