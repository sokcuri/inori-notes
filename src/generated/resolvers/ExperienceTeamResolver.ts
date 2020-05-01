import { Resolver, Query } from 'type-graphql';
import { ExperienceTeam } from '../entities/ExperienceTeam';

@Resolver()
export class ExperienceTeamResolver {
  @Query(() => [ExperienceTeam])
  ExperienceTeam() {
    return ExperienceTeam.find();
  }
}
