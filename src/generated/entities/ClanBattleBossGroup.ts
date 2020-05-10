import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'clan_battle_boss_group' })
export class ClanBattleBossGroup extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'clan_battle_boss_group_id', type: 'integer' })
  clanBattleBossGroupId: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'order_num', type: 'integer' })
  orderNum: number;

  @Field(type => Int)
  @Column({ name: 'position_x', type: 'integer' })
  positionX: number;

  @Field(type => Int)
  @Column({ name: 'position_y', type: 'integer' })
  positionY: number;

  @Field(type => Int)
  @Column({ name: 'limit_time', type: 'integer' })
  limitTime: number;

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
  @Column({ name: 'chest_id', type: 'integer' })
  chestId: number;

  @Field(type => Int)
  @Column({ name: 'fix_reward_id', type: 'integer' })
  fixRewardId: number;

  @Field(type => Int)
  @Column({ name: 'damage_rank_id', type: 'integer' })
  damageRankId: number;

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

  @Field(type => Int)
  @Column({ name: 'wave_group_id', type: 'integer' })
  waveGroupId: number;

  @Field(type => Float)
  @Column({ name: 'reward_gold_coefficient', type: 'real' })
  rewardGoldCoefficient: number;

  @Field(type => Int)
  @Column({ name: 'limited_mana', type: 'integer' })
  limitedMana: number;

  @Field(type => String)
  @Column({ name: 'wave_bgm', type: 'text' })
  waveBgm: string;

  @Field(type => Int)
  @Column({ name: 'quest_detail_rehearsal_label_height', type: 'integer' })
  questDetailRehearsalLabelHeight: number;

  @Field(type => Int)
  @Column({ name: 'last_attack_reward_id', type: 'integer' })
  lastAttackRewardId: number;

  @Field(type => Float)
  @Column({ name: 'score_coefficient', type: 'real' })
  scoreCoefficient: number;

  @Field(type => Int)
  @Column({ name: 'min_carry_over_time', type: 'integer' })
  minCarryOverTime: number;

}

