import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'space_top_data' })
export class SpaceTopData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  space_id: number;

  @Field()
  @Column('integer')
  space_battle_id: number;

  @Field()
  @Column('integer')
  part_flag: number;

  @Field()
  @Column('integer')
  story_id: number;

  @Field()
  @Column('text')
  time_from: string;

  @Field()
  @Column('text')
  time_to: string;

  @Field()
  @Column('text')
  skip_battle_time: string;

  @Field()
  @Column('text')
  name: string;

}

