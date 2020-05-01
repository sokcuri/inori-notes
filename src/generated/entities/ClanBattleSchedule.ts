import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'clan_battle_schedule' })
export class ClanBattleSchedule extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'clan_battle_id', type: 'integer' })
  clanBattleId: number;

  @Field(type => Int)
  @Column({ name: 'release_month', type: 'integer' })
  releaseMonth: number;

  @Field(type => Int)
  @Column({ name: 'last_clan_battle_id', type: 'integer' })
  lastClanBattleId: number;

  @Field(type => Int)
  @Column({ name: 'point_per_stamina', type: 'integer' })
  pointPerStamina: number;

  @Field(type => Int)
  @Column({ name: 'cost_group_id', type: 'integer' })
  costGroupId: number;

  @Field(type => Int)
  @Column({ name: 'cost_group_id_s', type: 'integer' })
  costGroupIdS: number;

  @Field(type => String)
  @Column({ name: 'map_bgm', type: 'text' })
  mapBgm: string;

  @Field(type => Int)
  @Column({ name: 'resource_id', type: 'integer' })
  resourceId: number;

  @Field(type => String)
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field(type => String)
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

}

