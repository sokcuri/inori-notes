import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'ttk_story_script' })
export class TtkStoryScript extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  story_id: number;

  @Field()
  @Column('integer')
  seq_num: number;

  @Field()
  @Column('integer')
  type: number;

  @Field()
  @Column('integer')
  line_num: number;

  @Field()
  @Column('integer')
  start_pos: number;

  @Field()
  @Column('integer')
  end_pos: number;

  @Field()
  @Column('real')
  seek_time: number;

  @Field()
  @Column('text')
  sheet_name: string;

  @Field()
  @Column('text')
  cue_name: string;

  @Field()
  @Column('integer')
  command: number;

  @Field()
  @Column('real')
  command_param: number;

}

