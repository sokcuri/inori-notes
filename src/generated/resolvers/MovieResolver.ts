import { Resolver, Query } from 'type-graphql';
import { Movie } from '../models/Movie';

@Resolver()
export class MovieResolver {
  @Query(() => [Movie])
  Movie() {
    return Movie.find();
  }
}
