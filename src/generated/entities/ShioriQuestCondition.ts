import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'shiori_quest_condition' })
export class ShioriQuestCondition extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'quest_id', type: 'integer' })
  questId: number;

  @Field()
  @Column({ name: 'event_id', type: 'integer' })
  eventId: number;

  @Field()
  @Column({ name: 'condition_quest_id', type: 'integer' })
  conditionQuestId: number;

  @Field()
  @Column({ name: 'condition_boss_id', type: 'integer' })
  conditionBossId: number;

  @Field()
  @Column({ name: 'release_quest_id', type: 'integer' })
  releaseQuestId: number;

  @Field()
  @Column({ name: 'release_boss_id', type: 'integer' })
  releaseBossId: number;

  @Field()
  @Column({ name: 'condition_main_quest_id', type: 'integer' })
  conditionMainQuestId: number;

}

