import { Resolver, Query } from 'type-graphql';
import { SrtAction } from '../models/SrtAction';

@Resolver()
export class SrtActionResolver {
  @Query(() => [SrtAction])
  SrtAction() {
    return SrtAction.find();
  }
}
