import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'movie' })
export class Movie extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  movie_id: number;

  @Field()
  @Column('integer')
  story_group_id: number;

  @Field()
  @Column('integer')
  story_id: number;

  @Field()
  @Column('text')
  bgm_id: string;

  @Field()
  @Column('text')
  se_id: string;

}

