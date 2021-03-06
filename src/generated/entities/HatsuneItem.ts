import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_item' })
export class HatsuneItem extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'event_id', type: 'integer' })
  eventId: number;

  @Field(type => Int)
  @Column({ name: 'boss_ticket_id', type: 'integer' })
  bossTicketId: number;

  @Field(type => Int)
  @Column({ name: 'gacha_ticket_id', type: 'integer' })
  gachaTicketId: number;

  @Field(type => Int)
  @Column({ name: 'unit_material_id_1', type: 'integer' })
  unitMaterialId1: number;

  @Field(type => Int)
  @Column({ name: 'unit_material_id_2', type: 'integer' })
  unitMaterialId2: number;

  @Field(type => Int)
  @Column({ name: 'unit_material_id_3', type: 'integer' })
  unitMaterialId3: number;

  @Field(type => Int)
  @Column({ name: 'unit_material_id_4', type: 'integer' })
  unitMaterialId4: number;

  @Field(type => Int)
  @Column({ name: 'unit_material_id_5', type: 'integer' })
  unitMaterialId5: number;

  @Field(type => Int)
  @Column({ name: 'unit_material_id_6', type: 'integer' })
  unitMaterialId6: number;

  @Field(type => Int)
  @Column({ name: 'unit_material_id_7', type: 'integer' })
  unitMaterialId7: number;

  @Field(type => Int)
  @Column({ name: 'unit_material_id_8', type: 'integer' })
  unitMaterialId8: number;

  @Field(type => Int)
  @Column({ name: 'unit_material_id_9', type: 'integer' })
  unitMaterialId9: number;

  @Field(type => Int)
  @Column({ name: 'unit_material_id_10', type: 'integer' })
  unitMaterialId10: number;

  @Field(type => [Int])
  get unitMaterialId() {
    return [this.unitMaterialId1, this.unitMaterialId2, this.unitMaterialId3, this.unitMaterialId4, this.unitMaterialId5, this.unitMaterialId6, this.unitMaterialId7, this.unitMaterialId8, this.unitMaterialId9, this.unitMaterialId10];
  }

}

