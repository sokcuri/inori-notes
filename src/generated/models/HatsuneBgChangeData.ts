import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_bg_change_data' })
export class HatsuneBgChangeData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  area_id: number;

  @Field()
  @Column('integer')
  condition_type: number;

  @Field()
  @Column('integer')
  condition_id: number;

  @Field()
  @Column('integer')
  target_type: number;

  @Field()
  @Column('integer')
  bg_after_change_id: number;

}

