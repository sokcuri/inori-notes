import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'unit_enemy_data' })
export class UnitEnemyData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'unit_id', type: 'integer' })
  unitId: number;

  @Field(type => String)
  @Column({ name: 'unit_name', type: 'text' })
  unitName: string;

  @Field(type => Int)
  @Column({ name: 'prefab_id', type: 'integer' })
  prefabId: number;

  @Field(type => Int)
  @Column({ name: 'motion_type', type: 'integer' })
  motionType: number;

  @Field(type => Int)
  @Column({ name: 'se_type', type: 'integer' })
  seType: number;

  @Field(type => Int)
  @Column({ name: 'move_speed', type: 'integer' })
  moveSpeed: number;

  @Field(type => Int)
  @Column({ name: 'search_area_width', type: 'integer' })
  searchAreaWidth: number;

  @Field(type => Int)
  @Column({ name: 'atk_type', type: 'integer' })
  atkType: number;

  @Field(type => Float)
  @Column({ name: 'normal_atk_cast_time', type: 'real' })
  normalAtkCastTime: number;

  @Field(type => Int)
  @Column({ name: 'cutin', type: 'integer' })
  cutin: number;

  @Field(type => Int)
  @Column({ name: 'cutin_star6', type: 'integer' })
  cutinStar6: number;

  @Field(type => Int)
  @Column({ name: 'visual_change_flag', type: 'integer' })
  visualChangeFlag: number;

  @Field(type => String)
  @Column({ name: 'comment', type: 'text' })
  comment: string;

  @Field(type => [Int])
  get cutinStar() {
    return [this.cutinStar6];
  }

}

