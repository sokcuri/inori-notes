import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'content_map_data' })
export class ContentMapData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  content_map_id: number;

  @Field()
  @Column('text')
  name: string;

  @Field()
  @Column('integer')
  map_type: number;

  @Field()
  @Column('integer')
  area_id: number;

  @Field()
  @Column('integer')
  condition_quest_id: number;

  @Field()
  @Column('integer')
  quest_position_x: number;

  @Field()
  @Column('integer')
  quest_position_y: number;

  @Field()
  @Column('integer')
  icon_id: number;

  @Field()
  @Column('integer')
  system_id: number;

  @Field()
  @Column('text')
  start_time: string;

  @Field()
  @Column('text')
  end_time: string;

}

