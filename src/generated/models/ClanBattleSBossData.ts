import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'clan_battle_s_boss_data' })
export class ClanBattleSBossData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  boss_id: number;

  @Field()
  @Column('integer')
  clan_battle_id: number;

  @Field()
  @Column('integer')
  difficulty: number;

  @Field()
  @Column('integer')
  order_num: number;

  @Field()
  @Column('integer')
  boss_thumb_id: number;

  @Field()
  @Column('integer')
  position_x: number;

  @Field()
  @Column('integer')
  position_y: number;

  @Field()
  @Column('real')
  scale_ratio: number;

  @Field()
  @Column('integer')
  map_position_x: number;

  @Field()
  @Column('integer')
  map_position_y: number;

  @Field()
  @Column('integer')
  cursor_position: number;

  @Field()
  @Column('integer')
  result_boss_position_y: number;

  @Field()
  @Column('integer')
  quest_detail_bg_id: number;

  @Field()
  @Column('integer')
  quest_detail_bg_position: number;

  @Field()
  @Column('real')
  quest_detail_monster_size: number;

  @Field()
  @Column('integer')
  quest_detail_monster_height: number;

  @Field()
  @Column('real')
  battle_report_monster_size: number;

  @Field()
  @Column('integer')
  battle_report_monster_height: number;

  @Field()
  @Column('integer')
  background: number;

  @Field()
  @Column('text')
  wave_bgm: string;

}

