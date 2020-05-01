import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'room_chat_scenario' })
export class RoomChatScenario extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'scenario_idx', type: 'integer' })
  scenarioIdx: number;

  @Field()
  @Column({ name: 'unit_pos_no', type: 'integer' })
  unitPosNo: number;

  @Field()
  @Column({ name: 'delay', type: 'integer' })
  delay: number;

  @Field()
  @Column({ name: 'affect_type', type: 'integer' })
  affectType: number;

  @Field()
  @Column({ name: 'anime_id', type: 'integer' })
  animeId: number;

  @Field()
  @Column({ name: 'icon_id', type: 'integer' })
  iconId: number;

}

