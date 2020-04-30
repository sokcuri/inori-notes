import { Resolver, Query } from 'type-graphql';
import { GoldsetDataTeamlevel } from '../models/GoldsetDataTeamlevel';

@Resolver()
export class GoldsetDataTeamlevelResolver {
  @Query(() => [GoldsetDataTeamlevel])
  GoldsetDataTeamlevel() {
    return GoldsetDataTeamlevel.find();
  }
}
