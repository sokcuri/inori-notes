import { Resolver, Query } from 'type-graphql';
import { LoginBonusDetail } from '../models/LoginBonusDetail';

@Resolver()
export class LoginBonusDetailResolver {
  @Query(() => [LoginBonusDetail])
  LoginBonusDetail() {
    return LoginBonusDetail.find();
  }
}
