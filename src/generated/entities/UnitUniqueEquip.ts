import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'unit_unique_equip' })
export class UnitUniqueEquip extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'unit_id', type: 'integer' })
  unitId: number;

  @Field()
  @Column({ name: 'equip_slot', type: 'integer' })
  equipSlot: number;

  @Field()
  @Column({ name: 'equip_id', type: 'integer' })
  equipId: number;

}

