import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'pct_gaming_motion' })
export class PctGamingMotion extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  motion_id: number;

  @Field()
  @Column('integer')
  perfect_count: number;

  @Field()
  @Column('integer')
  good_count: number;

  @Field()
  @Column('integer')
  nice_count: number;

  @Field()
  @Column('integer')
  point: number;

}

