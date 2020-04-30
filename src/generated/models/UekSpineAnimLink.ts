import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'uek_spine_anim_link' })
export class UekSpineAnimLink extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  spine_id: number;

  @Field()
  @Column('integer')
  anim_num: number;

}

