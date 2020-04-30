import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'room_change' })
export class RoomChange extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  room_item_id: number;

  @Field()
  @Column('integer')
  change_id: number;

  @Field()
  @Column('text')
  change_start: string;

  @Field()
  @Column('text')
  change_end: string;

}

