import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'nyx_story_script' })
export class NyxStoryScript extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field()
  @Column({ name: 'story_id', type: 'integer' })
  storyId: number;

  @Field()
  @Column({ name: 'seq_num', type: 'integer' })
  seqNum: number;

  @Field()
  @Column({ name: 'type', type: 'integer' })
  type: number;

  @Field()
  @Column({ name: 'line_num', type: 'integer' })
  lineNum: number;

  @Field()
  @Column({ name: 'start_pos', type: 'integer' })
  startPos: number;

  @Field()
  @Column({ name: 'end_pos', type: 'integer' })
  endPos: number;

  @Field()
  @Column({ name: 'seek_time', type: 'real' })
  seekTime: number;

  @Field()
  @Column({ name: 'sheet_name', type: 'text' })
  sheetName: string;

  @Field()
  @Column({ name: 'cue_name', type: 'text' })
  cueName: string;

  @Field()
  @Column({ name: 'command', type: 'integer' })
  command: number;

  @Field()
  @Column({ name: 'command_param', type: 'real' })
  commandParam: number;

}

