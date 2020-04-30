import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'tower_area_data' })
export class TowerAreaData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  tower_area_id: number;

  @Field()
  @Column('integer')
  max_floor_num: number;

  @Field()
  @Column('integer')
  area_bg: number;

  @Field()
  @Column('text')
  tower_bgm: string;

  @Field()
  @Column('integer')
  cloister_quest_id: number;

}

