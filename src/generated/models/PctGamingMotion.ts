import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'pct_gaming_motion' })
export class PctGamingMotion extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'motion_id', type: 'integer' })
  motionId: number;

  @Field()
  @Column({ name: 'perfect_count', type: 'integer' })
  perfectCount: number;

  @Field()
  @Column({ name: 'good_count', type: 'integer' })
  goodCount: number;

  @Field()
  @Column({ name: 'nice_count', type: 'integer' })
  niceCount: number;

  @Field()
  @Column({ name: 'point', type: 'integer' })
  point: number;

}

