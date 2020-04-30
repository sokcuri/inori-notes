import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'room_chat_scenario' })
export class RoomChatScenario extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field(type => ID)
  @PrimaryColumn('integer')
  scenario_idx: number;

  @Field()
  @Column('integer')
  unit_pos_no: number;

  @Field()
  @Column('integer')
  delay: number;

  @Field()
  @Column('integer')
  affect_type: number;

  @Field()
  @Column('integer')
  anime_id: number;

  @Field()
  @Column('integer')
  icon_id: number;

}

