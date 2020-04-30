import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'unit_comments' })
export class UnitComments extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  unit_id: number;

  @Field()
  @Column('integer')
  use_type: number;

  @Field()
  @Column('integer')
  voice_id: number;

  @Field()
  @Column('integer')
  face_id: number;

  @Field()
  @Column('real')
  change_time: number;

  @Field()
  @Column('integer')
  change_face: number;

  @Field()
  @Column('text')
  description: string;

}

