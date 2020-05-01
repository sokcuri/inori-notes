import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'equipment_enhance_data' })
export class EquipmentEnhanceData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'promotion_level', type: 'integer' })
  promotionLevel: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'equipment_enhance_level', type: 'integer' })
  equipmentEnhanceLevel: number;

  @Field()
  @Column({ name: 'needed_point', type: 'integer' })
  neededPoint: number;

  @Field()
  @Column({ name: 'total_point', type: 'integer' })
  totalPoint: number;

}

