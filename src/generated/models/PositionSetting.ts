import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'position_setting' })
export class PositionSetting extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'position_setting_id', type: 'integer' })
  positionSettingId: number;

  @Field()
  @Column({ name: 'front', type: 'integer' })
  front: number;

  @Field()
  @Column({ name: 'middle', type: 'integer' })
  middle: number;

}

