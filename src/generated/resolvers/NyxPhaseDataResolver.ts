import { Resolver, Query } from 'type-graphql';
import { NyxPhaseData } from '../models/NyxPhaseData';

@Resolver()
export class NyxPhaseDataResolver {
  @Query(() => [NyxPhaseData])
  NyxPhaseData() {
    return NyxPhaseData.find();
  }
}
