import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'movie' })
export class Movie extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'movie_id', type: 'integer' })
  movieId: number;

  @Field()
  @Column({ name: 'story_group_id', type: 'integer' })
  storyGroupId: number;

  @Field()
  @Column({ name: 'story_id', type: 'integer' })
  storyId: number;

  @Field()
  @Column({ name: 'bgm_id', type: 'text' })
  bgmId: string;

  @Field()
  @Column({ name: 'se_id', type: 'text' })
  seId: string;

}

