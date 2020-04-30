import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'skip_boss_data' })
export class SkipBossData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  boss_id: number;

  @Field()
  @Column('integer')
  skip_motion_id: number;

  @Field()
  @Column('integer')
  skip_bg_id: number;

  @Field()
  @Column('integer')
  skip_position_x: number;

  @Field()
  @Column('integer')
  skip_position_y: number;

  @Field()
  @Column('real')
  skip_scale_x: number;

  @Field()
  @Column('real')
  skip_scale_y: number;

}

