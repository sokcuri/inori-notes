/* eslint-disable @typescript-eslint/no-unused-vars */
import { ObjectType, Field, Int, Float } from 'type-graphql';
import { getRepository } from 'typeorm';
import { EquipmentCraft } from '../../entities';

@ObjectType()
export class EquipmentCraftObject {
  @Field(type => Int)
  equipmentId: number;

  @Field(type => Int)
  craftedCost: number;

  @Field(type => [Int])
  conditionEquipmentId: number[];

  @Field(type => [Int])
  consumeNum: number[];

  @Field(type => Int)
  conditionEquipmentId1: number;

  @Field(type => Int)
  consumeNum1: number;

  @Field(type => Int)
  conditionEquipmentId2: number;

  @Field(type => Int)
  consumeNum2: number;

  @Field(type => Int)
  conditionEquipmentId3: number;

  @Field(type => Int)
  consumeNum3: number;

  @Field(type => Int)
  conditionEquipmentId4: number;

  @Field(type => Int)
  consumeNum4: number;

  @Field(type => Int)
  conditionEquipmentId5: number;

  @Field(type => Int)
  consumeNum5: number;

  @Field(type => Int)
  conditionEquipmentId6: number;

  @Field(type => Int)
  consumeNum6: number;

  @Field(type => Int)
  conditionEquipmentId7: number;

  @Field(type => Int)
  consumeNum7: number;

  @Field(type => Int)
  conditionEquipmentId8: number;

  @Field(type => Int)
  consumeNum8: number;

  @Field(type => Int)
  conditionEquipmentId9: number;

  @Field(type => Int)
  consumeNum9: number;

  @Field(type => Int)
  conditionEquipmentId10: number;

  @Field(type => Int)
  consumeNum10: number;
}

export async function equipmentCraft(equipmentId: number): Promise<EquipmentCraftObject> {
  return getRepository(EquipmentCraft)
    .createQueryBuilder('EquipmentCraft')
    .where('EquipmentCraft.equipmentId = :equipmentId', { equipmentId })
    .getOne();
}
