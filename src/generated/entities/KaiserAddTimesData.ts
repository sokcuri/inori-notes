import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'kaiser_add_times_data' })
export class KaiserAddTimesData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field()
  @Column({ name: 'add_times', type: 'integer' })
  addTimes: number;

  @Field()
  @Column({ name: 'add_times_time', type: 'text' })
  addTimesTime: string;

  @Field()
  @Column({ name: 'duration', type: 'integer' })
  duration: number;

}

