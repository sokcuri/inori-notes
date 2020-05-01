import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'tower_area_data' })
export class TowerAreaData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'tower_area_id', type: 'integer' })
  towerAreaId: number;

  @Field(type => Int)
  @Column({ name: 'max_floor_num', type: 'integer' })
  maxFloorNum: number;

  @Field(type => Int)
  @Column({ name: 'area_bg', type: 'integer' })
  areaBg: number;

  @Field(type => String)
  @Column({ name: 'tower_bgm', type: 'text' })
  towerBgm: string;

  @Field(type => Int)
  @Column({ name: 'cloister_quest_id', type: 'integer' })
  cloisterQuestId: number;

}

