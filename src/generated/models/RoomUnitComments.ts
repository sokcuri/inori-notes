import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'room_unit_comments' })
export class RoomUnitComments extends BaseEntity {
  @Field()
  @Column('integer')
  id: number;

  @Field(type => ID)
  @PrimaryColumn('integer')
  unit_id: number;

  @Field(type => ID)
  @PrimaryColumn('integer')
  trigger: number;

  @Field(type => ID)
  @PrimaryColumn('integer')
  voice_id: number;

  @Field()
  @Column('integer')
  beloved_step: number;

  @Field(type => ID)
  @PrimaryColumn('integer')
  time: number;

  @Field()
  @Column('integer')
  face_id: number;

  @Field()
  @Column('text')
  description: string;

  @Field()
  @Column('integer')
  insert_word_type: number;

}

