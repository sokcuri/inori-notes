import { Resolver, Query } from 'type-graphql';
import { MyprofileContent } from '../entities/MyprofileContent';

@Resolver()
export class MyprofileContentResolver {
  @Query(() => [MyprofileContent])
  MyprofileContent() {
    return MyprofileContent.find();
  }
}
