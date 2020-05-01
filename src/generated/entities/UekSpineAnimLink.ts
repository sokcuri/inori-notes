import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'uek_spine_anim_link' })
export class UekSpineAnimLink extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'spine_id', type: 'integer' })
  spineId: number;

  @Field(type => Int)
  @Column({ name: 'anim_num', type: 'integer' })
  animNum: number;

}

