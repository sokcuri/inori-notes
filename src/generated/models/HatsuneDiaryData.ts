import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_diary_data' })
export class HatsuneDiaryData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'diary_id', type: 'integer' })
  diaryId: number;

  @Field()
  @Column({ name: 'contents_type', type: 'integer' })
  contentsType: number;

  @Field()
  @Column({ name: 'diary_date', type: 'integer' })
  diaryDate: number;

  @Field()
  @Column({ name: 'sub_title', type: 'text' })
  subTitle: string;

  @Field()
  @Column({ name: 'forced_release_time', type: 'text' })
  forcedReleaseTime: string;

  @Field()
  @Column({ name: 'condition_time', type: 'text' })
  conditionTime: string;

  @Field()
  @Column({ name: 'condition_story_id', type: 'integer' })
  conditionStoryId: number;

  @Field()
  @Column({ name: 'condition_boss_count', type: 'integer' })
  conditionBossCount: number;

}

