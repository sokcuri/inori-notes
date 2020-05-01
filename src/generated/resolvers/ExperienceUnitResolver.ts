import { Resolver, Query } from 'type-graphql';
import { ExperienceUnit } from '../entities/ExperienceUnit';

@Resolver()
export class ExperienceUnitResolver {
  @Query(() => [ExperienceUnit])
  ExperienceUnit() {
    return ExperienceUnit.find();
  }
}
