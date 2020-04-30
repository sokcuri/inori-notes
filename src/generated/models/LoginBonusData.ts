import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'login_bonus_data' })
export class LoginBonusData extends BaseEntity {
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
  @Column('integer')
  count_num: number;

  @Field()
  @Column('text')
  start_time: string;

  @Field()
  @Column('text')
  end_time: string;

  @Field()
  @Column('integer')
  bg_id: number;

  @Field()
  @Column('integer')
  stamp_id: number;

  @Field()
  @Column('integer')
  odds_group_id: number;

  @Field()
  @Column('integer')
  adv_play_type: number;

  @Field()
  @Column('integer')
  count_type: number;

}

