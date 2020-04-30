import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'voice_group' })
export class VoiceGroup extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'group_id', type: 'integer' })
  groupId: number;

  @Field()
  @Column({ name: 'group_id_comment', type: 'text' })
  groupIdComment: string;

  @Field()
  @Column({ name: 'group_unit_id_01', type: 'integer' })
  groupUnitId01: number;

  @Field()
  @Column({ name: 'group_unit_id_02', type: 'integer' })
  groupUnitId02: number;

  @Field()
  @Column({ name: 'group_unit_id_03', type: 'integer' })
  groupUnitId03: number;

  @Field()
  @Column({ name: 'group_unit_id_04', type: 'integer' })
  groupUnitId04: number;

  @Field()
  @Column({ name: 'group_unit_id_05', type: 'integer' })
  groupUnitId05: number;

}

