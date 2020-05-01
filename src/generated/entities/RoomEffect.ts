import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'room_effect' })
export class RoomEffect extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field()
  @Column({ name: 'reward_get', type: 'integer' })
  rewardGet: number;

  @Field()
  @Column({ name: 'jukebox', type: 'integer' })
  jukebox: number;

  @Field()
  @Column({ name: 'nebbia', type: 'integer' })
  nebbia: number;

  @Field()
  @Column({ name: 'arcade', type: 'integer' })
  arcade: number;

}

