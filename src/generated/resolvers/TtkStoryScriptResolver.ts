import { Resolver, Query } from 'type-graphql';
import { TtkStoryScript } from '../models/TtkStoryScript';

@Resolver()
export class TtkStoryScriptResolver {
  @Query(() => [TtkStoryScript])
  TtkStoryScript() {
    return TtkStoryScript.find();
  }
}
