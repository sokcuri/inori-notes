import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'glossary_detail' })
export class GlossaryDetail extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'glossary_id', type: 'integer' })
  glossaryId: number;

  @Field()
  @Column({ name: 'glossary_category_id', type: 'integer' })
  glossaryCategoryId: number;

  @Field()
  @Column({ name: 'title', type: 'text' })
  title: string;

  @Field()
  @Column({ name: 'description', type: 'text' })
  description: string;

  @Field()
  @Column({ name: 'unlock_story_id', type: 'integer' })
  unlockStoryId: number;

  @Field()
  @Column({ name: 'category_type', type: 'integer' })
  categoryType: number;

  @Field()
  @Column({ name: 'disp_order', type: 'integer' })
  dispOrder: number;

}

