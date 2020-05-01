import { Resolver, Query } from 'type-graphql';
import { HatsuneDiaryLetterScript } from '../entities/HatsuneDiaryLetterScript';

@Resolver()
export class HatsuneDiaryLetterScriptResolver {
  @Query(() => [HatsuneDiaryLetterScript])
  HatsuneDiaryLetterScript() {
    return HatsuneDiaryLetterScript.find();
  }
}
