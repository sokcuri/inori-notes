import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'visual_customize' })
export class VisualCustomize extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  title_prefab: number;

  @Field()
  @Column('integer')
  title_movie: number;

  @Field()
  @Column('integer')
  title_voice: number;

  @Field()
  @Column('integer')
  story_top_movie: number;

  @Field()
  @Column('integer')
  quest_top_movie: number;

  @Field()
  @Column('integer')
  profile_logo: number;

  @Field()
  @Column('integer')
  watched_story_id: number;

  @Field()
  @Column('text')
  start_time: string;

  @Field()
  @Column('text')
  end_time: string;

}

