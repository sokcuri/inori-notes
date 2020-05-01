import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'glossary_detail' })
export class GlossaryDetail extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'glossary_id', type: 'integer' })
  glossaryId: number;

  @Field(type => Int)
  @Column({ name: 'glossary_category_id', type: 'integer' })
  glossaryCategoryId: number;

  @Field(type => String)
  @Column({ name: 'title', type: 'text' })
  title: string;

  @Field(type => String)
  @Column({ name: 'description', type: 'text' })
  description: string;

  @Field(type => Int)
  @Column({ name: 'unlock_story_id', type: 'integer' })
  unlockStoryId: number;

  @Field(type => Int)
  @Column({ name: 'category_type', type: 'integer' })
  categoryType: number;

  @Field(type => Int)
  @Column({ name: 'disp_order', type: 'integer' })
  dispOrder: number;

}

