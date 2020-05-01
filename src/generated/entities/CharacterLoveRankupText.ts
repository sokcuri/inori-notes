import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'character_love_rankup_text' })
export class CharacterLoveRankupText extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'chara_id', type: 'integer' })
  charaId: number;

  @Field()
  @Column({ name: 'name', type: 'text' })
  name: string;

  @Field()
  @Column({ name: 'love_level', type: 'integer' })
  loveLevel: number;

  @Field()
  @Column({ name: 'scale', type: 'real' })
  scale: number;

  @Field()
  @Column({ name: 'position_x', type: 'integer' })
  positionX: number;

  @Field()
  @Column({ name: 'position_y', type: 'integer' })
  positionY: number;

  @Field()
  @Column({ name: 'voice_id_1', type: 'integer' })
  voiceId1: number;

  @Field()
  @Column({ name: 'face_1', type: 'integer' })
  face1: number;

  @Field()
  @Column({ name: 'serif_1', type: 'text' })
  serif1: string;

  @Field()
  @Column({ name: 'voice_id_2', type: 'integer' })
  voiceId2: number;

  @Field()
  @Column({ name: 'face_2', type: 'integer' })
  face2: number;

  @Field()
  @Column({ name: 'serif_2', type: 'text' })
  serif2: string;

  @Field()
  @Column({ name: 'voice_id_3', type: 'integer' })
  voiceId3: number;

  @Field()
  @Column({ name: 'face_3', type: 'integer' })
  face3: number;

  @Field()
  @Column({ name: 'serif_3', type: 'text' })
  serif3: string;

}

