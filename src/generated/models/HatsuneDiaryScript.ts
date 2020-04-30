import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_diary_script' })
export class HatsuneDiaryScript extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  diary_id: number;

  @Field()
  @Column('integer')
  seq_num: number;

  @Field()
  @Column('integer')
  type: number;

  @Field()
  @Column('text')
  diary_text: string;

  @Field()
  @Column('integer')
  text_animation_speed: number;

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

