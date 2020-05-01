import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'sekai_schedule' })
export class SekaiSchedule extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'sekai_id', type: 'integer' })
  sekaiId: number;

  @Field(type => Int)
  @Column({ name: 'last_sekai_id', type: 'integer' })
  lastSekaiId: number;

  @Field(type => Int)
  @Column({ name: 'fix_reward_group_id', type: 'integer' })
  fixRewardGroupId: number;

  @Field(type => Int)
  @Column({ name: 'damage_rank_id', type: 'integer' })
  damageRankId: number;

  @Field(type => String)
  @Column({ name: 'teaser_time', type: 'text' })
  teaserTime: string;

  @Field(type => String)
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field(type => String)
  @Column({ name: 'count_start_time', type: 'text' })
  countStartTime: string;

  @Field(type => String)
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

  @Field(type => String)
  @Column({ name: 'end_losstime', type: 'text' })
  endLosstime: string;

  @Field(type => String)
  @Column({ name: 'result_end', type: 'text' })
  resultEnd: string;

}

