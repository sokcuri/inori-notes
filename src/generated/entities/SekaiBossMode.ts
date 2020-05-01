import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'sekai_boss_mode' })
export class SekaiBossMode extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'sekai_boss_mode_id', type: 'integer' })
  sekaiBossModeId: number;

  @Field(type => Int)
  @Column({ name: 'sekai_enemy_id', type: 'integer' })
  sekaiEnemyId: number;

  @Field(type => String)
  @Column({ name: 'sekai_enemy_level', type: 'text' })
  sekaiEnemyLevel: string;

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

  @Field(type => Int)
  @Column({ name: 'limit_time', type: 'integer' })
  limitTime: number;

  @Field(type => Int)
  @Column({ name: 'background', type: 'integer' })
  background: number;

  @Field(type => String)
  @Column({ name: 'sheet_id', type: 'text' })
  sheetId: string;

  @Field(type => String)
  @Column({ name: 'que_id', type: 'text' })
  queId: string;

  @Field(type => Int)
  @Column({ name: 'result_boss_position_y', type: 'integer' })
  resultBossPositionY: number;

  @Field(type => Int)
  @Column({ name: 'reward_gold_coefficient', type: 'integer' })
  rewardGoldCoefficient: number;

  @Field(type => Int)
  @Column({ name: 'limited_mana', type: 'integer' })
  limitedMana: number;

  @Field(type => Int)
  @Column({ name: 'score_coefficient', type: 'integer' })
  scoreCoefficient: number;

}

