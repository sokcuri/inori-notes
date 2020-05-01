import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'room_setup' })
export class RoomSetup extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'room_item_id', type: 'integer' })
  roomItemId: number;

  @Field(type => Int)
  @Column({ name: 'grid_height', type: 'integer' })
  gridHeight: number;

  @Field(type => Int)
  @Column({ name: 'grid_width', type: 'integer' })
  gridWidth: number;

  @Field(type => Int)
  @Column({ name: 'unit_id', type: 'integer' })
  unitId: number;

}

