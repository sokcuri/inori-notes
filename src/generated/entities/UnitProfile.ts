import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'unit_profile' })
export class UnitProfile extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'unit_id', type: 'integer' })
  unitId: number;

  @Field()
  @Column({ name: 'unit_name', type: 'text' })
  unitName: string;

  @Field()
  @Column({ name: 'age', type: 'text' })
  age: string;

  @Field()
  @Column({ name: 'guild', type: 'text' })
  guild: string;

  @Field()
  @Column({ name: 'race', type: 'text' })
  race: string;

  @Field()
  @Column({ name: 'height', type: 'text' })
  height: string;

  @Field()
  @Column({ name: 'weight', type: 'text' })
  weight: string;

  @Field()
  @Column({ name: 'birth_month', type: 'text' })
  birthMonth: string;

  @Field()
  @Column({ name: 'birth_day', type: 'text' })
  birthDay: string;

  @Field()
  @Column({ name: 'blood_type', type: 'text' })
  bloodType: string;

  @Field()
  @Column({ name: 'favorite', type: 'text' })
  favorite: string;

  @Field()
  @Column({ name: 'voice', type: 'text' })
  voice: string;

  @Field()
  @Column({ name: 'voice_id', type: 'integer' })
  voiceId: number;

  @Field()
  @Column({ name: 'catch_copy', type: 'text' })
  catchCopy: string;

  @Field()
  @Column({ name: 'self_text', type: 'text' })
  selfText: string;

  @Field()
  @Column({ name: 'guild_id', type: 'text' })
  guildId: string;

}

