import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'pct_system' })
export class PctSystem extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  pct_base_speed: number;

  @Field()
  @Column('integer')
  fever_point_max: number;

  @Field()
  @Column('integer')
  fever_time: number;

  @Field()
  @Column('integer')
  fever_revention_time: number;

  @Field()
  @Column('integer')
  pct_time: number;

  @Field()
  @Column('integer')
  chara1: number;

  @Field()
  @Column('integer')
  chara2: number;

  @Field()
  @Column('integer')
  chara1_gauge_choice: number;

  @Field()
  @Column('integer')
  chara2_gauge_choice: number;

}

