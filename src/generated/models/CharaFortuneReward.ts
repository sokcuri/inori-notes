import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'chara_fortune_reward' })
export class CharaFortuneReward extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field()
  @Column({ name: 'fortune_id', type: 'integer' })
  fortuneId: number;

  @Field()
  @Column({ name: 'rank', type: 'integer' })
  rank: number;

  @Field()
  @Column({ name: 'reward_type_1', type: 'integer' })
  rewardType1: number;

  @Field()
  @Column({ name: 'reward_id_1', type: 'integer' })
  rewardId1: number;

  @Field()
  @Column({ name: 'count_1', type: 'integer' })
  count1: number;

  @Field()
  @Column({ name: 'reward_type_2', type: 'integer' })
  rewardType2: number;

  @Field()
  @Column({ name: 'reward_id_2', type: 'integer' })
  rewardId2: number;

  @Field()
  @Column({ name: 'count_2', type: 'integer' })
  count2: number;

  @Field()
  @Column({ name: 'reward_type_3', type: 'integer' })
  rewardType3: number;

  @Field()
  @Column({ name: 'reward_id_3', type: 'integer' })
  rewardId3: number;

  @Field()
  @Column({ name: 'count_3', type: 'integer' })
  count3: number;

  @Field()
  @Column({ name: 'reward_type_4', type: 'integer' })
  rewardType4: number;

  @Field()
  @Column({ name: 'reward_id_4', type: 'integer' })
  rewardId4: number;

  @Field()
  @Column({ name: 'count_4', type: 'integer' })
  count4: number;

  @Field()
  @Column({ name: 'reward_type_5', type: 'integer' })
  rewardType5: number;

  @Field()
  @Column({ name: 'reward_id_5', type: 'integer' })
  rewardId5: number;

  @Field()
  @Column({ name: 'count_5', type: 'integer' })
  count5: number;

}

