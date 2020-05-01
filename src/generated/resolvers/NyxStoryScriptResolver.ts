import { Resolver, Query } from 'type-graphql';
import { NyxStoryScript } from '../entities/NyxStoryScript';

@Resolver()
export class NyxStoryScriptResolver {
  @Query(() => [NyxStoryScript])
  NyxStoryScript() {
    return NyxStoryScript.find();
  }
}
