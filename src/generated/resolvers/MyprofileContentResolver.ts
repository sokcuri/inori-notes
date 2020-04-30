import { Resolver, Query } from 'type-graphql';
import { MyprofileContent } from '../models/MyprofileContent';

@Resolver()
export class MyprofileContentResolver {
  @Query(() => [MyprofileContent])
  MyprofileContent() {
    return MyprofileContent.find();
  }
}
