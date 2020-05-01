import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'nyx_story_script' })
export class NyxStoryScript extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => Int)
  @Column({ name: 'story_id', type: 'integer' })
  storyId: number;

  @Field(type => Int)
  @Column({ name: 'seq_num', type: 'integer' })
  seqNum: number;

  @Field(type => Int)
  @Column({ name: 'type', type: 'integer' })
  type: number;

  @Field(type => Int)
  @Column({ name: 'line_num', type: 'integer' })
  lineNum: number;

  @Field(type => Int)
  @Column({ name: 'start_pos', type: 'integer' })
  startPos: number;

  @Field(type => Int)
  @Column({ name: 'end_pos', type: 'integer' })
  endPos: number;

  @Field(type => Float)
  @Column({ name: 'seek_time', type: 'real' })
  seekTime: number;

  @Field(type => String)
  @Column({ name: 'sheet_name', type: 'text' })
  sheetName: string;

  @Field(type => String)
  @Column({ name: 'cue_name', type: 'text' })
  cueName: string;

  @Field(type => Int)
  @Column({ name: 'command', type: 'integer' })
  command: number;

  @Field(type => Float)
  @Column({ name: 'command_param', type: 'real' })
  commandParam: number;

}

