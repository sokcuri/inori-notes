import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'equipment_craft' })
export class EquipmentCraft extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'equipment_id', type: 'integer' })
  equipmentId: number;

  @Field(type => Int)
  @Column({ name: 'crafted_cost', type: 'integer' })
  craftedCost: number;

  @Field(type => Int)
  @Column({ name: 'condition_equipment_id_1', type: 'integer' })
  conditionEquipmentId1: number;

  @Field(type => Int)
  @Column({ name: 'consume_num_1', type: 'integer' })
  consumeNum1: number;

  @Field(type => Int)
  @Column({ name: 'condition_equipment_id_2', type: 'integer' })
  conditionEquipmentId2: number;

  @Field(type => Int)
  @Column({ name: 'consume_num_2', type: 'integer' })
  consumeNum2: number;

  @Field(type => Int)
  @Column({ name: 'condition_equipment_id_3', type: 'integer' })
  conditionEquipmentId3: number;

  @Field(type => Int)
  @Column({ name: 'consume_num_3', type: 'integer' })
  consumeNum3: number;

  @Field(type => Int)
  @Column({ name: 'condition_equipment_id_4', type: 'integer' })
  conditionEquipmentId4: number;

  @Field(type => Int)
  @Column({ name: 'consume_num_4', type: 'integer' })
  consumeNum4: number;

  @Field(type => Int)
  @Column({ name: 'condition_equipment_id_5', type: 'integer' })
  conditionEquipmentId5: number;

  @Field(type => Int)
  @Column({ name: 'consume_num_5', type: 'integer' })
  consumeNum5: number;

  @Field(type => Int)
  @Column({ name: 'condition_equipment_id_6', type: 'integer' })
  conditionEquipmentId6: number;

  @Field(type => Int)
  @Column({ name: 'consume_num_6', type: 'integer' })
  consumeNum6: number;

  @Field(type => Int)
  @Column({ name: 'condition_equipment_id_7', type: 'integer' })
  conditionEquipmentId7: number;

  @Field(type => Int)
  @Column({ name: 'consume_num_7', type: 'integer' })
  consumeNum7: number;

  @Field(type => Int)
  @Column({ name: 'condition_equipment_id_8', type: 'integer' })
  conditionEquipmentId8: number;

  @Field(type => Int)
  @Column({ name: 'consume_num_8', type: 'integer' })
  consumeNum8: number;

  @Field(type => Int)
  @Column({ name: 'condition_equipment_id_9', type: 'integer' })
  conditionEquipmentId9: number;

  @Field(type => Int)
  @Column({ name: 'consume_num_9', type: 'integer' })
  consumeNum9: number;

  @Field(type => Int)
  @Column({ name: 'condition_equipment_id_10', type: 'integer' })
  conditionEquipmentId10: number;

  @Field(type => Int)
  @Column({ name: 'consume_num_10', type: 'integer' })
  consumeNum10: number;

  @Field(type => [Int])
  get conditionEquipmentId() {
    return [this.conditionEquipmentId1, this.conditionEquipmentId2, this.conditionEquipmentId3, this.conditionEquipmentId4, this.conditionEquipmentId5, this.conditionEquipmentId6, this.conditionEquipmentId7, this.conditionEquipmentId8, this.conditionEquipmentId9, this.conditionEquipmentId10];
  }

  @Field(type => [Int])
  get consumeNum() {
    return [this.consumeNum1, this.consumeNum2, this.consumeNum3, this.consumeNum4, this.consumeNum5, this.consumeNum6, this.consumeNum7, this.consumeNum8, this.consumeNum9, this.consumeNum10];
  }

}

