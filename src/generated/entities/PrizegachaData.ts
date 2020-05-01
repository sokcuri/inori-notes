import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'prizegacha_data' })
export class PrizegachaData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'prizegacha_id', type: 'integer' })
  prizegachaId: number;

  @Field(type => Int)
  @Column({ name: 'prize_memory_id_1', type: 'integer' })
  prizeMemoryId1: number;

  @Field(type => Int)
  @Column({ name: 'prize_memory_id_2', type: 'integer' })
  prizeMemoryId2: number;

  @Field(type => Int)
  @Column({ name: 'prize_memory_id_3', type: 'integer' })
  prizeMemoryId3: number;

  @Field(type => Int)
  @Column({ name: 'prize_memory_id_4', type: 'integer' })
  prizeMemoryId4: number;

  @Field(type => Int)
  @Column({ name: 'prize_memory_id_5', type: 'integer' })
  prizeMemoryId5: number;

  @Field(type => Int)
  @Column({ name: 'prize_memory_id_6', type: 'integer' })
  prizeMemoryId6: number;

  @Field(type => Int)
  @Column({ name: 'prize_memory_id_7', type: 'integer' })
  prizeMemoryId7: number;

  @Field(type => Int)
  @Column({ name: 'prize_memory_id_8', type: 'integer' })
  prizeMemoryId8: number;

  @Field(type => Int)
  @Column({ name: 'prize_memory_id_9', type: 'integer' })
  prizeMemoryId9: number;

  @Field(type => Int)
  @Column({ name: 'prize_memory_id_10', type: 'integer' })
  prizeMemoryId10: number;

  @Field(type => Int)
  @Column({ name: 'prize_memory_id_11', type: 'integer' })
  prizeMemoryId11: number;

  @Field(type => Int)
  @Column({ name: 'prize_memory_id_12', type: 'integer' })
  prizeMemoryId12: number;

  @Field(type => Int)
  @Column({ name: 'prize_memory_id_13', type: 'integer' })
  prizeMemoryId13: number;

  @Field(type => Int)
  @Column({ name: 'prize_memory_id_14', type: 'integer' })
  prizeMemoryId14: number;

  @Field(type => Int)
  @Column({ name: 'prize_memory_id_15', type: 'integer' })
  prizeMemoryId15: number;

  @Field(type => Int)
  @Column({ name: 'prize_memory_id_16', type: 'integer' })
  prizeMemoryId16: number;

  @Field(type => Int)
  @Column({ name: 'prize_memory_id_17', type: 'integer' })
  prizeMemoryId17: number;

  @Field(type => Int)
  @Column({ name: 'prize_memory_id_18', type: 'integer' })
  prizeMemoryId18: number;

  @Field(type => Int)
  @Column({ name: 'prize_memory_id_19', type: 'integer' })
  prizeMemoryId19: number;

  @Field(type => Int)
  @Column({ name: 'prize_memory_id_20', type: 'integer' })
  prizeMemoryId20: number;

  @Field(type => Int)
  @Column({ name: 'gacha_prize1', type: 'integer' })
  gachaPrize1: number;

  @Field(type => Int)
  @Column({ name: 'gacha_prize10', type: 'integer' })
  gachaPrize10: number;

  @Field(type => Int)
  @Column({ name: 'prize_fixed_compensation', type: 'integer' })
  prizeFixedCompensation: number;

  @Field(type => Int)
  @Column({ name: 'prize_fixed_compensation_quantity', type: 'integer' })
  prizeFixedCompensationQuantity: number;

  @Field(type => Int)
  @Column({ name: 'rarity_odds', type: 'integer' })
  rarityOdds: number;

}

