import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'room_unit_comments' })
export class RoomUnitComments extends BaseEntity {
  @Field(type => Int)
  @Column({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'unit_id', type: 'integer' })
  unitId: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'trigger', type: 'integer' })
  trigger: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'voice_id', type: 'integer' })
  voiceId: number;

  @Field(type => Int)
  @Column({ name: 'beloved_step', type: 'integer' })
  belovedStep: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'time', type: 'integer' })
  time: number;

  @Field(type => Int)
  @Column({ name: 'face_id', type: 'integer' })
  faceId: number;

  @Field(type => String)
  @Column({ name: 'description', type: 'text' })
  description: string;

  @Field(type => Int)
  @Column({ name: 'insert_word_type', type: 'integer' })
  insertWordType: number;

}

