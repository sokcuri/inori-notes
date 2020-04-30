import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'room_character_personality' })
export class RoomCharacterPersonality extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  character_id: number;

  @Field()
  @Column('integer')
  personality_id: number;

}

