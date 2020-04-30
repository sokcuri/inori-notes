import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'clan_battle_s_boss_data' })
export class ClanBattleSBossData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'boss_id', type: 'integer' })
  bossId: number;

  @Field()
  @Column({ name: 'clan_battle_id', type: 'integer' })
  clanBattleId: number;

  @Field()
  @Column({ name: 'difficulty', type: 'integer' })
  difficulty: number;

  @Field()
  @Column({ name: 'order_num', type: 'integer' })
  orderNum: number;

  @Field()
  @Column({ name: 'boss_thumb_id', type: 'integer' })
  bossThumbId: number;

  @Field()
  @Column({ name: 'position_x', type: 'integer' })
  positionX: number;

  @Field()
  @Column({ name: 'position_y', type: 'integer' })
  positionY: number;

  @Field()
  @Column({ name: 'scale_ratio', type: 'real' })
  scaleRatio: number;

  @Field()
  @Column({ name: 'map_position_x', type: 'integer' })
  mapPositionX: number;

  @Field()
  @Column({ name: 'map_position_y', type: 'integer' })
  mapPositionY: number;

  @Field()
  @Column({ name: 'cursor_position', type: 'integer' })
  cursorPosition: number;

  @Field()
  @Column({ name: 'result_boss_position_y', type: 'integer' })
  resultBossPositionY: number;

  @Field()
  @Column({ name: 'quest_detail_bg_id', type: 'integer' })
  questDetailBgId: number;

  @Field()
  @Column({ name: 'quest_detail_bg_position', type: 'integer' })
  questDetailBgPosition: number;

  @Field()
  @Column({ name: 'quest_detail_monster_size', type: 'real' })
  questDetailMonsterSize: number;

  @Field()
  @Column({ name: 'quest_detail_monster_height', type: 'integer' })
  questDetailMonsterHeight: number;

  @Field()
  @Column({ name: 'battle_report_monster_size', type: 'real' })
  battleReportMonsterSize: number;

  @Field()
  @Column({ name: 'battle_report_monster_height', type: 'integer' })
  battleReportMonsterHeight: number;

  @Field()
  @Column({ name: 'background', type: 'integer' })
  background: number;

  @Field()
  @Column({ name: 'wave_bgm', type: 'text' })
  waveBgm: string;

}

