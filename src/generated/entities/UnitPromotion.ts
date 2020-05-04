import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'unit_promotion' })
export class UnitPromotion extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'unit_id', type: 'integer' })
  unitId: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'promotion_level', type: 'integer' })
  promotionLevel: number;

  @Field(type => Int)
  @Column({ name: 'equip_slot_1', type: 'integer' })
  equipSlot1: number;

  @Field(type => Int)
  @Column({ name: 'equip_slot_2', type: 'integer' })
  equipSlot2: number;

  @Field(type => Int)
  @Column({ name: 'equip_slot_3', type: 'integer' })
  equipSlot3: number;

  @Field(type => Int)
  @Column({ name: 'equip_slot_4', type: 'integer' })
  equipSlot4: number;

  @Field(type => Int)
  @Column({ name: 'equip_slot_5', type: 'integer' })
  equipSlot5: number;

  @Field(type => Int)
  @Column({ name: 'equip_slot_6', type: 'integer' })
  equipSlot6: number;

  @Field(type => [Int])
  get equipSlot() {
    return [this.equipSlot1, this.equipSlot2, this.equipSlot3, this.equipSlot4, this.equipSlot5, this.equipSlot6];
  }

}

