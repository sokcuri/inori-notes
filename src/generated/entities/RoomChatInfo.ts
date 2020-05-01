import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'room_chat_info' })
export class RoomChatInfo extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field()
  @Column({ name: 'formation_id', type: 'integer' })
  formationId: number;

  @Field()
  @Column({ name: 'scenario_id', type: 'integer' })
  scenarioId: number;

}

