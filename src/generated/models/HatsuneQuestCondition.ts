import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_quest_condition' })
export class HatsuneQuestCondition extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  quest_id: number;

  @Field()
  @Column('integer')
  event_id: number;

  @Field()
  @Column('integer')
  condition_quest_id_1: number;

  @Field()
  @Column('integer')
  condition_quest_id_2: number;

  @Field()
  @Column('integer')
  condition_boss_id_1: number;

  @Field()
  @Column('integer')
  condition_boss_id_2: number;

  @Field()
  @Column('integer')
  release_quest_id_1: number;

  @Field()
  @Column('integer')
  release_quest_id_2: number;

  @Field()
  @Column('integer')
  release_boss_id_1: number;

  @Field()
  @Column('integer')
  release_boss_id_2: number;

  @Field()
  @Column('integer')
  condition_main_quest_id: number;

}

