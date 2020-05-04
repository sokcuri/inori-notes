import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'shiori_boss_condition' })
export class ShioriBossCondition extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'boss_id', type: 'integer' })
  bossId: number;

  @Field(type => Int)
  @Column({ name: 'event_id', type: 'integer' })
  eventId: number;

  @Field(type => Int)
  @Column({ name: 'condition_quest_id', type: 'integer' })
  conditionQuestId: number;

  @Field(type => Int)
  @Column({ name: 'condition_boss_id', type: 'integer' })
  conditionBossId: number;

  @Field(type => Int)
  @Column({ name: 'release_quest_id', type: 'integer' })
  releaseQuestId: number;

  @Field(type => Int)
  @Column({ name: 'release_boss_id', type: 'integer' })
  releaseBossId: number;

}

