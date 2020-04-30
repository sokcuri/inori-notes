import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'clan_battle_boss_damage_rank' })
export class ClanBattleBossDamageRank extends BaseEntity {
  @Field()
  @Column({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'damage_rank_id', type: 'integer' })
  damageRankId: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'ranking_from', type: 'integer' })
  rankingFrom: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'ranking_to', type: 'integer' })
  rankingTo: number;

  @Field()
  @Column({ name: 'odds_group_id', type: 'integer' })
  oddsGroupId: number;

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

}

