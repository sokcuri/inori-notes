import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'voice_group_chara' })
export class VoiceGroupChara extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'group_unit_id', type: 'integer' })
  groupUnitId: number;

  @Field(type => String)
  @Column({ name: 'group_unit_id_comment', type: 'text' })
  groupUnitIdComment: string;

  @Field(type => Int)
  @Column({ name: 'unit_id_01', type: 'integer' })
  unitId01: number;

  @Field(type => Int)
  @Column({ name: 'unit_id_02', type: 'integer' })
  unitId02: number;

  @Field(type => Int)
  @Column({ name: 'unit_id_03', type: 'integer' })
  unitId03: number;

  @Field(type => Int)
  @Column({ name: 'unit_id_04', type: 'integer' })
  unitId04: number;

  @Field(type => Int)
  @Column({ name: 'unit_id_05', type: 'integer' })
  unitId05: number;

  @Field(type => Int)
  @Column({ name: 'unit_id_06', type: 'integer' })
  unitId06: number;

  @Field(type => Int)
  @Column({ name: 'unit_id_07', type: 'integer' })
  unitId07: number;

  @Field(type => Int)
  @Column({ name: 'unit_id_08', type: 'integer' })
  unitId08: number;

  @Field(type => Int)
  @Column({ name: 'unit_id_09', type: 'integer' })
  unitId09: number;

  @Field(type => Int)
  @Column({ name: 'unit_id_10', type: 'integer' })
  unitId10: number;

}

