import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'room_emotion_icon' })
export class RoomEmotionIcon extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field()
  @Column({ name: 'enable_auto', type: 'integer' })
  enableAuto: number;

  @Field()
  @Column({ name: 'enable_tap', type: 'integer' })
  enableTap: number;

}

