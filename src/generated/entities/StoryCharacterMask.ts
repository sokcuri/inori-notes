import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'story_character_mask' })
export class StoryCharacterMask extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'chara_id', type: 'integer' })
  charaId: number;

  @Field(type => Float)
  @Column({ name: 'offset', type: 'real' })
  offset: number;

  @Field(type => Float)
  @Column({ name: 'size', type: 'real' })
  size: number;

  @Field(type => Float)
  @Column({ name: 'softness', type: 'real' })
  softness: number;

}

