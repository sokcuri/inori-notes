import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'birthday_login_bonus_data' })
export class BirthdayLoginBonusData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'login_bonus_id', type: 'integer' })
  loginBonusId: number;

  @Field()
  @Column({ name: 'name', type: 'text' })
  name: string;

  @Field()
  @Column({ name: 'login_bonus_type', type: 'integer' })
  loginBonusType: number;

  @Field()
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field()
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

  @Field()
  @Column({ name: 'adv_id', type: 'integer' })
  advId: number;

}

