import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'voice_group_chara' })
export class VoiceGroupChara extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  group_unit_id: number;

  @Field()
  @Column('text')
  group_unit_id_comment: string;

  @Field()
  @Column('integer')
  unit_id_01: number;

  @Field()
  @Column('integer')
  unit_id_02: number;

  @Field()
  @Column('integer')
  unit_id_03: number;

  @Field()
  @Column('integer')
  unit_id_04: number;

  @Field()
  @Column('integer')
  unit_id_05: number;

  @Field()
  @Column('integer')
  unit_id_06: number;

  @Field()
  @Column('integer')
  unit_id_07: number;

  @Field()
  @Column('integer')
  unit_id_08: number;

  @Field()
  @Column('integer')
  unit_id_09: number;

  @Field()
  @Column('integer')
  unit_id_10: number;

}

