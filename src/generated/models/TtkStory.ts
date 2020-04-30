import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'ttk_story' })
export class TtkStory extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'ttk_story_id', type: 'integer' })
  ttkStoryId: number;

  @Field()
  @Column({ name: 'ttk_score', type: 'integer' })
  ttkScore: number;

  @Field()
  @Column({ name: 'title', type: 'text' })
  title: string;

}

