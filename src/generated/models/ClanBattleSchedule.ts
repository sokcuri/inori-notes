import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'clan_battle_schedule' })
export class ClanBattleSchedule extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  clan_battle_id: number;

  @Field()
  @Column('integer')
  release_month: number;

  @Field()
  @Column('integer')
  last_clan_battle_id: number;

  @Field()
  @Column('integer')
  point_per_stamina: number;

  @Field()
  @Column('integer')
  cost_group_id: number;

  @Field()
  @Column('integer')
  cost_group_id_s: number;

  @Field()
  @Column('text')
  map_bgm: string;

  @Field()
  @Column('integer')
  resource_id: number;

  @Field()
  @Column('text')
  start_time: string;

  @Field()
  @Column('text')
  end_time: string;

}

