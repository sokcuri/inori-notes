import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'room_setup' })
export class RoomSetup extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  room_item_id: number;

  @Field()
  @Column('integer')
  grid_height: number;

  @Field()
  @Column('integer')
  grid_width: number;

  @Field()
  @Column('integer')
  unit_id: number;

}

