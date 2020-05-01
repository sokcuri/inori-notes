import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'birthday_login_bonus_data' })
export class BirthdayLoginBonusData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'login_bonus_id', type: 'integer' })
  loginBonusId: number;

  @Field(type => String)
  @Column({ name: 'name', type: 'text' })
  name: string;

  @Field(type => Int)
  @Column({ name: 'login_bonus_type', type: 'integer' })
  loginBonusType: number;

  @Field(type => String)
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field(type => String)
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

  @Field(type => Int)
  @Column({ name: 'adv_id', type: 'integer' })
  advId: number;

}

