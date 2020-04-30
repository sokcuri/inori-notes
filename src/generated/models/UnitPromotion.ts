import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'unit_promotion' })
export class UnitPromotion extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  unit_id: number;

  @Field(type => ID)
  @PrimaryColumn('integer')
  promotion_level: number;

  @Field()
  @Column('integer')
  equip_slot_1: number;

  @Field()
  @Column('integer')
  equip_slot_2: number;

  @Field()
  @Column('integer')
  equip_slot_3: number;

  @Field()
  @Column('integer')
  equip_slot_4: number;

  @Field()
  @Column('integer')
  equip_slot_5: number;

  @Field()
  @Column('integer')
  equip_slot_6: number;

}

