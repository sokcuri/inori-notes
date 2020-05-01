import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_diary_script' })
export class HatsuneDiaryScript extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field()
  @Column({ name: 'diary_id', type: 'integer' })
  diaryId: number;

  @Field()
  @Column({ name: 'seq_num', type: 'integer' })
  seqNum: number;

  @Field()
  @Column({ name: 'type', type: 'integer' })
  type: number;

  @Field()
  @Column({ name: 'diary_text', type: 'text' })
  diaryText: string;

  @Field()
  @Column({ name: 'text_animation_speed', type: 'integer' })
  textAnimationSpeed: number;

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

