import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'birthday_login_bonus_data' })
export class BirthdayLoginBonusData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  login_bonus_id: number;

  @Field()
  @Column('text')
  name: string;

  @Field()
  @Column('integer')
  login_bonus_type: number;

  @Field()
  @Column('text')
  start_time: string;

  @Field()
  @Column('text')
  end_time: string;

  @Field()
  @Column('integer')
  adv_id: number;

}

