import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'clan_battle_hp_reset_cost' })
export class ClanBattleHpResetCost extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  reset_count_from: number;

  @Field()
  @Column('integer')
  reset_count_to: number;

  @Field()
  @Column('integer')
  cost_num: number;

}

