import { Resolver, Query } from 'type-graphql';
import { NyxDramaScript } from '../entities/NyxDramaScript';

@Resolver()
export class NyxDramaScriptResolver {
  @Query(() => [NyxDramaScript])
  NyxDramaScript() {
    return NyxDramaScript.find();
  }
}
