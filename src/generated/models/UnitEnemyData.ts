import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'unit_enemy_data' })
export class UnitEnemyData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  unit_id: number;

  @Field()
  @Column('text')
  unit_name: string;

  @Field()
  @Column('integer')
  prefab_id: number;

  @Field()
  @Column('integer')
  motion_type: number;

  @Field()
  @Column('integer')
  se_type: number;

  @Field()
  @Column('integer')
  move_speed: number;

  @Field()
  @Column('integer')
  search_area_width: number;

  @Field()
  @Column('integer')
  atk_type: number;

  @Field()
  @Column('real')
  normal_atk_cast_time: number;

  @Field()
  @Column('integer')
  cutin: number;

  @Field()
  @Column('integer')
  cutin_star6: number;

  @Field()
  @Column('integer')
  visual_change_flag: number;

  @Field()
  @Column('text')
  comment: string;

}

