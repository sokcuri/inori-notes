import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'unit_background' })
export class UnitBackground extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'unit_id', type: 'integer' })
  unitId: number;

  @Field(type => String)
  @Column({ name: 'unit_name', type: 'text' })
  unitName: string;

  @Field(type => Int)
  @Column({ name: 'bg_id', type: 'integer' })
  bgId: number;

  @Field(type => String)
  @Column({ name: 'bg_name', type: 'text' })
  bgName: string;

  @Field(type => Float)
  @Column({ name: 'position', type: 'real' })
  position: number;

  @Field(type => Int)
  @Column({ name: 'face_type', type: 'integer' })
  faceType: number;

}

