import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'ticket_gacha_data' })
export class TicketGachaData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'gacha_id', type: 'integer' })
  gachaId: number;

  @Field()
  @Column({ name: 'gacha_name', type: 'text' })
  gachaName: string;

  @Field()
  @Column({ name: 'gacha_type', type: 'integer' })
  gachaType: number;

  @Field()
  @Column({ name: 'ticket_id', type: 'integer' })
  ticketId: number;

  @Field()
  @Column({ name: 'gacha_times', type: 'integer' })
  gachaTimes: number;

  @Field()
  @Column({ name: 'gacha_detail', type: 'integer' })
  gachaDetail: number;

  @Field()
  @Column({ name: 'guarantee_rarity', type: 'text' })
  guaranteeRarity: string;

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
  @Column({ name: 'staging_type', type: 'integer' })
  stagingType: number;

}

