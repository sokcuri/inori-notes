import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'dear_chara' })
export class DearChara extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  event_id: number;

  @Field(type => ID)
  @PrimaryColumn('integer')
  chara_index: number;

  @Field()
  @Column('text')
  chara_name: string;

  @Field()
  @Column('integer')
  max_dear_point: number;

  @Field()
  @Column('integer')
  reference_type: number;

  @Field()
  @Column('integer')
  reference_id: number;

  @Field()
  @Column('integer')
  episode_unlock_offset_x: number;

  @Field()
  @Column('integer')
  episode_unlock_offset_y: number;

  @Field()
  @Column('integer')
  dear_point_up_offset_x: number;

  @Field()
  @Column('integer')
  dear_point_up_offset_y: number;

}

