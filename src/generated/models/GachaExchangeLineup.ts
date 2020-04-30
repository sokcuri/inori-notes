import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'gacha_exchange_lineup' })
export class GachaExchangeLineup extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  exchange_id: number;

  @Field()
  @Column('integer')
  unit_id: number;

  @Field()
  @Column('integer')
  rarity: number;

  @Field()
  @Column('integer')
  gacha_bonus_id: number;

}

