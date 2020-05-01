import { Resolver, Query } from 'type-graphql';
import { Movie } from '../entities/Movie';

@Resolver()
export class MovieResolver {
  @Query(() => [Movie])
  Movie() {
    return Movie.find();
  }
}
