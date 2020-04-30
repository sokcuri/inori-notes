import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'unit_profile' })
export class UnitProfile extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  unit_id: number;

  @Field()
  @Column('text')
  unit_name: string;

  @Field()
  @Column('text')
  age: string;

  @Field()
  @Column('text')
  guild: string;

  @Field()
  @Column('text')
  race: string;

  @Field()
  @Column('text')
  height: string;

  @Field()
  @Column('text')
  weight: string;

  @Field()
  @Column('text')
  birth_month: string;

  @Field()
  @Column('text')
  birth_day: string;

  @Field()
  @Column('text')
  blood_type: string;

  @Field()
  @Column('text')
  favorite: string;

  @Field()
  @Column('text')
  voice: string;

  @Field()
  @Column('integer')
  voice_id: number;

  @Field()
  @Column('text')
  catch_copy: string;

  @Field()
  @Column('text')
  self_text: string;

  @Field()
  @Column('text')
  guild_id: string;

}

