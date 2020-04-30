import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'shiori_event_list' })
export class ShioriEventList extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  event_id: number;

  @Field()
  @Column('text')
  start_time: string;

  @Field()
  @Column('text')
  end_time: string;

  @Field()
  @Column('integer')
  condition_story_id: number;

  @Field()
  @Column('integer')
  condition_chara_id: number;

  @Field()
  @Column('integer')
  condition_main_quest_id: number;

  @Field()
  @Column('integer')
  condition_shiori_quest_id: number;

  @Field()
  @Column('integer')
  original_event_id: number;

  @Field()
  @Column('text')
  original_start_time: string;

  @Field()
  @Column('integer')
  gojuon_order: number;

  @Field()
  @Column('text')
  help_index: string;

}

