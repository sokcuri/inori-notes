import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'clan_battle_period' })
export class ClanBattlePeriod extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'clan_battle_id', type: 'integer' })
  clanBattleId: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'period', type: 'integer' })
  period: number;

  @Field(type => String)
  @Column({ name: 'period_detail', type: 'text' })
  periodDetail: string;

  @Field(type => Int)
  @Column({ name: 'period_detail_bg', type: 'integer' })
  periodDetailBg: number;

  @Field(type => String)
  @Column({ name: 'period_detail_s', type: 'text' })
  periodDetailS: string;

  @Field(type => Int)
  @Column({ name: 'period_detail_bg_s', type: 'integer' })
  periodDetailBgS: number;

  @Field(type => Int)
  @Column({ name: 'period_detail_bg_position', type: 'integer' })
  periodDetailBgPosition: number;

  @Field(type => Int)
  @Column({ name: 'period_detail_boss_position_x', type: 'integer' })
  periodDetailBossPositionX: number;

  @Field(type => Int)
  @Column({ name: 'period_detail_boss_position_y', type: 'integer' })
  periodDetailBossPositionY: number;

  @Field(type => String)
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field(type => String)
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

  @Field(type => String)
  @Column({ name: 'interval_start', type: 'text' })
  intervalStart: string;

  @Field(type => String)
  @Column({ name: 'interval_end', type: 'text' })
  intervalEnd: string;

  @Field(type => String)
  @Column({ name: 'calc_start', type: 'text' })
  calcStart: string;

  @Field(type => String)
  @Column({ name: 'result_start', type: 'text' })
  resultStart: string;

  @Field(type => String)
  @Column({ name: 'result_end', type: 'text' })
  resultEnd: string;

  @Field(type => Int)
  @Column({ name: 'limit_time', type: 'integer' })
  limitTime: number;

  @Field(type => Int)
  @Column({ name: 'chest_id', type: 'integer' })
  chestId: number;

  @Field(type => Int)
  @Column({ name: 'quest_detail_rehearsal_label_height', type: 'integer' })
  questDetailRehearsalLabelHeight: number;

  @Field(type => Int)
  @Column({ name: 'min_carry_over_time', type: 'integer' })
  minCarryOverTime: number;

}

