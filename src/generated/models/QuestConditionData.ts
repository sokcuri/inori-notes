import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'quest_condition_data' })
export class QuestConditionData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  quest_id: number;

  @Field()
  @Column('integer')
  condition_quest_id_1: number;

  @Field()
  @Column('integer')
  condition_quest_id_2: number;

  @Field()
  @Column('integer')
  condition_quest_id_3: number;

  @Field()
  @Column('integer')
  condition_quest_id_4: number;

  @Field()
  @Column('integer')
  condition_quest_id_5: number;

  @Field()
  @Column('integer')
  release_quest_id_1: number;

  @Field()
  @Column('integer')
  release_quest_id_2: number;

  @Field()
  @Column('integer')
  release_quest_id_3: number;

  @Field()
  @Column('integer')
  release_quest_id_4: number;

  @Field()
  @Column('integer')
  release_quest_id_5: number;

}

