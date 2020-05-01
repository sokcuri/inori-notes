import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'quest_condition_data' })
export class QuestConditionData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'quest_id', type: 'integer' })
  questId: number;

  @Field()
  @Column({ name: 'condition_quest_id_1', type: 'integer' })
  conditionQuestId1: number;

  @Field()
  @Column({ name: 'condition_quest_id_2', type: 'integer' })
  conditionQuestId2: number;

  @Field()
  @Column({ name: 'condition_quest_id_3', type: 'integer' })
  conditionQuestId3: number;

  @Field()
  @Column({ name: 'condition_quest_id_4', type: 'integer' })
  conditionQuestId4: number;

  @Field()
  @Column({ name: 'condition_quest_id_5', type: 'integer' })
  conditionQuestId5: number;

  @Field()
  @Column({ name: 'release_quest_id_1', type: 'integer' })
  releaseQuestId1: number;

  @Field()
  @Column({ name: 'release_quest_id_2', type: 'integer' })
  releaseQuestId2: number;

  @Field()
  @Column({ name: 'release_quest_id_3', type: 'integer' })
  releaseQuestId3: number;

  @Field()
  @Column({ name: 'release_quest_id_4', type: 'integer' })
  releaseQuestId4: number;

  @Field()
  @Column({ name: 'release_quest_id_5', type: 'integer' })
  releaseQuestId5: number;

}

