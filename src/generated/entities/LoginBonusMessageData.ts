import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'login_bonus_message_data' })
export class LoginBonusMessageData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => Int)
  @Column({ name: 'login_bonus_id', type: 'integer' })
  loginBonusId: number;

  @Field(type => Int)
  @Column({ name: 'type', type: 'integer' })
  type: number;

  @Field(type => Int)
  @Column({ name: 'day_count', type: 'integer' })
  dayCount: number;

  @Field(type => Int)
  @Column({ name: 'luck_pattern', type: 'integer' })
  luckPattern: number;

  @Field(type => Int)
  @Column({ name: 'rate', type: 'integer' })
  rate: number;

  @Field(type => Int)
  @Column({ name: 'character_id', type: 'integer' })
  characterId: number;

  @Field(type => String)
  @Column({ name: 'character_name', type: 'text' })
  characterName: string;

  @Field(type => String)
  @Column({ name: 'message', type: 'text' })
  message: string;

  @Field(type => Int)
  @Column({ name: 'voice_id', type: 'integer' })
  voiceId: number;

}

