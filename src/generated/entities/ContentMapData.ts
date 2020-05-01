import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'content_map_data' })
export class ContentMapData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'content_map_id', type: 'integer' })
  contentMapId: number;

  @Field(type => String)
  @Column({ name: 'name', type: 'text' })
  name: string;

  @Field(type => Int)
  @Column({ name: 'map_type', type: 'integer' })
  mapType: number;

  @Field(type => Int)
  @Column({ name: 'area_id', type: 'integer' })
  areaId: number;

  @Field(type => Int)
  @Column({ name: 'condition_quest_id', type: 'integer' })
  conditionQuestId: number;

  @Field(type => Int)
  @Column({ name: 'quest_position_x', type: 'integer' })
  questPositionX: number;

  @Field(type => Int)
  @Column({ name: 'quest_position_y', type: 'integer' })
  questPositionY: number;

  @Field(type => Int)
  @Column({ name: 'icon_id', type: 'integer' })
  iconId: number;

  @Field(type => Int)
  @Column({ name: 'system_id', type: 'integer' })
  systemId: number;

  @Field(type => String)
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field(type => String)
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

}

