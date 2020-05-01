import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'goldset_data' })
export class GoldsetData extends BaseEntity {
  @Field()
  @Column({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'buy_count', type: 'integer' })
  buyCount: number;

  @Field()
  @Column({ name: 'use_jewel_count', type: 'integer' })
  useJewelCount: number;

  @Field()
  @Column({ name: 'get_gold_count', type: 'integer' })
  getGoldCount: number;

  @Field()
  @Column({ name: 'goldset_odds_1', type: 'integer' })
  goldsetOdds1: number;

  @Field()
  @Column({ name: 'goldset_odds_2', type: 'integer' })
  goldsetOdds2: number;

  @Field()
  @Column({ name: 'goldset_odds_3', type: 'integer' })
  goldsetOdds3: number;

  @Field()
  @Column({ name: 'additional_gold_min_rate', type: 'integer' })
  additionalGoldMinRate: number;

  @Field()
  @Column({ name: 'additional_gold_max_rate', type: 'integer' })
  additionalGoldMaxRate: number;

}

