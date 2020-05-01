import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_bg_change_data' })
export class HatsuneBgChangeData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => Int)
  @Column({ name: 'area_id', type: 'integer' })
  areaId: number;

  @Field(type => Int)
  @Column({ name: 'condition_type', type: 'integer' })
  conditionType: number;

  @Field(type => Int)
  @Column({ name: 'condition_id', type: 'integer' })
  conditionId: number;

  @Field(type => Int)
  @Column({ name: 'target_type', type: 'integer' })
  targetType: number;

  @Field(type => Int)
  @Column({ name: 'bg_after_change_id', type: 'integer' })
  bgAfterChangeId: number;

}

