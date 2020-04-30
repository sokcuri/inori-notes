import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'kaiser_add_times_data' })
export class KaiserAddTimesData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  add_times: number;

  @Field()
  @Column('text')
  add_times_time: string;

  @Field()
  @Column('integer')
  duration: number;

}

