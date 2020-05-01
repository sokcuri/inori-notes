import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'room_change' })
export class RoomChange extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'room_item_id', type: 'integer' })
  roomItemId: number;

  @Field()
  @Column({ name: 'change_id', type: 'integer' })
  changeId: number;

  @Field()
  @Column({ name: 'change_start', type: 'text' })
  changeStart: string;

  @Field()
  @Column({ name: 'change_end', type: 'text' })
  changeEnd: string;

}

