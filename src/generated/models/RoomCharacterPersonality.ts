import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'room_character_personality' })
export class RoomCharacterPersonality extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'character_id', type: 'integer' })
  characterId: number;

  @Field()
  @Column({ name: 'personality_id', type: 'integer' })
  personalityId: number;

}

