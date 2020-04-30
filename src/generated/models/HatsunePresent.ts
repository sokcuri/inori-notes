import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_present' })
export class HatsunePresent extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  event_id: number;

  @Field()
  @Column('text')
  dialog_title: string;

  @Field()
  @Column('text')
  dialog_text: string;

  @Field()
  @Column('integer')
  condition_quest_id: number;

  @Field()
  @Column('integer')
  condition_boss_id: number;

  @Field()
  @Column('integer')
  condition_mission_id: number;

  @Field()
  @Column('integer')
  adv_id: number;

  @Field()
  @Column('integer')
  item_type_1: number;

  @Field()
  @Column('integer')
  item_id_1: number;

  @Field()
  @Column('integer')
  item_num_1: number;

  @Field()
  @Column('integer')
  item_type_2: number;

  @Field()
  @Column('integer')
  item_id_2: number;

  @Field()
  @Column('integer')
  item_num_2: number;

  @Field()
  @Column('integer')
  item_type_3: number;

  @Field()
  @Column('integer')
  item_id_3: number;

  @Field()
  @Column('integer')
  item_num_3: number;

  @Field()
  @Column('integer')
  item_type_4: number;

  @Field()
  @Column('integer')
  item_id_4: number;

  @Field()
  @Column('integer')
  item_num_4: number;

  @Field()
  @Column('integer')
  item_type_5: number;

  @Field()
  @Column('integer')
  item_id_5: number;

  @Field()
  @Column('integer')
  item_num_5: number;

}

