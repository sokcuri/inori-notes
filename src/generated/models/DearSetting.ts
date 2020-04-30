import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'dear_setting' })
export class DearSetting extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  event_id: number;

  @Field()
  @Column('text')
  system_name: string;

  @Field()
  @Column('integer')
  tutorial_quest_id: number;

  @Field()
  @Column('integer')
  tutorial_chara_index: number;

  @Field()
  @Column('integer')
  tutorial_story_id: number;

}

