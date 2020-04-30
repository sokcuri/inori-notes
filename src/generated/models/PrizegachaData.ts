import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'prizegacha_data' })
export class PrizegachaData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  prizegacha_id: number;

  @Field()
  @Column('integer')
  prize_memory_id_1: number;

  @Field()
  @Column('integer')
  prize_memory_id_2: number;

  @Field()
  @Column('integer')
  prize_memory_id_3: number;

  @Field()
  @Column('integer')
  prize_memory_id_4: number;

  @Field()
  @Column('integer')
  prize_memory_id_5: number;

  @Field()
  @Column('integer')
  prize_memory_id_6: number;

  @Field()
  @Column('integer')
  prize_memory_id_7: number;

  @Field()
  @Column('integer')
  prize_memory_id_8: number;

  @Field()
  @Column('integer')
  prize_memory_id_9: number;

  @Field()
  @Column('integer')
  prize_memory_id_10: number;

  @Field()
  @Column('integer')
  prize_memory_id_11: number;

  @Field()
  @Column('integer')
  prize_memory_id_12: number;

  @Field()
  @Column('integer')
  prize_memory_id_13: number;

  @Field()
  @Column('integer')
  prize_memory_id_14: number;

  @Field()
  @Column('integer')
  prize_memory_id_15: number;

  @Field()
  @Column('integer')
  prize_memory_id_16: number;

  @Field()
  @Column('integer')
  prize_memory_id_17: number;

  @Field()
  @Column('integer')
  prize_memory_id_18: number;

  @Field()
  @Column('integer')
  prize_memory_id_19: number;

  @Field()
  @Column('integer')
  prize_memory_id_20: number;

  @Field()
  @Column('integer')
  gacha_prize1: number;

  @Field()
  @Column('integer')
  gacha_prize10: number;

  @Field()
  @Column('integer')
  prize_fixed_compensation: number;

  @Field()
  @Column('integer')
  prize_fixed_compensation_quantity: number;

  @Field()
  @Column('integer')
  rarity_odds: number;

}

