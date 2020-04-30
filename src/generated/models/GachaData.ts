import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'gacha_data' })
export class GachaData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'gacha_id', type: 'integer' })
  gachaId: number;

  @Field()
  @Column({ name: 'gacha_name', type: 'text' })
  gachaName: string;

  @Field()
  @Column({ name: 'description', type: 'text' })
  description: string;

  @Field()
  @Column({ name: 'description_2', type: 'text' })
  description2: string;

  @Field()
  @Column({ name: 'description_sp', type: 'text' })
  descriptionSp: string;

  @Field()
  @Column({ name: 'gacha_detail', type: 'integer' })
  gachaDetail: number;

  @Field()
  @Column({ name: 'gacha_cost_type', type: 'integer' })
  gachaCostType: number;

  @Field()
  @Column({ name: 'price', type: 'integer' })
  price: number;

  @Field()
  @Column({ name: 'free_gacha_type', type: 'integer' })
  freeGachaType: number;

  @Field()
  @Column({ name: 'free_gacha_interval_time', type: 'integer' })
  freeGachaIntervalTime: number;

  @Field()
  @Column({ name: 'free_gacha_count', type: 'integer' })
  freeGachaCount: number;

  @Field()
  @Column({ name: 'discount_price', type: 'integer' })
  discountPrice: number;

  @Field()
  @Column({ name: 'gacha_odds', type: 'text' })
  gachaOdds: string;

  @Field()
  @Column({ name: 'gacha_odds_star2', type: 'text' })
  gachaOddsStar2: string;

  @Field()
  @Column({ name: 'gacha_type', type: 'integer' })
  gachaType: number;

  @Field()
  @Column({ name: 'movie_id', type: 'integer' })
  movieId: number;

  @Field()
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field()
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

  @Field()
  @Column({ name: 'ticket_id', type: 'integer' })
  ticketId: number;

  @Field()
  @Column({ name: 'special_id', type: 'integer' })
  specialId: number;

  @Field()
  @Column({ name: 'exchange_id', type: 'integer' })
  exchangeId: number;

  @Field()
  @Column({ name: 'ticket_id_10', type: 'integer' })
  ticketId10: number;

  @Field()
  @Column({ name: 'rarity_odds', type: 'text' })
  rarityOdds: string;

  @Field()
  @Column({ name: 'chara_odds_star1', type: 'text' })
  charaOddsStar1: string;

  @Field()
  @Column({ name: 'chara_odds_star2', type: 'text' })
  charaOddsStar2: string;

  @Field()
  @Column({ name: 'chara_odds_star3', type: 'text' })
  charaOddsStar3: string;

  @Field()
  @Column({ name: 'gacha10_special_odds_star1', type: 'text' })
  gacha10SpecialOddsStar1: string;

  @Field()
  @Column({ name: 'gacha10_special_odds_star2', type: 'text' })
  gacha10SpecialOddsStar2: string;

  @Field()
  @Column({ name: 'gacha10_special_odds_star3', type: 'text' })
  gacha10SpecialOddsStar3: string;

  @Field()
  @Column({ name: 'prizegacha_id', type: 'integer' })
  prizegachaId: number;

  @Field()
  @Column({ name: 'gacha_bonus_id', type: 'integer' })
  gachaBonusId: number;

  @Field()
  @Column({ name: 'gacha_times_limit10', type: 'integer' })
  gachaTimesLimit10: number;

}

