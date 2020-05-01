import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'sekai_boss_mode' })
export class SekaiBossMode extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'sekai_boss_mode_id', type: 'integer' })
  sekaiBossModeId: number;

  @Field()
  @Column({ name: 'sekai_enemy_id', type: 'integer' })
  sekaiEnemyId: number;

  @Field()
  @Column({ name: 'sekai_enemy_level', type: 'text' })
  sekaiEnemyLevel: string;

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
  @Column({ name: 'limit_time', type: 'integer' })
  limitTime: number;

  @Field()
  @Column({ name: 'background', type: 'integer' })
  background: number;

  @Field()
  @Column({ name: 'sheet_id', type: 'text' })
  sheetId: string;

  @Field()
  @Column({ name: 'que_id', type: 'text' })
  queId: string;

  @Field()
  @Column({ name: 'result_boss_position_y', type: 'integer' })
  resultBossPositionY: number;

  @Field()
  @Column({ name: 'reward_gold_coefficient', type: 'integer' })
  rewardGoldCoefficient: number;

  @Field()
  @Column({ name: 'limited_mana', type: 'integer' })
  limitedMana: number;

  @Field()
  @Column({ name: 'score_coefficient', type: 'integer' })
  scoreCoefficient: number;

}

