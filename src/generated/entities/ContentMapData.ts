import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'content_map_data' })
export class ContentMapData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'content_map_id', type: 'integer' })
  contentMapId: number;

  @Field()
  @Column({ name: 'name', type: 'text' })
  name: string;

  @Field()
  @Column({ name: 'map_type', type: 'integer' })
  mapType: number;

  @Field()
  @Column({ name: 'area_id', type: 'integer' })
  areaId: number;

  @Field()
  @Column({ name: 'condition_quest_id', type: 'integer' })
  conditionQuestId: number;

  @Field()
  @Column({ name: 'quest_position_x', type: 'integer' })
  questPositionX: number;

  @Field()
  @Column({ name: 'quest_position_y', type: 'integer' })
  questPositionY: number;

  @Field()
  @Column({ name: 'icon_id', type: 'integer' })
  iconId: number;

  @Field()
  @Column({ name: 'system_id', type: 'integer' })
  systemId: number;

  @Field()
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field()
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

}

