import { Resolver, Query } from 'type-graphql';
import { NyxDramaScript } from '../models/NyxDramaScript';

@Resolver()
export class NyxDramaScriptResolver {
  @Query(() => [NyxDramaScript])
  NyxDramaScript() {
    return NyxDramaScript.find();
  }
}
