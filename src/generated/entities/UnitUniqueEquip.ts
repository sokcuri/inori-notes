import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'unit_unique_equip' })
export class UnitUniqueEquip extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'unit_id', type: 'integer' })
  unitId: number;

  @Field(type => Int)
  @Column({ name: 'equip_slot', type: 'integer' })
  equipSlot: number;

  @Field(type => Int)
  @Column({ name: 'equip_id', type: 'integer' })
  equipId: number;

}

