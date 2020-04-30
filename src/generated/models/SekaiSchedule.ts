import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'sekai_schedule' })
export class SekaiSchedule extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  sekai_id: number;

  @Field()
  @Column('integer')
  last_sekai_id: number;

  @Field()
  @Column('integer')
  fix_reward_group_id: number;

  @Field()
  @Column('integer')
  damage_rank_id: number;

  @Field()
  @Column('text')
  teaser_time: string;

  @Field()
  @Column('text')
  start_time: string;

  @Field()
  @Column('text')
  count_start_time: string;

  @Field()
  @Column('text')
  end_time: string;

  @Field()
  @Column('text')
  end_losstime: string;

  @Field()
  @Column('text')
  result_end: string;

}

