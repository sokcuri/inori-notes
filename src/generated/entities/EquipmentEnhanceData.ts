import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'equipment_enhance_data' })
export class EquipmentEnhanceData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'promotion_level', type: 'integer' })
  promotionLevel: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'equipment_enhance_level', type: 'integer' })
  equipmentEnhanceLevel: number;

  @Field(type => Int)
  @Column({ name: 'needed_point', type: 'integer' })
  neededPoint: number;

  @Field(type => Int)
  @Column({ name: 'total_point', type: 'integer' })
  totalPoint: number;

}

