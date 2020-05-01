import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'room_character_skin_color' })
export class RoomCharacterSkinColor extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'character_id', type: 'integer' })
  characterId: number;

  @Field(type => Int)
  @Column({ name: 'skin_color_id', type: 'integer' })
  skinColorId: number;

}

