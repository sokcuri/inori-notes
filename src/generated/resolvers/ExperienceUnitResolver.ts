import { Resolver, Query } from 'type-graphql';
import { ExperienceUnit } from '../models/ExperienceUnit';

@Resolver()
export class ExperienceUnitResolver {
  @Query(() => [ExperienceUnit])
  ExperienceUnit() {
    return ExperienceUnit.find();
  }
}
