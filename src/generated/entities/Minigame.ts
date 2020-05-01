import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'minigame' })
export class Minigame extends BaseEntity {
  @Field()
  @Column({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'minigame_scheme_id', type: 'integer' })
  minigameSchemeId: number;

  @Field()
  @Column({ name: 'event_id', type: 'integer' })
  eventId: number;

  @Field()
  @Column({ name: 'release_conditions_1', type: 'integer' })
  releaseConditions1: number;

  @Field()
  @Column({ name: 'conditions_id_1', type: 'integer' })
  conditionsId1: number;

  @Field()
  @Column({ name: 'first_time_story_id', type: 'integer' })
  firstTimeStoryId: number;

}

