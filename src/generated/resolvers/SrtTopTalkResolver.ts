import { Resolver, Query } from 'type-graphql';
import { SrtTopTalk } from '../models/SrtTopTalk';

@Resolver()
export class SrtTopTalkResolver {
  @Query(() => [SrtTopTalk])
  SrtTopTalk() {
    return SrtTopTalk.find();
  }
}
