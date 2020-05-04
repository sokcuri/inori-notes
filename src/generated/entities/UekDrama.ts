import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'uek_drama' })
export class UekDrama extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'command_id', type: 'integer' })
  commandId: number;

  @Field(type => Int)
  @Column({ name: 'drama_id', type: 'integer' })
  dramaId: number;

  @Field(type => Int)
  @Column({ name: 'command_type', type: 'integer' })
  commandType: number;

  @Field(type => String)
  @Column({ name: 'param_01', type: 'text' })
  param01: string;

  @Field(type => String)
  @Column({ name: 'param_02', type: 'text' })
  param02: string;

  @Field(type => String)
  @Column({ name: 'param_03', type: 'text' })
  param03: string;

  @Field(type => String)
  @Column({ name: 'param_04', type: 'text' })
  param04: string;

  @Field(type => String)
  @Column({ name: 'param_05', type: 'text' })
  param05: string;

  @Field(type => String)
  @Column({ name: 'param_06', type: 'text' })
  param06: string;

  @Field(type => String)
  @Column({ name: 'param_07', type: 'text' })
  param07: string;

  @Field(type => String)
  @Column({ name: 'param_08', type: 'text' })
  param08: string;

  @Field(type => [String])
  get param() {
    return [this.param01, this.param02, this.param03, this.param04, this.param05, this.param06, this.param07, this.param08];
  }

}

