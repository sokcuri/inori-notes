import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'room_chat_info' })
export class RoomChatInfo extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  formation_id: number;

  @Field()
  @Column('integer')
  scenario_id: number;

}

