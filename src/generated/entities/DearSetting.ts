import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'dear_setting' })
export class DearSetting extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'event_id', type: 'integer' })
  eventId: number;

  @Field(type => String)
  @Column({ name: 'system_name', type: 'text' })
  systemName: string;

  @Field(type => Int)
  @Column({ name: 'tutorial_quest_id', type: 'integer' })
  tutorialQuestId: number;

  @Field(type => Int)
  @Column({ name: 'tutorial_chara_index', type: 'integer' })
  tutorialCharaIndex: number;

  @Field(type => Int)
  @Column({ name: 'tutorial_story_id', type: 'integer' })
  tutorialStoryId: number;

}

