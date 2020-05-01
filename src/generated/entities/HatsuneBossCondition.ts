import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_boss_condition' })
export class HatsuneBossCondition extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'boss_id', type: 'integer' })
  bossId: number;

  @Field()
  @Column({ name: 'event_id', type: 'integer' })
  eventId: number;

  @Field()
  @Column({ name: 'condition_quest_id_1', type: 'integer' })
  conditionQuestId1: number;

  @Field()
  @Column({ name: 'condition_quest_id_2', type: 'integer' })
  conditionQuestId2: number;

  @Field()
  @Column({ name: 'condition_boss_id_1', type: 'integer' })
  conditionBossId1: number;

  @Field()
  @Column({ name: 'condition_boss_id_2', type: 'integer' })
  conditionBossId2: number;

  @Field()
  @Column({ name: 'condition_gacha_step', type: 'integer' })
  conditionGachaStep: number;

  @Field()
  @Column({ name: 'force_unlock_time', type: 'text' })
  forceUnlockTime: string;

  @Field()
  @Column({ name: 'release_quest_id_1', type: 'integer' })
  releaseQuestId1: number;

  @Field()
  @Column({ name: 'release_quest_id_2', type: 'integer' })
  releaseQuestId2: number;

  @Field()
  @Column({ name: 'release_boss_id_1', type: 'integer' })
  releaseBossId1: number;

  @Field()
  @Column({ name: 'release_boss_id_2', type: 'integer' })
  releaseBossId2: number;

}

