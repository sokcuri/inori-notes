import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'unit_introduction' })
export class UnitIntroduction extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  gacha_id: number;

  @Field()
  @Column('integer')
  introduction_number: number;

  @Field()
  @Column('text')
  start_time: string;

  @Field()
  @Column('text')
  end_time: string;

  @Field()
  @Column('integer')
  maximum_chunk_size_1: number;

  @Field()
  @Column('integer')
  maximum_chunk_size_loop_1: number;

  @Field()
  @Column('integer')
  maximum_chunk_size_2: number;

  @Field()
  @Column('integer')
  maximum_chunk_size_loop_2: number;

  @Field()
  @Column('integer')
  maximum_chunk_size_3: number;

  @Field()
  @Column('integer')
  maximum_chunk_size_loop_3: number;

}

