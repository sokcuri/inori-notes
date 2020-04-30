import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'room_unit_comments' })
export class RoomUnitComments extends BaseEntity {
  @Field()
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

  @Field()
  @Column({ name: 'beloved_step', type: 'integer' })
  belovedStep: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'time', type: 'integer' })
  time: number;

  @Field()
  @Column({ name: 'face_id', type: 'integer' })
  faceId: number;

  @Field()
  @Column({ name: 'description', type: 'text' })
  description: string;

  @Field()
  @Column({ name: 'insert_word_type', type: 'integer' })
  insertWordType: number;

}

