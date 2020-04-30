import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'clan_battle_period' })
export class ClanBattlePeriod extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  clan_battle_id: number;

  @Field(type => ID)
  @PrimaryColumn('integer')
  period: number;

  @Field()
  @Column('text')
  period_detail: string;

  @Field()
  @Column('integer')
  period_detail_bg: number;

  @Field()
  @Column('text')
  period_detail_s: string;

  @Field()
  @Column('integer')
  period_detail_bg_s: number;

  @Field()
  @Column('integer')
  period_detail_bg_position: number;

  @Field()
  @Column('integer')
  period_detail_boss_position_x: number;

  @Field()
  @Column('integer')
  period_detail_boss_position_y: number;

  @Field()
  @Column('text')
  start_time: string;

  @Field()
  @Column('text')
  end_time: string;

  @Field()
  @Column('text')
  interval_start: string;

  @Field()
  @Column('text')
  interval_end: string;

  @Field()
  @Column('text')
  calc_start: string;

  @Field()
  @Column('text')
  result_start: string;

  @Field()
  @Column('text')
  result_end: string;

  @Field()
  @Column('integer')
  limit_time: number;

  @Field()
  @Column('integer')
  chest_id: number;

  @Field()
  @Column('integer')
  quest_detail_rehearsal_label_height: number;

  @Field()
  @Column('integer')
  min_carry_over_time: number;

}

