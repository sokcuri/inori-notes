import { Resolver, Query } from 'type-graphql';
import { NyxStoryScript } from '../models/NyxStoryScript';

@Resolver()
export class NyxStoryScriptResolver {
  @Query(() => [NyxStoryScript])
  NyxStoryScript() {
    return NyxStoryScript.find();
  }
}
