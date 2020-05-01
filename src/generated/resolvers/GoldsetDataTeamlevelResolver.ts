import { Resolver, Query } from 'type-graphql';
import { GoldsetDataTeamlevel } from '../entities/GoldsetDataTeamlevel';

@Resolver()
export class GoldsetDataTeamlevelResolver {
  @Query(() => [GoldsetDataTeamlevel])
  GoldsetDataTeamlevel() {
    return GoldsetDataTeamlevel.find();
  }
}
