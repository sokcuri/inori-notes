import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'room_effect' })
export class RoomEffect extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => Int)
  @Column({ name: 'reward_get', type: 'integer' })
  rewardGet: number;

  @Field(type => Int)
  @Column({ name: 'jukebox', type: 'integer' })
  jukebox: number;

  @Field(type => Int)
  @Column({ name: 'nebbia', type: 'integer' })
  nebbia: number;

  @Field(type => Int)
  @Column({ name: 'arcade', type: 'integer' })
  arcade: number;

}

