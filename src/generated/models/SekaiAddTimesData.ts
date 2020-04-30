import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'sekai_add_times_data' })
export class SekaiAddTimesData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  sekai_id: number;

  @Field()
  @Column('integer')
  add_times: number;

  @Field()
  @Column('integer')
  add_times_limit: number;

  @Field()
  @Column('text')
  add_times_time: string;

  @Field()
  @Column('integer')
  duration: number;

}

