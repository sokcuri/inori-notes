import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'clan_battle_map_data' })
export class ClanBattleMapData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => Int)
  @Column({ name: 'clan_battle_id', type: 'integer' })
  clanBattleId: number;

  @Field(type => Int)
  @Column({ name: 'map_bg', type: 'integer' })
  mapBg: number;

  @Field(type => Int)
  @Column({ name: 'difficulty', type: 'integer' })
  difficulty: number;

  @Field(type => Int)
  @Column({ name: 'lap_num_from', type: 'integer' })
  lapNumFrom: number;

  @Field(type => Int)
  @Column({ name: 'lap_num_to', type: 'integer' })
  lapNumTo: number;

  @Field(type => Int)
  @Column({ name: 'clan_battle_boss_group_id', type: 'integer' })
  clanBattleBossGroupId: number;

  @Field(type => Int)
  @Column({ name: 'aura_effect', type: 'integer' })
  auraEffect: number;

  @Field(type => Int)
  @Column({ name: 'rsl_unlock_lap', type: 'integer' })
  rslUnlockLap: number;

  @Field(type => Int)
  @Column({ name: 'phase', type: 'integer' })
  phase: number;

}

