/* eslint-disable @typescript-eslint/no-unused-vars */
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class Profile {
  @Field(type => String)
  age: string;

  @Field(type => String)
  guild: string;

  @Field(type => String)
  race: string;

  @Field(type => String)
  height: string;

  @Field(type => String)
  weight: string;

  @Field(type => String)
  get birth() {
    return `${this.birthMonth}월 ${this.birthDay}일`;
  }

  @Field(type => String)
  birthMonth: string;

  @Field(type => String)
  birthDay: string;

  @Field(type => String)
  bloodType: string;

  @Field(type => String)
  favorite: string;

  @Field(type => String)
  voice: string;

  @Field(type => String)
  catchCopy: string;

  @Field(type => String)
  selfText: string;
}
