import { Resolver, Query } from 'type-graphql';
import { SrtPanel } from '../entities/SrtPanel';

@Resolver()
export class SrtPanelResolver {
  @Query(() => [SrtPanel])
  SrtPanel() {
    return SrtPanel.find();
  }
}
