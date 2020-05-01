import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_diary_script' })
export class HatsuneDiaryScript extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => Int)
  @Column({ name: 'diary_id', type: 'integer' })
  diaryId: number;

  @Field(type => Int)
  @Column({ name: 'seq_num', type: 'integer' })
  seqNum: number;

  @Field(type => Int)
  @Column({ name: 'type', type: 'integer' })
  type: number;

  @Field(type => String)
  @Column({ name: 'diary_text', type: 'text' })
  diaryText: string;

  @Field(type => Int)
  @Column({ name: 'text_animation_speed', type: 'integer' })
  textAnimationSpeed: number;

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

