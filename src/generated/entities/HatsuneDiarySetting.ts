import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_diary_setting' })
export class HatsuneDiarySetting extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'event_id', type: 'integer' })
  eventId: number;

  @Field(type => String)
  @Column({ name: 'bgm_sheet_name', type: 'text' })
  bgmSheetName: string;

  @Field(type => String)
  @Column({ name: 'bgm_cue_name', type: 'text' })
  bgmCueName: string;

}

