import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'unique_equipment_craft' })
export class UniqueEquipmentCraft extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  equip_id: number;

  @Field()
  @Column('integer')
  crafted_cost: number;

  @Field()
  @Column('integer')
  reward_type_1: number;

  @Field()
  @Column('integer')
  item_id_1: number;

  @Field()
  @Column('integer')
  consume_num_1: number;

  @Field()
  @Column('integer')
  reward_type_2: number;

  @Field()
  @Column('integer')
  item_id_2: number;

  @Field()
  @Column('integer')
  consume_num_2: number;

  @Field()
  @Column('integer')
  reward_type_3: number;

  @Field()
  @Column('integer')
  item_id_3: number;

  @Field()
  @Column('integer')
  consume_num_3: number;

  @Field()
  @Column('integer')
  reward_type_4: number;

  @Field()
  @Column('integer')
  item_id_4: number;

  @Field()
  @Column('integer')
  consume_num_4: number;

  @Field()
  @Column('integer')
  reward_type_5: number;

  @Field()
  @Column('integer')
  item_id_5: number;

  @Field()
  @Column('integer')
  consume_num_5: number;

  @Field()
  @Column('integer')
  reward_type_6: number;

  @Field()
  @Column('integer')
  item_id_6: number;

  @Field()
  @Column('integer')
  consume_num_6: number;

  @Field()
  @Column('integer')
  reward_type_7: number;

  @Field()
  @Column('integer')
  item_id_7: number;

  @Field()
  @Column('integer')
  consume_num_7: number;

  @Field()
  @Column('integer')
  reward_type_8: number;

  @Field()
  @Column('integer')
  item_id_8: number;

  @Field()
  @Column('integer')
  consume_num_8: number;

  @Field()
  @Column('integer')
  reward_type_9: number;

  @Field()
  @Column('integer')
  item_id_9: number;

  @Field()
  @Column('integer')
  consume_num_9: number;

  @Field()
  @Column('integer')
  reward_type_10: number;

  @Field()
  @Column('integer')
  item_id_10: number;

  @Field()
  @Column('integer')
  consume_num_10: number;

}

