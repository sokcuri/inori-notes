import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'ttk_story' })
export class TtkStory extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  ttk_story_id: number;

  @Field()
  @Column('integer')
  ttk_score: number;

  @Field()
  @Column('text')
  title: string;

}

