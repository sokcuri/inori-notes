import { Resolver, Query } from 'type-graphql';
import { HatsuneMultiRouteParameter } from '../models/HatsuneMultiRouteParameter';

@Resolver()
export class HatsuneMultiRouteParameterResolver {
  @Query(() => [HatsuneMultiRouteParameter])
  HatsuneMultiRouteParameter() {
    return HatsuneMultiRouteParameter.find();
  }
}
