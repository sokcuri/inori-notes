import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'shiori_event_list' })
export class ShioriEventList extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'event_id', type: 'integer' })
  eventId: number;

  @Field(type => String)
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field(type => String)
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

  @Field(type => Int)
  @Column({ name: 'condition_story_id', type: 'integer' })
  conditionStoryId: number;

  @Field(type => Int)
  @Column({ name: 'condition_chara_id', type: 'integer' })
  conditionCharaId: number;

  @Field(type => Int)
  @Column({ name: 'condition_main_quest_id', type: 'integer' })
  conditionMainQuestId: number;

  @Field(type => Int)
  @Column({ name: 'condition_shiori_quest_id', type: 'integer' })
  conditionShioriQuestId: number;

  @Field(type => Int)
  @Column({ name: 'original_event_id', type: 'integer' })
  originalEventId: number;

  @Field(type => String)
  @Column({ name: 'original_start_time', type: 'text' })
  originalStartTime: string;

  @Field(type => Int)
  @Column({ name: 'gojuon_order', type: 'integer' })
  gojuonOrder: number;

  @Field(type => String)
  @Column({ name: 'help_index', type: 'text' })
  helpIndex: string;

}

