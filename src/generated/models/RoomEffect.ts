import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'room_effect' })
export class RoomEffect extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  reward_get: number;

  @Field()
  @Column('integer')
  jukebox: number;

  @Field()
  @Column('integer')
  nebbia: number;

  @Field()
  @Column('integer')
  arcade: number;

}

