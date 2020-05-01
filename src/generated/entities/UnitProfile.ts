import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'unit_profile' })
export class UnitProfile extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'unit_id', type: 'integer' })
  unitId: number;

  @Field(type => String)
  @Column({ name: 'unit_name', type: 'text' })
  unitName: string;

  @Field(type => String)
  @Column({ name: 'age', type: 'text' })
  age: string;

  @Field(type => String)
  @Column({ name: 'guild', type: 'text' })
  guild: string;

  @Field(type => String)
  @Column({ name: 'race', type: 'text' })
  race: string;

  @Field(type => String)
  @Column({ name: 'height', type: 'text' })
  height: string;

  @Field(type => String)
  @Column({ name: 'weight', type: 'text' })
  weight: string;

  @Field(type => String)
  @Column({ name: 'birth_month', type: 'text' })
  birthMonth: string;

  @Field(type => String)
  @Column({ name: 'birth_day', type: 'text' })
  birthDay: string;

  @Field(type => String)
  @Column({ name: 'blood_type', type: 'text' })
  bloodType: string;

  @Field(type => String)
  @Column({ name: 'favorite', type: 'text' })
  favorite: string;

  @Field(type => String)
  @Column({ name: 'voice', type: 'text' })
  voice: string;

  @Field(type => Int)
  @Column({ name: 'voice_id', type: 'integer' })
  voiceId: number;

  @Field(type => String)
  @Column({ name: 'catch_copy', type: 'text' })
  catchCopy: string;

  @Field(type => String)
  @Column({ name: 'self_text', type: 'text' })
  selfText: string;

  @Field(type => String)
  @Column({ name: 'guild_id', type: 'text' })
  guildId: string;

}

