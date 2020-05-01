import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'kaiser_schedule' })
export class KaiserSchedule extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field()
  @Column({ name: 'teaser_time', type: 'text' })
  teaserTime: string;

  @Field()
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field()
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

  @Field()
  @Column({ name: 'count_start_time', type: 'text' })
  countStartTime: string;

  @Field()
  @Column({ name: 'close_time', type: 'text' })
  closeTime: string;

  @Field()
  @Column({ name: 'story_id', type: 'integer' })
  storyId: number;

  @Field()
  @Column({ name: 'close_story_condition_id', type: 'integer' })
  closeStoryConditionId: number;

  @Field()
  @Column({ name: 'close_story_id', type: 'integer' })
  closeStoryId: number;

  @Field()
  @Column({ name: 'top_bgm', type: 'text' })
  topBgm: string;

  @Field()
  @Column({ name: 'top_bg', type: 'text' })
  topBg: string;

  @Field()
  @Column({ name: 'after_bgm', type: 'text' })
  afterBgm: string;

  @Field()
  @Column({ name: 'after_bg', type: 'text' })
  afterBg: string;

}

