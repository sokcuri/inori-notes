import { Resolver, Query } from 'type-graphql';
import { TtkStoryScript } from '../entities/TtkStoryScript';

@Resolver()
export class TtkStoryScriptResolver {
  @Query(() => [TtkStoryScript])
  TtkStoryScript() {
    return TtkStoryScript.find();
  }
}
