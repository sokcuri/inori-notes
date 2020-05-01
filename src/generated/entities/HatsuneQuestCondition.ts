import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_quest_condition' })
export class HatsuneQuestCondition extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'quest_id', type: 'integer' })
  questId: number;

  @Field(type => Int)
  @Column({ name: 'event_id', type: 'integer' })
  eventId: number;

  @Field(type => Int)
  @Column({ name: 'condition_quest_id_1', type: 'integer' })
  conditionQuestId1: number;

  @Field(type => Int)
  @Column({ name: 'condition_quest_id_2', type: 'integer' })
  conditionQuestId2: number;

  @Field(type => Int)
  @Column({ name: 'condition_boss_id_1', type: 'integer' })
  conditionBossId1: number;

  @Field(type => Int)
  @Column({ name: 'condition_boss_id_2', type: 'integer' })
  conditionBossId2: number;

  @Field(type => Int)
  @Column({ name: 'release_quest_id_1', type: 'integer' })
  releaseQuestId1: number;

  @Field(type => Int)
  @Column({ name: 'release_quest_id_2', type: 'integer' })
  releaseQuestId2: number;

  @Field(type => Int)
  @Column({ name: 'release_boss_id_1', type: 'integer' })
  releaseBossId1: number;

  @Field(type => Int)
  @Column({ name: 'release_boss_id_2', type: 'integer' })
  releaseBossId2: number;

  @Field(type => Int)
  @Column({ name: 'condition_main_quest_id', type: 'integer' })
  conditionMainQuestId: number;

}

