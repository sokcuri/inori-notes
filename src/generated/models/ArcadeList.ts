import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'arcade_list' })
export class ArcadeList extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  arcade_id: number;

  @Field()
  @Column('text')
  title: string;

  @Field()
  @Column('text')
  start_time: string;

  @Field()
  @Column('integer')
  price: number;

  @Field()
  @Column('text')
  sheet_id: string;

  @Field()
  @Column('text')
  cue_id: string;

  @Field()
  @Column('integer')
  where_type: number;

  @Field()
  @Column('text')
  description: string;

}

