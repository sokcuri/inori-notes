import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'event_boss_treasure_content' })
export class EventBossTreasureContent extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'event_boss_treasure_content_id', type: 'integer' })
  eventBossTreasureContentId: number;

  @Field()
  @Column({ name: 'reward_type_1', type: 'integer' })
  rewardType1: number;

  @Field()
  @Column({ name: 'reward_id_1', type: 'integer' })
  rewardId1: number;

  @Field()
  @Column({ name: 'odds_file_1', type: 'text' })
  oddsFile1: string;

  @Field()
  @Column({ name: 'reward_num_1', type: 'integer' })
  rewardNum1: number;

  @Field()
  @Column({ name: 'odds_1', type: 'integer' })
  odds1: number;

  @Field()
  @Column({ name: 'reward_type_2', type: 'integer' })
  rewardType2: number;

  @Field()
  @Column({ name: 'reward_id_2', type: 'integer' })
  rewardId2: number;

  @Field()
  @Column({ name: 'odds_file_2', type: 'text' })
  oddsFile2: string;

  @Field()
  @Column({ name: 'reward_num_2', type: 'integer' })
  rewardNum2: number;

  @Field()
  @Column({ name: 'odds_2', type: 'integer' })
  odds2: number;

  @Field()
  @Column({ name: 'reward_type_3', type: 'integer' })
  rewardType3: number;

  @Field()
  @Column({ name: 'reward_id_3', type: 'integer' })
  rewardId3: number;

  @Field()
  @Column({ name: 'odds_file_3', type: 'text' })
  oddsFile3: string;

  @Field()
  @Column({ name: 'reward_num_3', type: 'integer' })
  rewardNum3: number;

  @Field()
  @Column({ name: 'odds_3', type: 'integer' })
  odds3: number;

  @Field()
  @Column({ name: 'reward_type_4', type: 'integer' })
  rewardType4: number;

  @Field()
  @Column({ name: 'reward_id_4', type: 'integer' })
  rewardId4: number;

  @Field()
  @Column({ name: 'odds_file_4', type: 'text' })
  oddsFile4: string;

  @Field()
  @Column({ name: 'reward_num_4', type: 'integer' })
  rewardNum4: number;

  @Field()
  @Column({ name: 'odds_4', type: 'integer' })
  odds4: number;

  @Field()
  @Column({ name: 'reward_type_5', type: 'integer' })
  rewardType5: number;

  @Field()
  @Column({ name: 'reward_id_5', type: 'integer' })
  rewardId5: number;

  @Field()
  @Column({ name: 'odds_file_5', type: 'text' })
  oddsFile5: string;

  @Field()
  @Column({ name: 'reward_num_5', type: 'integer' })
  rewardNum5: number;

  @Field()
  @Column({ name: 'odds_5', type: 'integer' })
  odds5: number;

}

