import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'sekai_schedule' })
export class SekaiSchedule extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'sekai_id', type: 'integer' })
  sekaiId: number;

  @Field()
  @Column({ name: 'last_sekai_id', type: 'integer' })
  lastSekaiId: number;

  @Field()
  @Column({ name: 'fix_reward_group_id', type: 'integer' })
  fixRewardGroupId: number;

  @Field()
  @Column({ name: 'damage_rank_id', type: 'integer' })
  damageRankId: number;

  @Field()
  @Column({ name: 'teaser_time', type: 'text' })
  teaserTime: string;

  @Field()
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field()
  @Column({ name: 'count_start_time', type: 'text' })
  countStartTime: string;

  @Field()
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

  @Field()
  @Column({ name: 'end_losstime', type: 'text' })
  endLosstime: string;

  @Field()
  @Column({ name: 'result_end', type: 'text' })
  resultEnd: string;

}

