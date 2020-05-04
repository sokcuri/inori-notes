import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'tower_quest_fix_reward_group' })
export class TowerQuestFixRewardGroup extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'fix_reward_group_id', type: 'integer' })
  fixRewardGroupId: number;

  @Field(type => Int)
  @Column({ name: 'treasure_type_1', type: 'integer' })
  treasureType1: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_1', type: 'integer' })
  rewardType1: number;

  @Field(type => Int)
  @Column({ name: 'reward_id_1', type: 'integer' })
  rewardId1: number;

  @Field(type => Int)
  @Column({ name: 'reward_num_1', type: 'integer' })
  rewardNum1: number;

  @Field(type => Int)
  @Column({ name: 'treasure_type_2', type: 'integer' })
  treasureType2: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_2', type: 'integer' })
  rewardType2: number;

  @Field(type => Int)
  @Column({ name: 'reward_id_2', type: 'integer' })
  rewardId2: number;

  @Field(type => Int)
  @Column({ name: 'reward_num_2', type: 'integer' })
  rewardNum2: number;

  @Field(type => Int)
  @Column({ name: 'treasure_type_3', type: 'integer' })
  treasureType3: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_3', type: 'integer' })
  rewardType3: number;

  @Field(type => Int)
  @Column({ name: 'reward_id_3', type: 'integer' })
  rewardId3: number;

  @Field(type => Int)
  @Column({ name: 'reward_num_3', type: 'integer' })
  rewardNum3: number;

  @Field(type => Int)
  @Column({ name: 'treasure_type_4', type: 'integer' })
  treasureType4: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_4', type: 'integer' })
  rewardType4: number;

  @Field(type => Int)
  @Column({ name: 'reward_id_4', type: 'integer' })
  rewardId4: number;

  @Field(type => Int)
  @Column({ name: 'reward_num_4', type: 'integer' })
  rewardNum4: number;

  @Field(type => Int)
  @Column({ name: 'treasure_type_5', type: 'integer' })
  treasureType5: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_5', type: 'integer' })
  rewardType5: number;

  @Field(type => Int)
  @Column({ name: 'reward_id_5', type: 'integer' })
  rewardId5: number;

  @Field(type => Int)
  @Column({ name: 'reward_num_5', type: 'integer' })
  rewardNum5: number;

  @Field(type => Int)
  @Column({ name: 'treasure_type_6', type: 'integer' })
  treasureType6: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_6', type: 'integer' })
  rewardType6: number;

  @Field(type => Int)
  @Column({ name: 'reward_id_6', type: 'integer' })
  rewardId6: number;

  @Field(type => Int)
  @Column({ name: 'reward_num_6', type: 'integer' })
  rewardNum6: number;

  @Field(type => Int)
  @Column({ name: 'treasure_type_7', type: 'integer' })
  treasureType7: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_7', type: 'integer' })
  rewardType7: number;

  @Field(type => Int)
  @Column({ name: 'reward_id_7', type: 'integer' })
  rewardId7: number;

  @Field(type => Int)
  @Column({ name: 'reward_num_7', type: 'integer' })
  rewardNum7: number;

  @Field(type => Int)
  @Column({ name: 'treasure_type_8', type: 'integer' })
  treasureType8: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_8', type: 'integer' })
  rewardType8: number;

  @Field(type => Int)
  @Column({ name: 'reward_id_8', type: 'integer' })
  rewardId8: number;

  @Field(type => Int)
  @Column({ name: 'reward_num_8', type: 'integer' })
  rewardNum8: number;

  @Field(type => Int)
  @Column({ name: 'treasure_type_9', type: 'integer' })
  treasureType9: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_9', type: 'integer' })
  rewardType9: number;

  @Field(type => Int)
  @Column({ name: 'reward_id_9', type: 'integer' })
  rewardId9: number;

  @Field(type => Int)
  @Column({ name: 'reward_num_9', type: 'integer' })
  rewardNum9: number;

  @Field(type => Int)
  @Column({ name: 'treasure_type_10', type: 'integer' })
  treasureType10: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_10', type: 'integer' })
  rewardType10: number;

  @Field(type => Int)
  @Column({ name: 'reward_id_10', type: 'integer' })
  rewardId10: number;

  @Field(type => Int)
  @Column({ name: 'reward_num_10', type: 'integer' })
  rewardNum10: number;

  @Field(type => [Int])
  get treasureType() {
    return [this.treasureType1, this.treasureType2, this.treasureType3, this.treasureType4, this.treasureType5, this.treasureType6, this.treasureType7, this.treasureType8, this.treasureType9, this.treasureType10];
  }

  @Field(type => [Int])
  get rewardType() {
    return [this.rewardType1, this.rewardType2, this.rewardType3, this.rewardType4, this.rewardType5, this.rewardType6, this.rewardType7, this.rewardType8, this.rewardType9, this.rewardType10];
  }

  @Field(type => [Int])
  get rewardId() {
    return [this.rewardId1, this.rewardId2, this.rewardId3, this.rewardId4, this.rewardId5, this.rewardId6, this.rewardId7, this.rewardId8, this.rewardId9, this.rewardId10];
  }

  @Field(type => [Int])
  get rewardNum() {
    return [this.rewardNum1, this.rewardNum2, this.rewardNum3, this.rewardNum4, this.rewardNum5, this.rewardNum6, this.rewardNum7, this.rewardNum8, this.rewardNum9, this.rewardNum10];
  }

}

