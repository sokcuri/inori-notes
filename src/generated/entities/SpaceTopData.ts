import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'space_top_data' })
export class SpaceTopData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => Int)
  @Column({ name: 'space_id', type: 'integer' })
  spaceId: number;

  @Field(type => Int)
  @Column({ name: 'space_battle_id', type: 'integer' })
  spaceBattleId: number;

  @Field(type => Int)
  @Column({ name: 'part_flag', type: 'integer' })
  partFlag: number;

  @Field(type => Int)
  @Column({ name: 'story_id', type: 'integer' })
  storyId: number;

  @Field(type => String)
  @Column({ name: 'time_from', type: 'text' })
  timeFrom: string;

  @Field(type => String)
  @Column({ name: 'time_to', type: 'text' })
  timeTo: string;

  @Field(type => String)
  @Column({ name: 'skip_battle_time', type: 'text' })
  skipBattleTime: string;

  @Field(type => String)
  @Column({ name: 'name', type: 'text' })
  name: string;

}

