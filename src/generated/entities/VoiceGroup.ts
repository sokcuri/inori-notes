import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'voice_group' })
export class VoiceGroup extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'group_id', type: 'integer' })
  groupId: number;

  @Field(type => String)
  @Column({ name: 'group_id_comment', type: 'text' })
  groupIdComment: string;

  @Field(type => Int)
  @Column({ name: 'group_unit_id_01', type: 'integer' })
  groupUnitId01: number;

  @Field(type => Int)
  @Column({ name: 'group_unit_id_02', type: 'integer' })
  groupUnitId02: number;

  @Field(type => Int)
  @Column({ name: 'group_unit_id_03', type: 'integer' })
  groupUnitId03: number;

  @Field(type => Int)
  @Column({ name: 'group_unit_id_04', type: 'integer' })
  groupUnitId04: number;

  @Field(type => Int)
  @Column({ name: 'group_unit_id_05', type: 'integer' })
  groupUnitId05: number;

  @Field(type => [Int])
  get groupUnitId() {
    return [this.groupUnitId01, this.groupUnitId02, this.groupUnitId03, this.groupUnitId04, this.groupUnitId05];
  }

}

