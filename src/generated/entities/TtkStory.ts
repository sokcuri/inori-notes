import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'ttk_story' })
export class TtkStory extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'ttk_story_id', type: 'integer' })
  ttkStoryId: number;

  @Field(type => Int)
  @Column({ name: 'ttk_score', type: 'integer' })
  ttkScore: number;

  @Field(type => String)
  @Column({ name: 'title', type: 'text' })
  title: string;

}

