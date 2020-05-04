import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'minigame' })
export class Minigame extends BaseEntity {
  @Field(type => Int)
  @Column({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'minigame_scheme_id', type: 'integer' })
  minigameSchemeId: number;

  @Field(type => Int)
  @Column({ name: 'event_id', type: 'integer' })
  eventId: number;

  @Field(type => Int)
  @Column({ name: 'release_conditions_1', type: 'integer' })
  releaseConditions1: number;

  @Field(type => Int)
  @Column({ name: 'conditions_id_1', type: 'integer' })
  conditionsId1: number;

  @Field(type => Int)
  @Column({ name: 'first_time_story_id', type: 'integer' })
  firstTimeStoryId: number;

  @Field(type => [Int])
  get releaseConditions() {
    return [this.releaseConditions1];
  }

  @Field(type => [Int])
  get conditionsId() {
    return [this.conditionsId1];
  }

}

