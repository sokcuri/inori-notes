import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'space_battle_data' })
export class SpaceBattleData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'space_battle_id', type: 'integer' })
  spaceBattleId: number;

  @Field()
  @Column({ name: 'space_enemy_id', type: 'integer' })
  spaceEnemyId: number;

  @Field()
  @Column({ name: 'limit_time', type: 'integer' })
  limitTime: number;

  @Field()
  @Column({ name: 'clear_reward_group', type: 'integer' })
  clearRewardGroup: number;

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
  @Column({ name: 'quest_detail_bg_id', type: 'integer' })
  questDetailBgId: number;

  @Field()
  @Column({ name: 'quest_detail_bg_position', type: 'integer' })
  questDetailBgPosition: number;

  @Field()
  @Column({ name: 'quest_name', type: 'text' })
  questName: string;

}

