import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'unit_background' })
export class UnitBackground extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  unit_id: number;

  @Field()
  @Column('text')
  unit_name: string;

  @Field()
  @Column('integer')
  bg_id: number;

  @Field()
  @Column('text')
  bg_name: string;

  @Field()
  @Column('real')
  position: number;

  @Field()
  @Column('integer')
  face_type: number;

}

