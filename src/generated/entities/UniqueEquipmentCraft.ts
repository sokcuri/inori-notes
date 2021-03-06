import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'unique_equipment_craft' })
export class UniqueEquipmentCraft extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'equip_id', type: 'integer' })
  equipId: number;

  @Field(type => Int)
  @Column({ name: 'crafted_cost', type: 'integer' })
  craftedCost: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_1', type: 'integer' })
  rewardType1: number;

  @Field(type => Int)
  @Column({ name: 'item_id_1', type: 'integer' })
  itemId1: number;

  @Field(type => Int)
  @Column({ name: 'consume_num_1', type: 'integer' })
  consumeNum1: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_2', type: 'integer' })
  rewardType2: number;

  @Field(type => Int)
  @Column({ name: 'item_id_2', type: 'integer' })
  itemId2: number;

  @Field(type => Int)
  @Column({ name: 'consume_num_2', type: 'integer' })
  consumeNum2: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_3', type: 'integer' })
  rewardType3: number;

  @Field(type => Int)
  @Column({ name: 'item_id_3', type: 'integer' })
  itemId3: number;

  @Field(type => Int)
  @Column({ name: 'consume_num_3', type: 'integer' })
  consumeNum3: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_4', type: 'integer' })
  rewardType4: number;

  @Field(type => Int)
  @Column({ name: 'item_id_4', type: 'integer' })
  itemId4: number;

  @Field(type => Int)
  @Column({ name: 'consume_num_4', type: 'integer' })
  consumeNum4: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_5', type: 'integer' })
  rewardType5: number;

  @Field(type => Int)
  @Column({ name: 'item_id_5', type: 'integer' })
  itemId5: number;

  @Field(type => Int)
  @Column({ name: 'consume_num_5', type: 'integer' })
  consumeNum5: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_6', type: 'integer' })
  rewardType6: number;

  @Field(type => Int)
  @Column({ name: 'item_id_6', type: 'integer' })
  itemId6: number;

  @Field(type => Int)
  @Column({ name: 'consume_num_6', type: 'integer' })
  consumeNum6: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_7', type: 'integer' })
  rewardType7: number;

  @Field(type => Int)
  @Column({ name: 'item_id_7', type: 'integer' })
  itemId7: number;

  @Field(type => Int)
  @Column({ name: 'consume_num_7', type: 'integer' })
  consumeNum7: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_8', type: 'integer' })
  rewardType8: number;

  @Field(type => Int)
  @Column({ name: 'item_id_8', type: 'integer' })
  itemId8: number;

  @Field(type => Int)
  @Column({ name: 'consume_num_8', type: 'integer' })
  consumeNum8: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_9', type: 'integer' })
  rewardType9: number;

  @Field(type => Int)
  @Column({ name: 'item_id_9', type: 'integer' })
  itemId9: number;

  @Field(type => Int)
  @Column({ name: 'consume_num_9', type: 'integer' })
  consumeNum9: number;

  @Field(type => Int)
  @Column({ name: 'reward_type_10', type: 'integer' })
  rewardType10: number;

  @Field(type => Int)
  @Column({ name: 'item_id_10', type: 'integer' })
  itemId10: number;

  @Field(type => Int)
  @Column({ name: 'consume_num_10', type: 'integer' })
  consumeNum10: number;

  @Field(type => [Int])
  get rewardType() {
    return [this.rewardType1, this.rewardType2, this.rewardType3, this.rewardType4, this.rewardType5, this.rewardType6, this.rewardType7, this.rewardType8, this.rewardType9, this.rewardType10];
  }

  @Field(type => [Int])
  get itemId() {
    return [this.itemId1, this.itemId2, this.itemId3, this.itemId4, this.itemId5, this.itemId6, this.itemId7, this.itemId8, this.itemId9, this.itemId10];
  }

  @Field(type => [Int])
  get consumeNum() {
    return [this.consumeNum1, this.consumeNum2, this.consumeNum3, this.consumeNum4, this.consumeNum5, this.consumeNum6, this.consumeNum7, this.consumeNum8, this.consumeNum9, this.consumeNum10];
  }

}

