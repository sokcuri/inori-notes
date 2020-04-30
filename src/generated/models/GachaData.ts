import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'gacha_data' })
export class GachaData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  gacha_id: number;

  @Field()
  @Column('text')
  gacha_name: string;

  @Field()
  @Column('text')
  description: string;

  @Field()
  @Column('text')
  description_2: string;

  @Field()
  @Column('text')
  description_sp: string;

  @Field()
  @Column('integer')
  gacha_detail: number;

  @Field()
  @Column('integer')
  gacha_cost_type: number;

  @Field()
  @Column('integer')
  price: number;

  @Field()
  @Column('integer')
  free_gacha_type: number;

  @Field()
  @Column('integer')
  free_gacha_interval_time: number;

  @Field()
  @Column('integer')
  free_gacha_count: number;

  @Field()
  @Column('integer')
  discount_price: number;

  @Field()
  @Column('text')
  gacha_odds: string;

  @Field()
  @Column('text')
  gacha_odds_star2: string;

  @Field()
  @Column('integer')
  gacha_type: number;

  @Field()
  @Column('integer')
  movie_id: number;

  @Field()
  @Column('text')
  start_time: string;

  @Field()
  @Column('text')
  end_time: string;

  @Field()
  @Column('integer')
  ticket_id: number;

  @Field()
  @Column('integer')
  special_id: number;

  @Field()
  @Column('integer')
  exchange_id: number;

  @Field()
  @Column('integer')
  ticket_id_10: number;

  @Field()
  @Column('text')
  rarity_odds: string;

  @Field()
  @Column('text')
  chara_odds_star1: string;

  @Field()
  @Column('text')
  chara_odds_star2: string;

  @Field()
  @Column('text')
  chara_odds_star3: string;

  @Field()
  @Column('text')
  gacha10_special_odds_star1: string;

  @Field()
  @Column('text')
  gacha10_special_odds_star2: string;

  @Field()
  @Column('text')
  gacha10_special_odds_star3: string;

  @Field()
  @Column('integer')
  prizegacha_id: number;

  @Field()
  @Column('integer')
  gacha_bonus_id: number;

  @Field()
  @Column('integer')
  gacha_times_limit10: number;

}

