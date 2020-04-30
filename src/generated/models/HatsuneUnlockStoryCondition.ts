import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_unlock_story_condition' })
export class HatsuneUnlockStoryCondition extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  story_id: number;

  @Field()
  @Column('integer')
  event_id: number;

  @Field()
  @Column('integer')
  condition_entry: number;

  @Field()
  @Column('integer')
  condition_quest_id: number;

  @Field()
  @Column('integer')
  condition_boss_id: number;

  @Field()
  @Column('integer')
  condition_mission_id: number;

  @Field()
  @Column('text')
  condition_time: string;

}

