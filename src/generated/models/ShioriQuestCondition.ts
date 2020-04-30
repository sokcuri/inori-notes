import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'shiori_quest_condition' })
export class ShioriQuestCondition extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  quest_id: number;

  @Field()
  @Column('integer')
  event_id: number;

  @Field()
  @Column('integer')
  condition_quest_id: number;

  @Field()
  @Column('integer')
  condition_boss_id: number;

  @Field()
  @Column('integer')
  release_quest_id: number;

  @Field()
  @Column('integer')
  release_boss_id: number;

  @Field()
  @Column('integer')
  condition_main_quest_id: number;

}

