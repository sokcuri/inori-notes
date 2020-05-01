import { Resolver, Query } from 'type-graphql';
import { SrtAction } from '../entities/SrtAction';

@Resolver()
export class SrtActionResolver {
  @Query(() => [SrtAction])
  SrtAction() {
    return SrtAction.find();
  }
}
