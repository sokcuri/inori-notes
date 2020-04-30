import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'room_character_skin_color' })
export class RoomCharacterSkinColor extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  character_id: number;

  @Field()
  @Column('integer')
  skin_color_id: number;

}

