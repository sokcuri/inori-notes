import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'minigame' })
export class Minigame extends BaseEntity {
  @Field()
  @Column('integer')
  id: number;

  @Field(type => ID)
  @PrimaryColumn('integer')
  minigame_scheme_id: number;

  @Field()
  @Column('integer')
  event_id: number;

  @Field()
  @Column('integer')
  release_conditions_1: number;

  @Field()
  @Column('integer')
  conditions_id_1: number;

  @Field()
  @Column('integer')
  first_time_story_id: number;

}

