import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'glossary_detail' })
export class GlossaryDetail extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  glossary_id: number;

  @Field()
  @Column('integer')
  glossary_category_id: number;

  @Field()
  @Column('text')
  title: string;

  @Field()
  @Column('text')
  description: string;

  @Field()
  @Column('integer')
  unlock_story_id: number;

  @Field()
  @Column('integer')
  category_type: number;

  @Field()
  @Column('integer')
  disp_order: number;

}

