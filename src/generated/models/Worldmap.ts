import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'worldmap' })
export class Worldmap extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  course_id: number;

  @Field()
  @Column('text')
  name: string;

  @Field()
  @Column('integer')
  map_id: number;

  @Field()
  @Column('text')
  sheet_id: string;

  @Field()
  @Column('text')
  que_id: string;

  @Field()
  @Column('integer')
  start_area_id: number;

  @Field()
  @Column('integer')
  end_area_id: number;

}

