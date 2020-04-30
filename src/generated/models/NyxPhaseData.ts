import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'nyx_phase_data' })
export class NyxPhaseData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'story_phase', type: 'integer' })
  storyPhase: number;

  @Field()
  @Column({ name: 'phase_title', type: 'text' })
  phaseTitle: string;

  @Field()
  @Column({ name: 'condition_quest_id', type: 'integer' })
  conditionQuestId: number;

  @Field()
  @Column({ name: 'condition_quest_boss', type: 'integer' })
  conditionQuestBoss: number;

}

