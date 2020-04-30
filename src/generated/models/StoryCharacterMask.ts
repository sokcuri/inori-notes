import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'story_character_mask' })
export class StoryCharacterMask extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  chara_id: number;

  @Field()
  @Column('real')
  offset: number;

  @Field()
  @Column('real')
  size: number;

  @Field()
  @Column('real')
  softness: number;

}

