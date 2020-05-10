/* eslint-disable @typescript-eslint/no-unused-vars */
import { Resolver, Query, Arg, Int, ObjectType, Field, registerEnumType, Float } from 'type-graphql';

@ObjectType()
export class Action {
  @Field(type => Int)
  id: number;

  @Field(type => String)
  description: string;

  @Field(type => String)
  levelUpDisp: string;
}
