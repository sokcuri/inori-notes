import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'unit_comments' })
export class UnitComments extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => Int)
  @Column({ name: 'unit_id', type: 'integer' })
  unitId: number;

  @Field(type => Int)
  @Column({ name: 'use_type', type: 'integer' })
  useType: number;

  @Field(type => Int)
  @Column({ name: 'voice_id', type: 'integer' })
  voiceId: number;

  @Field(type => Int)
  @Column({ name: 'face_id', type: 'integer' })
  faceId: number;

  @Field(type => Float)
  @Column({ name: 'change_time', type: 'real' })
  changeTime: number;

  @Field(type => Int)
  @Column({ name: 'change_face', type: 'integer' })
  changeFace: number;

  @Field(type => String)
  @Column({ name: 'description', type: 'text' })
  description: string;

}

