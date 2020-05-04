import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'character_love_rankup_text' })
export class CharacterLoveRankupText extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'chara_id', type: 'integer' })
  charaId: number;

  @Field(type => String)
  @Column({ name: 'name', type: 'text' })
  name: string;

  @Field(type => Int)
  @Column({ name: 'love_level', type: 'integer' })
  loveLevel: number;

  @Field(type => Float)
  @Column({ name: 'scale', type: 'real' })
  scale: number;

  @Field(type => Int)
  @Column({ name: 'position_x', type: 'integer' })
  positionX: number;

  @Field(type => Int)
  @Column({ name: 'position_y', type: 'integer' })
  positionY: number;

  @Field(type => Int)
  @Column({ name: 'voice_id_1', type: 'integer' })
  voiceId1: number;

  @Field(type => Int)
  @Column({ name: 'face_1', type: 'integer' })
  face1: number;

  @Field(type => String)
  @Column({ name: 'serif_1', type: 'text' })
  serif1: string;

  @Field(type => Int)
  @Column({ name: 'voice_id_2', type: 'integer' })
  voiceId2: number;

  @Field(type => Int)
  @Column({ name: 'face_2', type: 'integer' })
  face2: number;

  @Field(type => String)
  @Column({ name: 'serif_2', type: 'text' })
  serif2: string;

  @Field(type => Int)
  @Column({ name: 'voice_id_3', type: 'integer' })
  voiceId3: number;

  @Field(type => Int)
  @Column({ name: 'face_3', type: 'integer' })
  face3: number;

  @Field(type => String)
  @Column({ name: 'serif_3', type: 'text' })
  serif3: string;

  @Field(type => [Int])
  get voiceId() {
    return [this.voiceId1, this.voiceId2, this.voiceId3];
  }

  @Field(type => [Int])
  get face() {
    return [this.face1, this.face2, this.face3];
  }

  @Field(type => [String])
  get serif() {
    return [this.serif1, this.serif2, this.serif3];
  }

}

