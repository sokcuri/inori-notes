import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'birthday_login_bonus_detail' })
export class BirthdayLoginBonusDetail extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => Int)
  @Column({ name: 'login_bonus_id', type: 'integer' })
  loginBonusId: number;

  @Field(type => Int)
  @Column({ name: 'reward_type', type: 'integer' })
  rewardType: number;

  @Field(type => Int)
  @Column({ name: 'reward_id', type: 'integer' })
  rewardId: number;

  @Field(type => Int)
  @Column({ name: 'reward_num', type: 'integer' })
  rewardNum: number;

}

