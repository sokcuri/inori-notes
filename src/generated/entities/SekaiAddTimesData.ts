import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'sekai_add_times_data' })
export class SekaiAddTimesData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field()
  @Column({ name: 'sekai_id', type: 'integer' })
  sekaiId: number;

  @Field()
  @Column({ name: 'add_times', type: 'integer' })
  addTimes: number;

  @Field()
  @Column({ name: 'add_times_limit', type: 'integer' })
  addTimesLimit: number;

  @Field()
  @Column({ name: 'add_times_time', type: 'text' })
  addTimesTime: string;

  @Field()
  @Column({ name: 'duration', type: 'integer' })
  duration: number;

}

