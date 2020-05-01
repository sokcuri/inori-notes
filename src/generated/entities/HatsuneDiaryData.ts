import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_diary_data' })
export class HatsuneDiaryData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'diary_id', type: 'integer' })
  diaryId: number;

  @Field(type => Int)
  @Column({ name: 'contents_type', type: 'integer' })
  contentsType: number;

  @Field(type => Int)
  @Column({ name: 'diary_date', type: 'integer' })
  diaryDate: number;

  @Field(type => String)
  @Column({ name: 'sub_title', type: 'text' })
  subTitle: string;

  @Field(type => String)
  @Column({ name: 'forced_release_time', type: 'text' })
  forcedReleaseTime: string;

  @Field(type => String)
  @Column({ name: 'condition_time', type: 'text' })
  conditionTime: string;

  @Field(type => Int)
  @Column({ name: 'condition_story_id', type: 'integer' })
  conditionStoryId: number;

  @Field(type => Int)
  @Column({ name: 'condition_boss_count', type: 'integer' })
  conditionBossCount: number;

}

