import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'chara_fortune_schedule' })
export class CharaFortuneSchedule extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  fortune_id: number;

  @Field()
  @Column('text')
  name: string;

  @Field()
  @Column('text')
  start_time: string;

  @Field()
  @Column('text')
  end_time: string;

}

