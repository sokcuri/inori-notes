import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'unit_unique_equip' })
export class UnitUniqueEquip extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  unit_id: number;

  @Field()
  @Column('integer')
  equip_slot: number;

  @Field()
  @Column('integer')
  equip_id: number;

}

