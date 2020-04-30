import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'equipment_enhance_data' })
export class EquipmentEnhanceData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  promotion_level: number;

  @Field(type => ID)
  @PrimaryColumn('integer')
  equipment_enhance_level: number;

  @Field()
  @Column('integer')
  needed_point: number;

  @Field()
  @Column('integer')
  total_point: number;

}

