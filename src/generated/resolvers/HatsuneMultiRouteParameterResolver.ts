import { Resolver, Query } from 'type-graphql';
import { HatsuneMultiRouteParameter } from '../entities/HatsuneMultiRouteParameter';

@Resolver()
export class HatsuneMultiRouteParameterResolver {
  @Query(() => [HatsuneMultiRouteParameter])
  HatsuneMultiRouteParameter() {
    return HatsuneMultiRouteParameter.find();
  }
}
