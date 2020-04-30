import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'uek_drama' })
export class UekDrama extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  command_id: number;

  @Field()
  @Column('integer')
  drama_id: number;

  @Field()
  @Column('integer')
  command_type: number;

  @Field()
  @Column('text')
  param_01: string;

  @Field()
  @Column('text')
  param_02: string;

  @Field()
  @Column('text')
  param_03: string;

  @Field()
  @Column('text')
  param_04: string;

  @Field()
  @Column('text')
  param_05: string;

  @Field()
  @Column('text')
  param_06: string;

  @Field()
  @Column('text')
  param_07: string;

  @Field()
  @Column('text')
  param_08: string;

}

