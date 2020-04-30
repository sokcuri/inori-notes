import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'login_bonus_detail' })
export class LoginBonusDetail extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  login_bonus_id: number;

  @Field()
  @Column('integer')
  count: number;

  @Field()
  @Column('integer')
  reward_type: number;

  @Field()
  @Column('integer')
  reward_id: number;

  @Field()
  @Column('integer')
  reward_num: number;

  @Field()
  @Column('integer')
  character_id: number;

  @Field()
  @Column('text')
  character_name: string;

  @Field()
  @Column('text')
  description: string;

  @Field()
  @Column('integer')
  voice_id: number;

  @Field()
  @Column('integer')
  bg_id: number;

}

