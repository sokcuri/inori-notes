import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'space_top_data' })
export class SpaceTopData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field()
  @Column({ name: 'space_id', type: 'integer' })
  spaceId: number;

  @Field()
  @Column({ name: 'space_battle_id', type: 'integer' })
  spaceBattleId: number;

  @Field()
  @Column({ name: 'part_flag', type: 'integer' })
  partFlag: number;

  @Field()
  @Column({ name: 'story_id', type: 'integer' })
  storyId: number;

  @Field()
  @Column({ name: 'time_from', type: 'text' })
  timeFrom: string;

  @Field()
  @Column({ name: 'time_to', type: 'text' })
  timeTo: string;

  @Field()
  @Column({ name: 'skip_battle_time', type: 'text' })
  skipBattleTime: string;

  @Field()
  @Column({ name: 'name', type: 'text' })
  name: string;

}

