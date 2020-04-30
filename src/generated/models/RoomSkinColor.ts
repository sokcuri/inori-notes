import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'room_skin_color' })
export class RoomSkinColor extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'skin_color_id', type: 'integer' })
  skinColorId: number;

  @Field()
  @Column({ name: 'color_red', type: 'integer' })
  colorRed: number;

  @Field()
  @Column({ name: 'color_green', type: 'integer' })
  colorGreen: number;

  @Field()
  @Column({ name: 'color_blue', type: 'integer' })
  colorBlue: number;

}

