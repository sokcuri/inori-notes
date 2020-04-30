import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'position_setting' })
export class PositionSetting extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  position_setting_id: number;

  @Field()
  @Column('integer')
  front: number;

  @Field()
  @Column('integer')
  middle: number;

}

