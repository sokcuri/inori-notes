import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

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

  @Field(type => Int)
  @Column({ name: 'reward_type_1', type: 'integer' })
  rewardType1: number;

  @Field(type => Int)
  @Column({ name: 'reward_id_1', type: 'integer' })
  rewardId1: number;

  @Field(type => Int)
  @Column({ name: 'reward_count_1', type: 'integer' })
  rewardCount1: number;

  @Field(type => Int)
  @Column({ name: 'price_type_1', type: 'integer' })
  priceType1: number;

  @Field(type => Int)
  @Column({ name: 'currency_id_1', type: 'integer' })
  currencyId1: number;

  @Field(type => Int)
  @Column({ name: 'price_1', type: 'integer' })
  price1: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_2', type: 'integer' })
  rewardType2: number;

  @Field(type => Int)
  @Column({ name: 'reward_id_2', type: 'integer' })
  rewardId2: number;

  @Field(type => Int)
  @Column({ name: 'reward_count_2', type: 'integer' })
  rewardCount2: number;

  @Field(type => Int)
  @Column({ name: 'price_type_2', type: 'integer' })
  priceType2: number;

  @Field(type => Int)
  @Column({ name: 'currency_id_2', type: 'integer' })
  currencyId2: number;

  @Field(type => Int)
  @Column({ name: 'price_2', type: 'integer' })
  price2: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_3', type: 'integer' })
  rewardType3: number;

  @Field(type => Int)
  @Column({ name: 'reward_id_3', type: 'integer' })
  rewardId3: number;

  @Field(type => Int)
  @Column({ name: 'reward_count_3', type: 'integer' })
  rewardCount3: number;

  @Field(type => Int)
  @Column({ name: 'price_type_3', type: 'integer' })
  priceType3: number;

  @Field(type => Int)
  @Column({ name: 'currency_id_3', type: 'integer' })
  currencyId3: number;

  @Field(type => Int)
  @Column({ name: 'price_3', type: 'integer' })
  price3: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_4', type: 'integer' })
  rewardType4: number;

  @Field(type => Int)
  @Column({ name: 'reward_id_4', type: 'integer' })
  rewardId4: number;

  @Field(type => Int)
  @Column({ name: 'reward_count_4', type: 'integer' })
  rewardCount4: number;

  @Field(type => Int)
  @Column({ name: 'price_type_4', type: 'integer' })
  priceType4: number;

  @Field(type => Int)
  @Column({ name: 'currency_id_4', type: 'integer' })
  currencyId4: number;

  @Field(type => Int)
  @Column({ name: 'price_4', type: 'integer' })
  price4: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_5', type: 'integer' })
  rewardType5: number;

  @Field(type => Int)
  @Column({ name: 'reward_id_5', type: 'integer' })
  rewardId5: number;

  @Field(type => Int)
  @Column({ name: 'reward_count_5', type: 'integer' })
  rewardCount5: number;

  @Field(type => Int)
  @Column({ name: 'price_type_5', type: 'integer' })
  priceType5: number;

  @Field(type => Int)
  @Column({ name: 'currency_id_5', type: 'integer' })
  currencyId5: number;

  @Field(type => Int)
  @Column({ name: 'price_5', type: 'integer' })
  price5: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_6', type: 'integer' })
  rewardType6: number;

  @Field(type => Int)
  @Column({ name: 'reward_id_6', type: 'integer' })
  rewardId6: number;

  @Field(type => Int)
  @Column({ name: 'reward_count_6', type: 'integer' })
  rewardCount6: number;

  @Field(type => Int)
  @Column({ name: 'price_type_6', type: 'integer' })
  priceType6: number;

  @Field(type => Int)
  @Column({ name: 'currency_id_6', type: 'integer' })
  currencyId6: number;

  @Field(type => Int)
  @Column({ name: 'price_6', type: 'integer' })
  price6: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_7', type: 'integer' })
  rewardType7: number;

  @Field(type => Int)
  @Column({ name: 'reward_id_7', type: 'integer' })
  rewardId7: number;

  @Field(type => Int)
  @Column({ name: 'reward_count_7', type: 'integer' })
  rewardCount7: number;

  @Field(type => Int)
  @Column({ name: 'price_type_7', type: 'integer' })
  priceType7: number;

  @Field(type => Int)
  @Column({ name: 'currency_id_7', type: 'integer' })
  currencyId7: number;

  @Field(type => Int)
  @Column({ name: 'price_7', type: 'integer' })
  price7: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_8', type: 'integer' })
  rewardType8: number;

  @Field(type => Int)
  @Column({ name: 'reward_id_8', type: 'integer' })
  rewardId8: number;

  @Field(type => Int)
  @Column({ name: 'reward_count_8', type: 'integer' })
  rewardCount8: number;

  @Field(type => Int)
  @Column({ name: 'price_type_8', type: 'integer' })
  priceType8: number;

  @Field(type => Int)
  @Column({ name: 'currency_id_8', type: 'integer' })
  currencyId8: number;

  @Field(type => Int)
  @Column({ name: 'price_8', type: 'integer' })
  price8: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_9', type: 'integer' })
  rewardType9: number;

  @Field(type => Int)
  @Column({ name: 'reward_id_9', type: 'integer' })
  rewardId9: number;

  @Field(type => Int)
  @Column({ name: 'reward_count_9', type: 'integer' })
  rewardCount9: number;

  @Field(type => Int)
  @Column({ name: 'price_type_9', type: 'integer' })
  priceType9: number;

  @Field(type => Int)
  @Column({ name: 'currency_id_9', type: 'integer' })
  currencyId9: number;

  @Field(type => Int)
  @Column({ name: 'price_9', type: 'integer' })
  price9: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_10', type: 'integer' })
  rewardType10: number;

  @Field(type => Int)
  @Column({ name: 'reward_id_10', type: 'integer' })
  rewardId10: number;

  @Field(type => Int)
  @Column({ name: 'reward_count_10', type: 'integer' })
  rewardCount10: number;

  @Field(type => Int)
  @Column({ name: 'price_type_10', type: 'integer' })
  priceType10: number;

  @Field(type => Int)
  @Column({ name: 'currency_id_10', type: 'integer' })
  currencyId10: number;

  @Field(type => Int)
  @Column({ name: 'price_10', type: 'integer' })
  price10: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_11', type: 'integer' })
  rewardType11: number;

  @Field(type => Int)
  @Column({ name: 'reward_id_11', type: 'integer' })
  rewardId11: number;

  @Field(type => Int)
  @Column({ name: 'reward_count_11', type: 'integer' })
  rewardCount11: number;

  @Field(type => Int)
  @Column({ name: 'price_type_11', type: 'integer' })
  priceType11: number;

  @Field(type => Int)
  @Column({ name: 'currency_id_11', type: 'integer' })
  currencyId11: number;

  @Field(type => Int)
  @Column({ name: 'price_11', type: 'integer' })
  price11: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_12', type: 'integer' })
  rewardType12: number;

  @Field(type => Int)
  @Column({ name: 'reward_id_12', type: 'integer' })
  rewardId12: number;

  @Field(type => Int)
  @Column({ name: 'reward_count_12', type: 'integer' })
  rewardCount12: number;

  @Field(type => Int)
  @Column({ name: 'price_type_12', type: 'integer' })
  priceType12: number;

  @Field(type => Int)
  @Column({ name: 'currency_id_12', type: 'integer' })
  currencyId12: number;

  @Field(type => Int)
  @Column({ name: 'price_12', type: 'integer' })
  price12: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_13', type: 'integer' })
  rewardType13: number;

  @Field(type => Int)
  @Column({ name: 'reward_id_13', type: 'integer' })
  rewardId13: number;

  @Field(type => Int)
  @Column({ name: 'reward_count_13', type: 'integer' })
  rewardCount13: number;

  @Field(type => Int)
  @Column({ name: 'price_type_13', type: 'integer' })
  priceType13: number;

  @Field(type => Int)
  @Column({ name: 'currency_id_13', type: 'integer' })
  currencyId13: number;

  @Field(type => Int)
  @Column({ name: 'price_13', type: 'integer' })
  price13: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_14', type: 'integer' })
  rewardType14: number;

  @Field(type => Int)
  @Column({ name: 'reward_id_14', type: 'integer' })
  rewardId14: number;

  @Field(type => Int)
  @Column({ name: 'reward_count_14', type: 'integer' })
  rewardCount14: number;

  @Field(type => Int)
  @Column({ name: 'price_type_14', type: 'integer' })
  priceType14: number;

  @Field(type => Int)
  @Column({ name: 'currency_id_14', type: 'integer' })
  currencyId14: number;

  @Field(type => Int)
  @Column({ name: 'price_14', type: 'integer' })
  price14: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_15', type: 'integer' })
  rewardType15: number;

  @Field(type => Int)
  @Column({ name: 'reward_id_15', type: 'integer' })
  rewardId15: number;

  @Field(type => Int)
  @Column({ name: 'reward_count_15', type: 'integer' })
  rewardCount15: number;

  @Field(type => Int)
  @Column({ name: 'price_type_15', type: 'integer' })
  priceType15: number;

  @Field(type => Int)
  @Column({ name: 'currency_id_15', type: 'integer' })
  currencyId15: number;

  @Field(type => Int)
  @Column({ name: 'price_15', type: 'integer' })
  price15: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_16', type: 'integer' })
  rewardType16: number;

  @Field(type => Int)
  @Column({ name: 'reward_id_16', type: 'integer' })
  rewardId16: number;

  @Field(type => Int)
  @Column({ name: 'reward_count_16', type: 'integer' })
  rewardCount16: number;

  @Field(type => Int)
  @Column({ name: 'price_type_16', type: 'integer' })
  priceType16: number;

  @Field(type => Int)
  @Column({ name: 'currency_id_16', type: 'integer' })
  currencyId16: number;

  @Field(type => Int)
  @Column({ name: 'price_16', type: 'integer' })
  price16: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_17', type: 'integer' })
  rewardType17: number;

  @Field(type => Int)
  @Column({ name: 'reward_id_17', type: 'integer' })
  rewardId17: number;

  @Field(type => Int)
  @Column({ name: 'reward_count_17', type: 'integer' })
  rewardCount17: number;

  @Field(type => Int)
  @Column({ name: 'price_type_17', type: 'integer' })
  priceType17: number;

  @Field(type => Int)
  @Column({ name: 'currency_id_17', type: 'integer' })
  currencyId17: number;

  @Field(type => Int)
  @Column({ name: 'price_17', type: 'integer' })
  price17: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_18', type: 'integer' })
  rewardType18: number;

  @Field(type => Int)
  @Column({ name: 'reward_id_18', type: 'integer' })
  rewardId18: number;

  @Field(type => Int)
  @Column({ name: 'reward_count_18', type: 'integer' })
  rewardCount18: number;

  @Field(type => Int)
  @Column({ name: 'price_type_18', type: 'integer' })
  priceType18: number;

  @Field(type => Int)
  @Column({ name: 'currency_id_18', type: 'integer' })
  currencyId18: number;

  @Field(type => Int)
  @Column({ name: 'price_18', type: 'integer' })
  price18: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_19', type: 'integer' })
  rewardType19: number;

  @Field(type => Int)
  @Column({ name: 'reward_id_19', type: 'integer' })
  rewardId19: number;

  @Field(type => Int)
  @Column({ name: 'reward_count_19', type: 'integer' })
  rewardCount19: number;

  @Field(type => Int)
  @Column({ name: 'price_type_19', type: 'integer' })
  priceType19: number;

  @Field(type => Int)
  @Column({ name: 'currency_id_19', type: 'integer' })
  currencyId19: number;

  @Field(type => Int)
  @Column({ name: 'price_19', type: 'integer' })
  price19: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_20', type: 'integer' })
  rewardType20: number;

  @Field(type => Int)
  @Column({ name: 'reward_id_20', type: 'integer' })
  rewardId20: number;

  @Field(type => Int)
  @Column({ name: 'reward_count_20', type: 'integer' })
  rewardCount20: number;

  @Field(type => Int)
  @Column({ name: 'price_type_20', type: 'integer' })
  priceType20: number;

  @Field(type => Int)
  @Column({ name: 'currency_id_20', type: 'integer' })
  currencyId20: number;

  @Field(type => Int)
  @Column({ name: 'price_20', type: 'integer' })
  price20: number;

  @Field(type => [Int])
  get rewardType() {
    return [this.rewardType1, this.rewardType2, this.rewardType3, this.rewardType4, this.rewardType5, this.rewardType6, this.rewardType7, this.rewardType8, this.rewardType9, this.rewardType10, this.rewardType11, this.rewardType12, this.rewardType13, this.rewardType14, this.rewardType15, this.rewardType16, this.rewardType17, this.rewardType18, this.rewardType19, this.rewardType20];
  }

  @Field(type => [Int])
  get rewardId() {
    return [this.rewardId1, this.rewardId2, this.rewardId3, this.rewardId4, this.rewardId5, this.rewardId6, this.rewardId7, this.rewardId8, this.rewardId9, this.rewardId10, this.rewardId11, this.rewardId12, this.rewardId13, this.rewardId14, this.rewardId15, this.rewardId16, this.rewardId17, this.rewardId18, this.rewardId19, this.rewardId20];
  }

  @Field(type => [Int])
  get rewardCount() {
    return [this.rewardCount1, this.rewardCount2, this.rewardCount3, this.rewardCount4, this.rewardCount5, this.rewardCount6, this.rewardCount7, this.rewardCount8, this.rewardCount9, this.rewardCount10, this.rewardCount11, this.rewardCount12, this.rewardCount13, this.rewardCount14, this.rewardCount15, this.rewardCount16, this.rewardCount17, this.rewardCount18, this.rewardCount19, this.rewardCount20];
  }

  @Field(type => [Int])
  get priceType() {
    return [this.priceType1, this.priceType2, this.priceType3, this.priceType4, this.priceType5, this.priceType6, this.priceType7, this.priceType8, this.priceType9, this.priceType10, this.priceType11, this.priceType12, this.priceType13, this.priceType14, this.priceType15, this.priceType16, this.priceType17, this.priceType18, this.priceType19, this.priceType20];
  }

  @Field(type => [Int])
  get currencyId() {
    return [this.currencyId1, this.currencyId2, this.currencyId3, this.currencyId4, this.currencyId5, this.currencyId6, this.currencyId7, this.currencyId8, this.currencyId9, this.currencyId10, this.currencyId11, this.currencyId12, this.currencyId13, this.currencyId14, this.currencyId15, this.currencyId16, this.currencyId17, this.currencyId18, this.currencyId19, this.currencyId20];
  }

  @Field(type => [Int])
  get price() {
    return [this.price1, this.price2, this.price3, this.price4, this.price5, this.price6, this.price7, this.price8, this.price9, this.price10, this.price11, this.price12, this.price13, this.price14, this.price15, this.price16, this.price17, this.price18, this.price19, this.price20];
  }

}

