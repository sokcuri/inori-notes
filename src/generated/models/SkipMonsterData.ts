import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'skip_monster_data' })
export class SkipMonsterData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'quest_id', type: 'integer' })
  questId: number;

  @Field()
  @Column({ name: 'area_id', type: 'integer' })
  areaId: number;

  @Field()
  @Column({ name: 'quest_name', type: 'text' })
  questName: string;

  @Field()
  @Column({ name: 'wave_group_id_1', type: 'integer' })
  waveGroupId1: number;

  @Field()
  @Column({ name: 'bg_skip_id', type: 'integer' })
  bgSkipId: number;

}

