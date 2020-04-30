import { Resolver, Query } from 'type-graphql';
import { HatsuneDiaryScript } from '../models/HatsuneDiaryScript';

@Resolver()
export class HatsuneDiaryScriptResolver {
  @Query(() => [HatsuneDiaryScript])
  HatsuneDiaryScript() {
    return HatsuneDiaryScript.find();
  }
}
