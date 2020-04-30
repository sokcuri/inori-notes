import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'fix_lineup_group_set' })
export class FixLineupGroupSet extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'lineup_group_set_id', type: 'integer' })
  lineupGroupSetId: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'team_level_from', type: 'integer' })
  teamLevelFrom: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'team_level_to', type: 'integer' })
  teamLevelTo: number;

  @Field()
  @Column({ name: 'reward_type_1', type: 'integer' })
  rewardType1: number;

  @Field()
  @Column({ name: 'reward_id_1', type: 'integer' })
  rewardId1: number;

  @Field()
  @Column({ name: 'reward_count_1', type: 'integer' })
  rewardCount1: number;

  @Field()
  @Column({ name: 'price_type_1', type: 'integer' })
  priceType1: number;

  @Field()
  @Column({ name: 'currency_id_1', type: 'integer' })
  currencyId1: number;

  @Field()
  @Column({ name: 'price_1', type: 'integer' })
  price1: number;

  @Field()
  @Column({ name: 'reward_type_2', type: 'integer' })
  rewardType2: number;

  @Field()
  @Column({ name: 'reward_id_2', type: 'integer' })
  rewardId2: number;

  @Field()
  @Column({ name: 'reward_count_2', type: 'integer' })
  rewardCount2: number;

  @Field()
  @Column({ name: 'price_type_2', type: 'integer' })
  priceType2: number;

  @Field()
  @Column({ name: 'currency_id_2', type: 'integer' })
  currencyId2: number;

  @Field()
  @Column({ name: 'price_2', type: 'integer' })
  price2: number;

  @Field()
  @Column({ name: 'reward_type_3', type: 'integer' })
  rewardType3: number;

  @Field()
  @Column({ name: 'reward_id_3', type: 'integer' })
  rewardId3: number;

  @Field()
  @Column({ name: 'reward_count_3', type: 'integer' })
  rewardCount3: number;

  @Field()
  @Column({ name: 'price_type_3', type: 'integer' })
  priceType3: number;

  @Field()
  @Column({ name: 'currency_id_3', type: 'integer' })
  currencyId3: number;

  @Field()
  @Column({ name: 'price_3', type: 'integer' })
  price3: number;

  @Field()
  @Column({ name: 'reward_type_4', type: 'integer' })
  rewardType4: number;

  @Field()
  @Column({ name: 'reward_id_4', type: 'integer' })
  rewardId4: number;

  @Field()
  @Column({ name: 'reward_count_4', type: 'integer' })
  rewardCount4: number;

  @Field()
  @Column({ name: 'price_type_4', type: 'integer' })
  priceType4: number;

  @Field()
  @Column({ name: 'currency_id_4', type: 'integer' })
  currencyId4: number;

  @Field()
  @Column({ name: 'price_4', type: 'integer' })
  price4: number;

  @Field()
  @Column({ name: 'reward_type_5', type: 'integer' })
  rewardType5: number;

  @Field()
  @Column({ name: 'reward_id_5', type: 'integer' })
  rewardId5: number;

  @Field()
  @Column({ name: 'reward_count_5', type: 'integer' })
  rewardCount5: number;

  @Field()
  @Column({ name: 'price_type_5', type: 'integer' })
  priceType5: number;

  @Field()
  @Column({ name: 'currency_id_5', type: 'integer' })
  currencyId5: number;

  @Field()
  @Column({ name: 'price_5', type: 'integer' })
  price5: number;

  @Field()
  @Column({ name: 'reward_type_6', type: 'integer' })
  rewardType6: number;

  @Field()
  @Column({ name: 'reward_id_6', type: 'integer' })
  rewardId6: number;

  @Field()
  @Column({ name: 'reward_count_6', type: 'integer' })
  rewardCount6: number;

  @Field()
  @Column({ name: 'price_type_6', type: 'integer' })
  priceType6: number;

  @Field()
  @Column({ name: 'currency_id_6', type: 'integer' })
  currencyId6: number;

  @Field()
  @Column({ name: 'price_6', type: 'integer' })
  price6: number;

  @Field()
  @Column({ name: 'reward_type_7', type: 'integer' })
  rewardType7: number;

  @Field()
  @Column({ name: 'reward_id_7', type: 'integer' })
  rewardId7: number;

  @Field()
  @Column({ name: 'reward_count_7', type: 'integer' })
  rewardCount7: number;

  @Field()
  @Column({ name: 'price_type_7', type: 'integer' })
  priceType7: number;

  @Field()
  @Column({ name: 'currency_id_7', type: 'integer' })
  currencyId7: number;

  @Field()
  @Column({ name: 'price_7', type: 'integer' })
  price7: number;

  @Field()
  @Column({ name: 'reward_type_8', type: 'integer' })
  rewardType8: number;

  @Field()
  @Column({ name: 'reward_id_8', type: 'integer' })
  rewardId8: number;

  @Field()
  @Column({ name: 'reward_count_8', type: 'integer' })
  rewardCount8: number;

  @Field()
  @Column({ name: 'price_type_8', type: 'integer' })
  priceType8: number;

  @Field()
  @Column({ name: 'currency_id_8', type: 'integer' })
  currencyId8: number;

  @Field()
  @Column({ name: 'price_8', type: 'integer' })
  price8: number;

  @Field()
  @Column({ name: 'reward_type_9', type: 'integer' })
  rewardType9: number;

  @Field()
  @Column({ name: 'reward_id_9', type: 'integer' })
  rewardId9: number;

  @Field()
  @Column({ name: 'reward_count_9', type: 'integer' })
  rewardCount9: number;

  @Field()
  @Column({ name: 'price_type_9', type: 'integer' })
  priceType9: number;

  @Field()
  @Column({ name: 'currency_id_9', type: 'integer' })
  currencyId9: number;

  @Field()
  @Column({ name: 'price_9', type: 'integer' })
  price9: number;

  @Field()
  @Column({ name: 'reward_type_10', type: 'integer' })
  rewardType10: number;

  @Field()
  @Column({ name: 'reward_id_10', type: 'integer' })
  rewardId10: number;

  @Field()
  @Column({ name: 'reward_count_10', type: 'integer' })
  rewardCount10: number;

  @Field()
  @Column({ name: 'price_type_10', type: 'integer' })
  priceType10: number;

  @Field()
  @Column({ name: 'currency_id_10', type: 'integer' })
  currencyId10: number;

  @Field()
  @Column({ name: 'price_10', type: 'integer' })
  price10: number;

  @Field()
  @Column({ name: 'reward_type_11', type: 'integer' })
  rewardType11: number;

  @Field()
  @Column({ name: 'reward_id_11', type: 'integer' })
  rewardId11: number;

  @Field()
  @Column({ name: 'reward_count_11', type: 'integer' })
  rewardCount11: number;

  @Field()
  @Column({ name: 'price_type_11', type: 'integer' })
  priceType11: number;

  @Field()
  @Column({ name: 'currency_id_11', type: 'integer' })
  currencyId11: number;

  @Field()
  @Column({ name: 'price_11', type: 'integer' })
  price11: number;

  @Field()
  @Column({ name: 'reward_type_12', type: 'integer' })
  rewardType12: number;

  @Field()
  @Column({ name: 'reward_id_12', type: 'integer' })
  rewardId12: number;

  @Field()
  @Column({ name: 'reward_count_12', type: 'integer' })
  rewardCount12: number;

  @Field()
  @Column({ name: 'price_type_12', type: 'integer' })
  priceType12: number;

  @Field()
  @Column({ name: 'currency_id_12', type: 'integer' })
  currencyId12: number;

  @Field()
  @Column({ name: 'price_12', type: 'integer' })
  price12: number;

  @Field()
  @Column({ name: 'reward_type_13', type: 'integer' })
  rewardType13: number;

  @Field()
  @Column({ name: 'reward_id_13', type: 'integer' })
  rewardId13: number;

  @Field()
  @Column({ name: 'reward_count_13', type: 'integer' })
  rewardCount13: number;

  @Field()
  @Column({ name: 'price_type_13', type: 'integer' })
  priceType13: number;

  @Field()
  @Column({ name: 'currency_id_13', type: 'integer' })
  currencyId13: number;

  @Field()
  @Column({ name: 'price_13', type: 'integer' })
  price13: number;

  @Field()
  @Column({ name: 'reward_type_14', type: 'integer' })
  rewardType14: number;

  @Field()
  @Column({ name: 'reward_id_14', type: 'integer' })
  rewardId14: number;

  @Field()
  @Column({ name: 'reward_count_14', type: 'integer' })
  rewardCount14: number;

  @Field()
  @Column({ name: 'price_type_14', type: 'integer' })
  priceType14: number;

  @Field()
  @Column({ name: 'currency_id_14', type: 'integer' })
  currencyId14: number;

  @Field()
  @Column({ name: 'price_14', type: 'integer' })
  price14: number;

  @Field()
  @Column({ name: 'reward_type_15', type: 'integer' })
  rewardType15: number;

  @Field()
  @Column({ name: 'reward_id_15', type: 'integer' })
  rewardId15: number;

  @Field()
  @Column({ name: 'reward_count_15', type: 'integer' })
  rewardCount15: number;

  @Field()
  @Column({ name: 'price_type_15', type: 'integer' })
  priceType15: number;

  @Field()
  @Column({ name: 'currency_id_15', type: 'integer' })
  currencyId15: number;

  @Field()
  @Column({ name: 'price_15', type: 'integer' })
  price15: number;

  @Field()
  @Column({ name: 'reward_type_16', type: 'integer' })
  rewardType16: number;

  @Field()
  @Column({ name: 'reward_id_16', type: 'integer' })
  rewardId16: number;

  @Field()
  @Column({ name: 'reward_count_16', type: 'integer' })
  rewardCount16: number;

  @Field()
  @Column({ name: 'price_type_16', type: 'integer' })
  priceType16: number;

  @Field()
  @Column({ name: 'currency_id_16', type: 'integer' })
  currencyId16: number;

  @Field()
  @Column({ name: 'price_16', type: 'integer' })
  price16: number;

  @Field()
  @Column({ name: 'reward_type_17', type: 'integer' })
  rewardType17: number;

  @Field()
  @Column({ name: 'reward_id_17', type: 'integer' })
  rewardId17: number;

  @Field()
  @Column({ name: 'reward_count_17', type: 'integer' })
  rewardCount17: number;

  @Field()
  @Column({ name: 'price_type_17', type: 'integer' })
  priceType17: number;

  @Field()
  @Column({ name: 'currency_id_17', type: 'integer' })
  currencyId17: number;

  @Field()
  @Column({ name: 'price_17', type: 'integer' })
  price17: number;

  @Field()
  @Column({ name: 'reward_type_18', type: 'integer' })
  rewardType18: number;

  @Field()
  @Column({ name: 'reward_id_18', type: 'integer' })
  rewardId18: number;

  @Field()
  @Column({ name: 'reward_count_18', type: 'integer' })
  rewardCount18: number;

  @Field()
  @Column({ name: 'price_type_18', type: 'integer' })
  priceType18: number;

  @Field()
  @Column({ name: 'currency_id_18', type: 'integer' })
  currencyId18: number;

  @Field()
  @Column({ name: 'price_18', type: 'integer' })
  price18: number;

  @Field()
  @Column({ name: 'reward_type_19', type: 'integer' })
  rewardType19: number;

  @Field()
  @Column({ name: 'reward_id_19', type: 'integer' })
  rewardId19: number;

  @Field()
  @Column({ name: 'reward_count_19', type: 'integer' })
  rewardCount19: number;

  @Field()
  @Column({ name: 'price_type_19', type: 'integer' })
  priceType19: number;

  @Field()
  @Column({ name: 'currency_id_19', type: 'integer' })
  currencyId19: number;

  @Field()
  @Column({ name: 'price_19', type: 'integer' })
  price19: number;

  @Field()
  @Column({ name: 'reward_type_20', type: 'integer' })
  rewardType20: number;

  @Field()
  @Column({ name: 'reward_id_20', type: 'integer' })
  rewardId20: number;

  @Field()
  @Column({ name: 'reward_count_20', type: 'integer' })
  rewardCount20: number;

  @Field()
  @Column({ name: 'price_type_20', type: 'integer' })
  priceType20: number;

  @Field()
  @Column({ name: 'currency_id_20', type: 'integer' })
  currencyId20: number;

  @Field()
  @Column({ name: 'price_20', type: 'integer' })
  price20: number;

}

