import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'uek_boss' })
export class UekBoss extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'area', type: 'integer' })
  area: number;

  @Field()
  @Column({ name: 'quest_name', type: 'text' })
  questName: string;

  @Field()
  @Column({ name: 'limit_time', type: 'integer' })
  limitTime: number;

  @Field()
  @Column({ name: 'reward_type_1', type: 'integer' })
  rewardType1: number;

  @Field()
  @Column({ name: 'reward_id_1', type: 'integer' })
  rewardId1: number;

  @Field()
  @Column({ name: 'reward_num_1', type: 'integer' })
  rewardNum1: number;

  @Field()
  @Column({ name: 'reward_type_2', type: 'integer' })
  rewardType2: number;

  @Field()
  @Column({ name: 'reward_id_2', type: 'integer' })
  rewardId2: number;

  @Field()
  @Column({ name: 'reward_num_2', type: 'integer' })
  rewardNum2: number;

  @Field()
  @Column({ name: 'reward_type_3', type: 'integer' })
  rewardType3: number;

  @Field()
  @Column({ name: 'reward_id_3', type: 'integer' })
  rewardId3: number;

  @Field()
  @Column({ name: 'reward_num_3', type: 'integer' })
  rewardNum3: number;

  @Field()
  @Column({ name: 'reward_type_4', type: 'integer' })
  rewardType4: number;

  @Field()
  @Column({ name: 'reward_id_4', type: 'integer' })
  rewardId4: number;

  @Field()
  @Column({ name: 'reward_num_4', type: 'integer' })
  rewardNum4: number;

  @Field()
  @Column({ name: 'reward_type_5', type: 'integer' })
  rewardType5: number;

  @Field()
  @Column({ name: 'reward_id_5', type: 'integer' })
  rewardId5: number;

  @Field()
  @Column({ name: 'reward_num_5', type: 'integer' })
  rewardNum5: number;

  @Field()
  @Column({ name: 'background', type: 'integer' })
  background: number;

  @Field()
  @Column({ name: 'enemy_id', type: 'integer' })
  enemyId: number;

  @Field()
  @Column({ name: 'bgm_sheet_id', type: 'text' })
  bgmSheetId: string;

  @Field()
  @Column({ name: 'bgm_que_id', type: 'text' })
  bgmQueId: string;

  @Field()
  @Column({ name: 'detail_bg_id', type: 'integer' })
  detailBgId: number;

  @Field()
  @Column({ name: 'detail_bg_position', type: 'integer' })
  detailBgPosition: number;

  @Field()
  @Column({ name: 'detail_boss_bg_size', type: 'real' })
  detailBossBgSize: number;

  @Field()
  @Column({ name: 'detail_boss_bg_height', type: 'integer' })
  detailBossBgHeight: number;

  @Field()
  @Column({ name: 'result_boss_position_y', type: 'integer' })
  resultBossPositionY: number;

  @Field()
  @Column({ name: 'result_movie', type: 'integer' })
  resultMovie: number;

}

