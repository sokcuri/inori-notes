import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'story_quest_data' })
export class StoryQuestData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'story_quest_id', type: 'integer' })
  storyQuestId: number;

  @Field()
  @Column({ name: 'story_id', type: 'integer' })
  storyId: number;

  @Field()
  @Column({ name: 'quest_name', type: 'text' })
  questName: string;

  @Field()
  @Column({ name: 'limit_time', type: 'integer' })
  limitTime: number;

  @Field()
  @Column({ name: 'background_1', type: 'integer' })
  background1: number;

  @Field()
  @Column({ name: 'wave_group_id_1', type: 'integer' })
  waveGroupId1: number;

  @Field()
  @Column({ name: 'wave_bgm_sheet_id_1', type: 'text' })
  waveBgmSheetId1: string;

  @Field()
  @Column({ name: 'wave_bgm_que_id_1', type: 'text' })
  waveBgmQueId1: string;

  @Field()
  @Column({ name: 'background_2', type: 'integer' })
  background2: number;

  @Field()
  @Column({ name: 'wave_group_id_2', type: 'integer' })
  waveGroupId2: number;

  @Field()
  @Column({ name: 'wave_bgm_sheet_id_2', type: 'text' })
  waveBgmSheetId2: string;

  @Field()
  @Column({ name: 'wave_bgm_que_id_2', type: 'text' })
  waveBgmQueId2: string;

  @Field()
  @Column({ name: 'background_3', type: 'integer' })
  background3: number;

  @Field()
  @Column({ name: 'wave_group_id_3', type: 'integer' })
  waveGroupId3: number;

  @Field()
  @Column({ name: 'wave_bgm_sheet_id_3', type: 'text' })
  waveBgmSheetId3: string;

  @Field()
  @Column({ name: 'wave_bgm_que_id_3', type: 'text' })
  waveBgmQueId3: string;

  @Field()
  @Column({ name: 'guest_unit_1', type: 'integer' })
  guestUnit1: number;

  @Field()
  @Column({ name: 'guest_unit_2', type: 'integer' })
  guestUnit2: number;

  @Field()
  @Column({ name: 'guest_unit_3', type: 'integer' })
  guestUnit3: number;

  @Field()
  @Column({ name: 'guest_unit_4', type: 'integer' })
  guestUnit4: number;

  @Field()
  @Column({ name: 'guest_unit_5', type: 'integer' })
  guestUnit5: number;

}

