import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'fix_lineup_group_set' })
export class FixLineupGroupSet extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  lineup_group_set_id: number;

  @Field(type => ID)
  @PrimaryColumn('integer')
  team_level_from: number;

  @Field(type => ID)
  @PrimaryColumn('integer')
  team_level_to: number;

  @Field()
  @Column('integer')
  reward_type_1: number;

  @Field()
  @Column('integer')
  reward_id_1: number;

  @Field()
  @Column('integer')
  reward_count_1: number;

  @Field()
  @Column('integer')
  price_type_1: number;

  @Field()
  @Column('integer')
  currency_id_1: number;

  @Field()
  @Column('integer')
  price_1: number;

  @Field()
  @Column('integer')
  reward_type_2: number;

  @Field()
  @Column('integer')
  reward_id_2: number;

  @Field()
  @Column('integer')
  reward_count_2: number;

  @Field()
  @Column('integer')
  price_type_2: number;

  @Field()
  @Column('integer')
  currency_id_2: number;

  @Field()
  @Column('integer')
  price_2: number;

  @Field()
  @Column('integer')
  reward_type_3: number;

  @Field()
  @Column('integer')
  reward_id_3: number;

  @Field()
  @Column('integer')
  reward_count_3: number;

  @Field()
  @Column('integer')
  price_type_3: number;

  @Field()
  @Column('integer')
  currency_id_3: number;

  @Field()
  @Column('integer')
  price_3: number;

  @Field()
  @Column('integer')
  reward_type_4: number;

  @Field()
  @Column('integer')
  reward_id_4: number;

  @Field()
  @Column('integer')
  reward_count_4: number;

  @Field()
  @Column('integer')
  price_type_4: number;

  @Field()
  @Column('integer')
  currency_id_4: number;

  @Field()
  @Column('integer')
  price_4: number;

  @Field()
  @Column('integer')
  reward_type_5: number;

  @Field()
  @Column('integer')
  reward_id_5: number;

  @Field()
  @Column('integer')
  reward_count_5: number;

  @Field()
  @Column('integer')
  price_type_5: number;

  @Field()
  @Column('integer')
  currency_id_5: number;

  @Field()
  @Column('integer')
  price_5: number;

  @Field()
  @Column('integer')
  reward_type_6: number;

  @Field()
  @Column('integer')
  reward_id_6: number;

  @Field()
  @Column('integer')
  reward_count_6: number;

  @Field()
  @Column('integer')
  price_type_6: number;

  @Field()
  @Column('integer')
  currency_id_6: number;

  @Field()
  @Column('integer')
  price_6: number;

  @Field()
  @Column('integer')
  reward_type_7: number;

  @Field()
  @Column('integer')
  reward_id_7: number;

  @Field()
  @Column('integer')
  reward_count_7: number;

  @Field()
  @Column('integer')
  price_type_7: number;

  @Field()
  @Column('integer')
  currency_id_7: number;

  @Field()
  @Column('integer')
  price_7: number;

  @Field()
  @Column('integer')
  reward_type_8: number;

  @Field()
  @Column('integer')
  reward_id_8: number;

  @Field()
  @Column('integer')
  reward_count_8: number;

  @Field()
  @Column('integer')
  price_type_8: number;

  @Field()
  @Column('integer')
  currency_id_8: number;

  @Field()
  @Column('integer')
  price_8: number;

  @Field()
  @Column('integer')
  reward_type_9: number;

  @Field()
  @Column('integer')
  reward_id_9: number;

  @Field()
  @Column('integer')
  reward_count_9: number;

  @Field()
  @Column('integer')
  price_type_9: number;

  @Field()
  @Column('integer')
  currency_id_9: number;

  @Field()
  @Column('integer')
  price_9: number;

  @Field()
  @Column('integer')
  reward_type_10: number;

  @Field()
  @Column('integer')
  reward_id_10: number;

  @Field()
  @Column('integer')
  reward_count_10: number;

  @Field()
  @Column('integer')
  price_type_10: number;

  @Field()
  @Column('integer')
  currency_id_10: number;

  @Field()
  @Column('integer')
  price_10: number;

  @Field()
  @Column('integer')
  reward_type_11: number;

  @Field()
  @Column('integer')
  reward_id_11: number;

  @Field()
  @Column('integer')
  reward_count_11: number;

  @Field()
  @Column('integer')
  price_type_11: number;

  @Field()
  @Column('integer')
  currency_id_11: number;

  @Field()
  @Column('integer')
  price_11: number;

  @Field()
  @Column('integer')
  reward_type_12: number;

  @Field()
  @Column('integer')
  reward_id_12: number;

  @Field()
  @Column('integer')
  reward_count_12: number;

  @Field()
  @Column('integer')
  price_type_12: number;

  @Field()
  @Column('integer')
  currency_id_12: number;

  @Field()
  @Column('integer')
  price_12: number;

  @Field()
  @Column('integer')
  reward_type_13: number;

  @Field()
  @Column('integer')
  reward_id_13: number;

  @Field()
  @Column('integer')
  reward_count_13: number;

  @Field()
  @Column('integer')
  price_type_13: number;

  @Field()
  @Column('integer')
  currency_id_13: number;

  @Field()
  @Column('integer')
  price_13: number;

  @Field()
  @Column('integer')
  reward_type_14: number;

  @Field()
  @Column('integer')
  reward_id_14: number;

  @Field()
  @Column('integer')
  reward_count_14: number;

  @Field()
  @Column('integer')
  price_type_14: number;

  @Field()
  @Column('integer')
  currency_id_14: number;

  @Field()
  @Column('integer')
  price_14: number;

  @Field()
  @Column('integer')
  reward_type_15: number;

  @Field()
  @Column('integer')
  reward_id_15: number;

  @Field()
  @Column('integer')
  reward_count_15: number;

  @Field()
  @Column('integer')
  price_type_15: number;

  @Field()
  @Column('integer')
  currency_id_15: number;

  @Field()
  @Column('integer')
  price_15: number;

  @Field()
  @Column('integer')
  reward_type_16: number;

  @Field()
  @Column('integer')
  reward_id_16: number;

  @Field()
  @Column('integer')
  reward_count_16: number;

  @Field()
  @Column('integer')
  price_type_16: number;

  @Field()
  @Column('integer')
  currency_id_16: number;

  @Field()
  @Column('integer')
  price_16: number;

  @Field()
  @Column('integer')
  reward_type_17: number;

  @Field()
  @Column('integer')
  reward_id_17: number;

  @Field()
  @Column('integer')
  reward_count_17: number;

  @Field()
  @Column('integer')
  price_type_17: number;

  @Field()
  @Column('integer')
  currency_id_17: number;

  @Field()
  @Column('integer')
  price_17: number;

  @Field()
  @Column('integer')
  reward_type_18: number;

  @Field()
  @Column('integer')
  reward_id_18: number;

  @Field()
  @Column('integer')
  reward_count_18: number;

  @Field()
  @Column('integer')
  price_type_18: number;

  @Field()
  @Column('integer')
  currency_id_18: number;

  @Field()
  @Column('integer')
  price_18: number;

  @Field()
  @Column('integer')
  reward_type_19: number;

  @Field()
  @Column('integer')
  reward_id_19: number;

  @Field()
  @Column('integer')
  reward_count_19: number;

  @Field()
  @Column('integer')
  price_type_19: number;

  @Field()
  @Column('integer')
  currency_id_19: number;

  @Field()
  @Column('integer')
  price_19: number;

  @Field()
  @Column('integer')
  reward_type_20: number;

  @Field()
  @Column('integer')
  reward_id_20: number;

  @Field()
  @Column('integer')
  reward_count_20: number;

  @Field()
  @Column('integer')
  price_type_20: number;

  @Field()
  @Column('integer')
  currency_id_20: number;

  @Field()
  @Column('integer')
  price_20: number;

}

