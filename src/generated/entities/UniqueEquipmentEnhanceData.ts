import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'unique_equipment_enhance_data' })
export class UniqueEquipmentEnhanceData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'equip_slot', type: 'integer' })
  equipSlot: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'enhance_level', type: 'integer' })
  enhanceLevel: number;

  @Field(type => Int)
  @Column({ name: 'needed_point', type: 'integer' })
  neededPoint: number;

  @Field(type => Int)
  @Column({ name: 'total_point', type: 'integer' })
  totalPoint: number;

  @Field(type => Int)
  @Column({ name: 'needed_mana', type: 'integer' })
  neededMana: number;

  @Field(type => Int)
  @Column({ name: 'rank', type: 'integer' })
  rank: number;

}

