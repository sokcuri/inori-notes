import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_diary_setting' })
export class HatsuneDiarySetting extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  event_id: number;

  @Field()
  @Column('text')
  bgm_sheet_name: string;

  @Field()
  @Column('text')
  bgm_cue_name: string;

}

