import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'character_love_rankup_text' })
export class CharacterLoveRankupText extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  chara_id: number;

  @Field()
  @Column('text')
  name: string;

  @Field()
  @Column('integer')
  love_level: number;

  @Field()
  @Column('real')
  scale: number;

  @Field()
  @Column('integer')
  position_x: number;

  @Field()
  @Column('integer')
  position_y: number;

  @Field()
  @Column('integer')
  voice_id_1: number;

  @Field()
  @Column('integer')
  face_1: number;

  @Field()
  @Column('text')
  serif_1: string;

  @Field()
  @Column('integer')
  voice_id_2: number;

  @Field()
  @Column('integer')
  face_2: number;

  @Field()
  @Column('text')
  serif_2: string;

  @Field()
  @Column('integer')
  voice_id_3: number;

  @Field()
  @Column('integer')
  face_3: number;

  @Field()
  @Column('text')
  serif_3: string;

}

