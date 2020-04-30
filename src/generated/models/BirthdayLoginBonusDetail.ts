import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'birthday_login_bonus_detail' })
export class BirthdayLoginBonusDetail extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  login_bonus_id: number;

  @Field()
  @Column('integer')
  reward_type: number;

  @Field()
  @Column('integer')
  reward_id: number;

  @Field()
  @Column('integer')
  reward_num: number;

}

