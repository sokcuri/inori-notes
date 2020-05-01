import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'story_character_mask' })
export class StoryCharacterMask extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'chara_id', type: 'integer' })
  charaId: number;

  @Field()
  @Column({ name: 'offset', type: 'real' })
  offset: number;

  @Field()
  @Column({ name: 'size', type: 'real' })
  size: number;

  @Field()
  @Column({ name: 'softness', type: 'real' })
  softness: number;

}

