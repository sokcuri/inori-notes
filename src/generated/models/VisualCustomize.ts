import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'visual_customize' })
export class VisualCustomize extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field()
  @Column({ name: 'title_prefab', type: 'integer' })
  titlePrefab: number;

  @Field()
  @Column({ name: 'title_movie', type: 'integer' })
  titleMovie: number;

  @Field()
  @Column({ name: 'title_voice', type: 'integer' })
  titleVoice: number;

  @Field()
  @Column({ name: 'story_top_movie', type: 'integer' })
  storyTopMovie: number;

  @Field()
  @Column({ name: 'quest_top_movie', type: 'integer' })
  questTopMovie: number;

  @Field()
  @Column({ name: 'profile_logo', type: 'integer' })
  profileLogo: number;

  @Field()
  @Column({ name: 'watched_story_id', type: 'integer' })
  watchedStoryId: number;

  @Field()
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field()
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

}

