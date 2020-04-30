import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'room_skin_color' })
export class RoomSkinColor extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  skin_color_id: number;

  @Field()
  @Column('integer')
  color_red: number;

  @Field()
  @Column('integer')
  color_green: number;

  @Field()
  @Column('integer')
  color_blue: number;

}

