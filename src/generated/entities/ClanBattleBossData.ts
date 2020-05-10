import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'clan_battle_boss_data' })
export class ClanBattleBossData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'boss_id', type: 'integer' })
  bossId: number;

  @Field(type => Int)
  @Column({ name: 'clan_battle_id', type: 'integer' })
  clanBattleId: number;

  @Field(type => Int)
  @Column({ name: 'difficulty', type: 'integer' })
  difficulty: number;

  @Field(type => Int)
  @Column({ name: 'order_num', type: 'integer' })
  orderNum: number;

  @Field(type => Int)
  @Column({ name: 'boss_thumb_id', type: 'integer' })
  bossThumbId: number;

}

