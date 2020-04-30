import { Resolver, Query } from 'type-graphql';
import { ExperienceTeam } from '../models/ExperienceTeam';

@Resolver()
export class ExperienceTeamResolver {
  @Query(() => [ExperienceTeam])
  ExperienceTeam() {
    return ExperienceTeam.find();
  }
}
