import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'unique_equipment_enhance_data' })
export class UniqueEquipmentEnhanceData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'equip_slot', type: 'integer' })
  equipSlot: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'enhance_level', type: 'integer' })
  enhanceLevel: number;

  @Field()
  @Column({ name: 'needed_point', type: 'integer' })
  neededPoint: number;

  @Field()
  @Column({ name: 'total_point', type: 'integer' })
  totalPoint: number;

  @Field()
  @Column({ name: 'needed_mana', type: 'integer' })
  neededMana: number;

  @Field()
  @Column({ name: 'rank', type: 'integer' })
  rank: number;

}

