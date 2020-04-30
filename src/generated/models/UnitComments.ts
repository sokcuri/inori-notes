import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'unit_comments' })
export class UnitComments extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field()
  @Column({ name: 'unit_id', type: 'integer' })
  unitId: number;

  @Field()
  @Column({ name: 'use_type', type: 'integer' })
  useType: number;

  @Field()
  @Column({ name: 'voice_id', type: 'integer' })
  voiceId: number;

  @Field()
  @Column({ name: 'face_id', type: 'integer' })
  faceId: number;

  @Field()
  @Column({ name: 'change_time', type: 'real' })
  changeTime: number;

  @Field()
  @Column({ name: 'change_face', type: 'integer' })
  changeFace: number;

  @Field()
  @Column({ name: 'description', type: 'text' })
  description: string;

}

