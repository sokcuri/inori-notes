import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'visual_customize' })
export class VisualCustomize extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => Int)
  @Column({ name: 'title_prefab', type: 'integer' })
  titlePrefab: number;

  @Field(type => Int)
  @Column({ name: 'title_movie', type: 'integer' })
  titleMovie: number;

  @Field(type => Int)
  @Column({ name: 'title_voice', type: 'integer' })
  titleVoice: number;

  @Field(type => Int)
  @Column({ name: 'story_top_movie', type: 'integer' })
  storyTopMovie: number;

  @Field(type => Int)
  @Column({ name: 'quest_top_movie', type: 'integer' })
  questTopMovie: number;

  @Field(type => String)
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field(type => String)
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

}

