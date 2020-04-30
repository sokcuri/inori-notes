import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'login_bonus_message_data' })
export class LoginBonusMessageData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field()
  @Column({ name: 'login_bonus_id', type: 'integer' })
  loginBonusId: number;

  @Field()
  @Column({ name: 'type', type: 'integer' })
  type: number;

  @Field()
  @Column({ name: 'day_count', type: 'integer' })
  dayCount: number;

  @Field()
  @Column({ name: 'luck_pattern', type: 'integer' })
  luckPattern: number;

  @Field()
  @Column({ name: 'rate', type: 'integer' })
  rate: number;

  @Field()
  @Column({ name: 'character_id', type: 'integer' })
  characterId: number;

  @Field()
  @Column({ name: 'character_name', type: 'text' })
  characterName: string;

  @Field()
  @Column({ name: 'message', type: 'text' })
  message: string;

  @Field()
  @Column({ name: 'voice_id', type: 'integer' })
  voiceId: number;

}

