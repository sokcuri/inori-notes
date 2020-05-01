import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'goldset_data_2' })
export class GoldsetData2 extends BaseEntity {
  @Field(type => Int)
  @Column({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'buy_count', type: 'integer' })
  buyCount: number;

  @Field(type => Int)
  @Column({ name: 'use_jewel_count', type: 'integer' })
  useJewelCount: number;

  @Field(type => Int)
  @Column({ name: 'get_gold_count', type: 'integer' })
  getGoldCount: number;

  @Field(type => Int)
  @Column({ name: 'goldset_odds_1', type: 'integer' })
  goldsetOdds1: number;

  @Field(type => Int)
  @Column({ name: 'goldset_odds_2', type: 'integer' })
  goldsetOdds2: number;

  @Field(type => Int)
  @Column({ name: 'goldset_odds_3', type: 'integer' })
  goldsetOdds3: number;

  @Field(type => Int)
  @Column({ name: 'additional_gold_min_rate', type: 'integer' })
  additionalGoldMinRate: number;

  @Field(type => Int)
  @Column({ name: 'additional_gold_max_rate', type: 'integer' })
  additionalGoldMaxRate: number;

  @Field(type => Int)
  @Column({ name: 'training_quest_count', type: 'integer' })
  trainingQuestCount: number;

}

