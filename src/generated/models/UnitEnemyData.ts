import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'unit_enemy_data' })
export class UnitEnemyData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'unit_id', type: 'integer' })
  unitId: number;

  @Field()
  @Column({ name: 'unit_name', type: 'text' })
  unitName: string;

  @Field()
  @Column({ name: 'prefab_id', type: 'integer' })
  prefabId: number;

  @Field()
  @Column({ name: 'motion_type', type: 'integer' })
  motionType: number;

  @Field()
  @Column({ name: 'se_type', type: 'integer' })
  seType: number;

  @Field()
  @Column({ name: 'move_speed', type: 'integer' })
  moveSpeed: number;

  @Field()
  @Column({ name: 'search_area_width', type: 'integer' })
  searchAreaWidth: number;

  @Field()
  @Column({ name: 'atk_type', type: 'integer' })
  atkType: number;

  @Field()
  @Column({ name: 'normal_atk_cast_time', type: 'real' })
  normalAtkCastTime: number;

  @Field()
  @Column({ name: 'cutin', type: 'integer' })
  cutin: number;

  @Field()
  @Column({ name: 'cutin_star6', type: 'integer' })
  cutinStar6: number;

  @Field()
  @Column({ name: 'visual_change_flag', type: 'integer' })
  visualChangeFlag: number;

  @Field()
  @Column({ name: 'comment', type: 'text' })
  comment: string;

}

