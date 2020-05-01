import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_present' })
export class HatsunePresent extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => Int)
  @Column({ name: 'event_id', type: 'integer' })
  eventId: number;

  @Field(type => String)
  @Column({ name: 'dialog_title', type: 'text' })
  dialogTitle: string;

  @Field(type => String)
  @Column({ name: 'dialog_text', type: 'text' })
  dialogText: string;

  @Field(type => Int)
  @Column({ name: 'condition_quest_id', type: 'integer' })
  conditionQuestId: number;

  @Field(type => Int)
  @Column({ name: 'condition_boss_id', type: 'integer' })
  conditionBossId: number;

  @Field(type => Int)
  @Column({ name: 'condition_mission_id', type: 'integer' })
  conditionMissionId: number;

  @Field(type => Int)
  @Column({ name: 'adv_id', type: 'integer' })
  advId: number;

  @Field(type => Int)
  @Column({ name: 'item_type_1', type: 'integer' })
  itemType1: number;

  @Field(type => Int)
  @Column({ name: 'item_id_1', type: 'integer' })
  itemId1: number;

  @Field(type => Int)
  @Column({ name: 'item_num_1', type: 'integer' })
  itemNum1: number;

  @Field(type => Int)
  @Column({ name: 'item_type_2', type: 'integer' })
  itemType2: number;

  @Field(type => Int)
  @Column({ name: 'item_id_2', type: 'integer' })
  itemId2: number;

  @Field(type => Int)
  @Column({ name: 'item_num_2', type: 'integer' })
  itemNum2: number;

  @Field(type => Int)
  @Column({ name: 'item_type_3', type: 'integer' })
  itemType3: number;

  @Field(type => Int)
  @Column({ name: 'item_id_3', type: 'integer' })
  itemId3: number;

  @Field(type => Int)
  @Column({ name: 'item_num_3', type: 'integer' })
  itemNum3: number;

  @Field(type => Int)
  @Column({ name: 'item_type_4', type: 'integer' })
  itemType4: number;

  @Field(type => Int)
  @Column({ name: 'item_id_4', type: 'integer' })
  itemId4: number;

  @Field(type => Int)
  @Column({ name: 'item_num_4', type: 'integer' })
  itemNum4: number;

  @Field(type => Int)
  @Column({ name: 'item_type_5', type: 'integer' })
  itemType5: number;

  @Field(type => Int)
  @Column({ name: 'item_id_5', type: 'integer' })
  itemId5: number;

  @Field(type => Int)
  @Column({ name: 'item_num_5', type: 'integer' })
  itemNum5: number;

}

