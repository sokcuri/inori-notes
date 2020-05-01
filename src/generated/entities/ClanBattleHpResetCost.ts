import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'clan_battle_hp_reset_cost' })
export class ClanBattleHpResetCost extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field()
  @Column({ name: 'reset_count_from', type: 'integer' })
  resetCountFrom: number;

  @Field()
  @Column({ name: 'reset_count_to', type: 'integer' })
  resetCountTo: number;

  @Field()
  @Column({ name: 'cost_num', type: 'integer' })
  costNum: number;

}

