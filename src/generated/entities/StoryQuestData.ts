import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'story_quest_data' })
export class StoryQuestData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'story_quest_id', type: 'integer' })
  storyQuestId: number;

  @Field(type => Int)
  @Column({ name: 'story_id', type: 'integer' })
  storyId: number;

  @Field(type => String)
  @Column({ name: 'quest_name', type: 'text' })
  questName: string;

  @Field(type => Int)
  @Column({ name: 'limit_time', type: 'integer' })
  limitTime: number;

  @Field(type => Int)
  @Column({ name: 'background_1', type: 'integer' })
  background1: number;

  @Field(type => Int)
  @Column({ name: 'wave_group_id_1', type: 'integer' })
  waveGroupId1: number;

  @Field(type => String)
  @Column({ name: 'wave_bgm_sheet_id_1', type: 'text' })
  waveBgmSheetId1: string;

  @Field(type => String)
  @Column({ name: 'wave_bgm_que_id_1', type: 'text' })
  waveBgmQueId1: string;

  @Field(type => Int)
  @Column({ name: 'background_2', type: 'integer' })
  background2: number;

  @Field(type => Int)
  @Column({ name: 'wave_group_id_2', type: 'integer' })
  waveGroupId2: number;

  @Field(type => String)
  @Column({ name: 'wave_bgm_sheet_id_2', type: 'text' })
  waveBgmSheetId2: string;

  @Field(type => String)
  @Column({ name: 'wave_bgm_que_id_2', type: 'text' })
  waveBgmQueId2: string;

  @Field(type => Int)
  @Column({ name: 'background_3', type: 'integer' })
  background3: number;

  @Field(type => Int)
  @Column({ name: 'wave_group_id_3', type: 'integer' })
  waveGroupId3: number;

  @Field(type => String)
  @Column({ name: 'wave_bgm_sheet_id_3', type: 'text' })
  waveBgmSheetId3: string;

  @Field(type => String)
  @Column({ name: 'wave_bgm_que_id_3', type: 'text' })
  waveBgmQueId3: string;

  @Field(type => Int)
  @Column({ name: 'guest_unit_1', type: 'integer' })
  guestUnit1: number;

  @Field(type => Int)
  @Column({ name: 'guest_unit_2', type: 'integer' })
  guestUnit2: number;

  @Field(type => Int)
  @Column({ name: 'guest_unit_3', type: 'integer' })
  guestUnit3: number;

  @Field(type => Int)
  @Column({ name: 'guest_unit_4', type: 'integer' })
  guestUnit4: number;

  @Field(type => Int)
  @Column({ name: 'guest_unit_5', type: 'integer' })
  guestUnit5: number;

  @Field(type => [Int])
  get background() {
    return [this.background1, this.background2, this.background3];
  }

  @Field(type => [Int])
  get waveGroupId() {
    return [this.waveGroupId1, this.waveGroupId2, this.waveGroupId3];
  }

  @Field(type => [String])
  get waveBgmSheetId() {
    return [this.waveBgmSheetId1, this.waveBgmSheetId2, this.waveBgmSheetId3];
  }

  @Field(type => [String])
  get waveBgmQueId() {
    return [this.waveBgmQueId1, this.waveBgmQueId2, this.waveBgmQueId3];
  }

  @Field(type => [Int])
  get guestUnit() {
    return [this.guestUnit1, this.guestUnit2, this.guestUnit3, this.guestUnit4, this.guestUnit5];
  }

}

