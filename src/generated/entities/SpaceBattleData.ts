import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'space_battle_data' })
export class SpaceBattleData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'space_battle_id', type: 'integer' })
  spaceBattleId: number;

  @Field(type => Int)
  @Column({ name: 'space_enemy_id', type: 'integer' })
  spaceEnemyId: number;

  @Field(type => Int)
  @Column({ name: 'limit_time', type: 'integer' })
  limitTime: number;

  @Field(type => Int)
  @Column({ name: 'clear_reward_group', type: 'integer' })
  clearRewardGroup: number;

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
  @Column({ name: 'quest_detail_bg_id', type: 'integer' })
  questDetailBgId: number;

  @Field(type => Int)
  @Column({ name: 'quest_detail_bg_position', type: 'integer' })
  questDetailBgPosition: number;

  @Field(type => String)
  @Column({ name: 'quest_name', type: 'text' })
  questName: string;

}

