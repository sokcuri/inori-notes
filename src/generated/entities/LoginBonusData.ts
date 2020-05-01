import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'login_bonus_data' })
export class LoginBonusData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'login_bonus_id', type: 'integer' })
  loginBonusId: number;

  @Field(type => String)
  @Column({ name: 'name', type: 'text' })
  name: string;

  @Field(type => Int)
  @Column({ name: 'login_bonus_type', type: 'integer' })
  loginBonusType: number;

  @Field(type => Int)
  @Column({ name: 'count_num', type: 'integer' })
  countNum: number;

  @Field(type => String)
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field(type => String)
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

  @Field(type => Int)
  @Column({ name: 'bg_id', type: 'integer' })
  bgId: number;

  @Field(type => Int)
  @Column({ name: 'stamp_id', type: 'integer' })
  stampId: number;

  @Field(type => Int)
  @Column({ name: 'odds_group_id', type: 'integer' })
  oddsGroupId: number;

  @Field(type => Int)
  @Column({ name: 'adv_play_type', type: 'integer' })
  advPlayType: number;

  @Field(type => Int)
  @Column({ name: 'count_type', type: 'integer' })
  countType: number;

}

