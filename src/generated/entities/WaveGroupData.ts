import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'wave_group_data' })
export class WaveGroupData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => Int)
  @Column({ name: 'wave_group_id', type: 'integer' })
  waveGroupId: number;

  @Field(type => Int)
  @Column({ name: 'odds', type: 'integer' })
  odds: number;

  @Field(type => Int)
  @Column({ name: 'enemy_id_1', type: 'integer' })
  enemyId1: number;

  @Field(type => Int)
  @Column({ name: 'drop_gold_1', type: 'integer' })
  dropGold1: number;

  @Field(type => Int)
  @Column({ name: 'drop_reward_id_1', type: 'integer' })
  dropRewardId1: number;

  @Field(type => Int)
  @Column({ name: 'enemy_id_2', type: 'integer' })
  enemyId2: number;

  @Field(type => Int)
  @Column({ name: 'drop_gold_2', type: 'integer' })
  dropGold2: number;

  @Field(type => Int)
  @Column({ name: 'drop_reward_id_2', type: 'integer' })
  dropRewardId2: number;

  @Field(type => Int)
  @Column({ name: 'enemy_id_3', type: 'integer' })
  enemyId3: number;

  @Field(type => Int)
  @Column({ name: 'drop_gold_3', type: 'integer' })
  dropGold3: number;

  @Field(type => Int)
  @Column({ name: 'drop_reward_id_3', type: 'integer' })
  dropRewardId3: number;

  @Field(type => Int)
  @Column({ name: 'enemy_id_4', type: 'integer' })
  enemyId4: number;

  @Field(type => Int)
  @Column({ name: 'drop_gold_4', type: 'integer' })
  dropGold4: number;

  @Field(type => Int)
  @Column({ name: 'drop_reward_id_4', type: 'integer' })
  dropRewardId4: number;

  @Field(type => Int)
  @Column({ name: 'enemy_id_5', type: 'integer' })
  enemyId5: number;

  @Field(type => Int)
  @Column({ name: 'drop_gold_5', type: 'integer' })
  dropGold5: number;

  @Field(type => Int)
  @Column({ name: 'drop_reward_id_5', type: 'integer' })
  dropRewardId5: number;

  @Field(type => [Int])
  get enemyId() {
    return [this.enemyId1, this.enemyId2, this.enemyId3, this.enemyId4, this.enemyId5];
  }

  @Field(type => [Int])
  get dropGold() {
    return [this.dropGold1, this.dropGold2, this.dropGold3, this.dropGold4, this.dropGold5];
  }

  @Field(type => [Int])
  get dropRewardId() {
    return [this.dropRewardId1, this.dropRewardId2, this.dropRewardId3, this.dropRewardId4, this.dropRewardId5];
  }

}

