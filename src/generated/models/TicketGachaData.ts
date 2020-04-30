import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'ticket_gacha_data' })
export class TicketGachaData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  gacha_id: number;

  @Field()
  @Column('text')
  gacha_name: string;

  @Field()
  @Column('integer')
  gacha_type: number;

  @Field()
  @Column('integer')
  ticket_id: number;

  @Field()
  @Column('integer')
  gacha_times: number;

  @Field()
  @Column('integer')
  gacha_detail: number;

  @Field()
  @Column('text')
  guarantee_rarity: string;

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
  @Column('integer')
  staging_type: number;

}

