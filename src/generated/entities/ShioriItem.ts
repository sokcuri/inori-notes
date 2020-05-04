import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'shiori_item' })
export class ShioriItem extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'event_id', type: 'integer' })
  eventId: number;

  @Field(type => Int)
  @Column({ name: 'unit_material_id_1', type: 'integer' })
  unitMaterialId1: number;

  @Field(type => Int)
  @Column({ name: 'unit_material_id_2', type: 'integer' })
  unitMaterialId2: number;

  @Field(type => [Int])
  get unitMaterialId() {
    return [this.unitMaterialId1, this.unitMaterialId2];
  }

}

