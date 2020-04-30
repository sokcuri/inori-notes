import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'gacha_exchange_lineup' })
export class GachaExchangeLineup extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field()
  @Column({ name: 'exchange_id', type: 'integer' })
  exchangeId: number;

  @Field()
  @Column({ name: 'unit_id', type: 'integer' })
  unitId: number;

  @Field()
  @Column({ name: 'rarity', type: 'integer' })
  rarity: number;

  @Field()
  @Column({ name: 'gacha_bonus_id', type: 'integer' })
  gachaBonusId: number;

}

