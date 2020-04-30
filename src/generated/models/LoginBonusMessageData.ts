import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'login_bonus_message_data' })
export class LoginBonusMessageData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  login_bonus_id: number;

  @Field()
  @Column('integer')
  type: number;

  @Field()
  @Column('integer')
  day_count: number;

  @Field()
  @Column('integer')
  luck_pattern: number;

  @Field()
  @Column('integer')
  rate: number;

  @Field()
  @Column('integer')
  character_id: number;

  @Field()
  @Column('text')
  character_name: string;

  @Field()
  @Column('text')
  message: string;

  @Field()
  @Column('integer')
  voice_id: number;

}

