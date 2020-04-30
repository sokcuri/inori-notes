import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'quest_area_data' })
export class QuestAreaData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  area_id: number;

  @Field()
  @Column('text')
  area_name: string;

  @Field()
  @Column('text')
  area_display_name: string;

  @Field()
  @Column('integer')
  map_type: number;

  @Field()
  @Column('text')
  sheet_id: string;

  @Field()
  @Column('text')
  que_id: string;

  @Field()
  @Column('text')
  start_time: string;

  @Field()
  @Column('text')
  end_time: string;

}

