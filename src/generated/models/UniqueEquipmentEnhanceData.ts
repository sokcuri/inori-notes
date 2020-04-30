import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'unique_equipment_enhance_data' })
export class UniqueEquipmentEnhanceData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  equip_slot: number;

  @Field(type => ID)
  @PrimaryColumn('integer')
  enhance_level: number;

  @Field()
  @Column('integer')
  needed_point: number;

  @Field()
  @Column('integer')
  total_point: number;

  @Field()
  @Column('integer')
  needed_mana: number;

  @Field()
  @Column('integer')
  rank: number;

}

