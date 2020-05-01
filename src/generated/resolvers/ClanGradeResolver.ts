import { Resolver, Query } from 'type-graphql';
import { ClanGrade } from '../entities/ClanGrade';

@Resolver()
export class ClanGradeResolver {
  @Query(() => [ClanGrade])
  ClanGrade() {
    return ClanGrade.find();
  }
}
