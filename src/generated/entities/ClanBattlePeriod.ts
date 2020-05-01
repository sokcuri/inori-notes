import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'clan_battle_period' })
export class ClanBattlePeriod extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'clan_battle_id', type: 'integer' })
  clanBattleId: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'period', type: 'integer' })
  period: number;

  @Field()
  @Column({ name: 'period_detail', type: 'text' })
  periodDetail: string;

  @Field()
  @Column({ name: 'period_detail_bg', type: 'integer' })
  periodDetailBg: number;

  @Field()
  @Column({ name: 'period_detail_s', type: 'text' })
  periodDetailS: string;

  @Field()
  @Column({ name: 'period_detail_bg_s', type: 'integer' })
  periodDetailBgS: number;

  @Field()
  @Column({ name: 'period_detail_bg_position', type: 'integer' })
  periodDetailBgPosition: number;

  @Field()
  @Column({ name: 'period_detail_boss_position_x', type: 'integer' })
  periodDetailBossPositionX: number;

  @Field()
  @Column({ name: 'period_detail_boss_position_y', type: 'integer' })
  periodDetailBossPositionY: number;

  @Field()
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field()
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

  @Field()
  @Column({ name: 'interval_start', type: 'text' })
  intervalStart: string;

  @Field()
  @Column({ name: 'interval_end', type: 'text' })
  intervalEnd: string;

  @Field()
  @Column({ name: 'calc_start', type: 'text' })
  calcStart: string;

  @Field()
  @Column({ name: 'result_start', type: 'text' })
  resultStart: string;

  @Field()
  @Column({ name: 'result_end', type: 'text' })
  resultEnd: string;

  @Field()
  @Column({ name: 'limit_time', type: 'integer' })
  limitTime: number;

  @Field()
  @Column({ name: 'chest_id', type: 'integer' })
  chestId: number;

  @Field()
  @Column({ name: 'quest_detail_rehearsal_label_height', type: 'integer' })
  questDetailRehearsalLabelHeight: number;

  @Field()
  @Column({ name: 'min_carry_over_time', type: 'integer' })
  minCarryOverTime: number;

}

