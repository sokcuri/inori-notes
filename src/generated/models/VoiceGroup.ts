import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'voice_group' })
export class VoiceGroup extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  group_id: number;

  @Field()
  @Column('text')
  group_id_comment: string;

  @Field()
  @Column('integer')
  group_unit_id_01: number;

  @Field()
  @Column('integer')
  group_unit_id_02: number;

  @Field()
  @Column('integer')
  group_unit_id_03: number;

  @Field()
  @Column('integer')
  group_unit_id_04: number;

  @Field()
  @Column('integer')
  group_unit_id_05: number;

}

