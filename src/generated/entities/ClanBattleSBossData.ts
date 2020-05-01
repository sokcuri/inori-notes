import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'clan_battle_s_boss_data' })
export class ClanBattleSBossData extends BaseEntity {
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

  @Field(type => Int)
  @Column({ name: 'position_x', type: 'integer' })
  positionX: number;

  @Field(type => Int)
  @Column({ name: 'position_y', type: 'integer' })
  positionY: number;

  @Field(type => Float)
  @Column({ name: 'scale_ratio', type: 'real' })
  scaleRatio: number;

  @Field(type => Int)
  @Column({ name: 'map_position_x', type: 'integer' })
  mapPositionX: number;

  @Field(type => Int)
  @Column({ name: 'map_position_y', type: 'integer' })
  mapPositionY: number;

  @Field(type => Int)
  @Column({ name: 'cursor_position', type: 'integer' })
  cursorPosition: number;

  @Field(type => Int)
  @Column({ name: 'result_boss_position_y', type: 'integer' })
  resultBossPositionY: number;

  @Field(type => Int)
  @Column({ name: 'quest_detail_bg_id', type: 'integer' })
  questDetailBgId: number;

  @Field(type => Int)
  @Column({ name: 'quest_detail_bg_position', type: 'integer' })
  questDetailBgPosition: number;

  @Field(type => Float)
  @Column({ name: 'quest_detail_monster_size', type: 'real' })
  questDetailMonsterSize: number;

  @Field(type => Int)
  @Column({ name: 'quest_detail_monster_height', type: 'integer' })
  questDetailMonsterHeight: number;

  @Field(type => Float)
  @Column({ name: 'battle_report_monster_size', type: 'real' })
  battleReportMonsterSize: number;

  @Field(type => Int)
  @Column({ name: 'battle_report_monster_height', type: 'integer' })
  battleReportMonsterHeight: number;

  @Field(type => Int)
  @Column({ name: 'background', type: 'integer' })
  background: number;

  @Field(type => String)
  @Column({ name: 'wave_bgm', type: 'text' })
  waveBgm: string;

}

