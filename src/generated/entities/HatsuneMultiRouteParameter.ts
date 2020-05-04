import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_multi_route_parameter' })
export class HatsuneMultiRouteParameter extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field(type => Int)
  @Column({ name: 'quest_id', type: 'integer' })
  questId: number;

  @Field(type => Int)
  @Column({ name: 'type', type: 'integer' })
  type: number;

  @Field(type => Int)
  @Column({ name: 'param_1', type: 'integer' })
  param1: number;

  @Field(type => Int)
  @Column({ name: 'param_2', type: 'integer' })
  param2: number;

  @Field(type => Int)
  @Column({ name: 'param_3', type: 'integer' })
  param3: number;

  @Field(type => String)
  @Column({ name: 'text_1', type: 'text' })
  text1: string;

  @Field(type => [Int])
  get param() {
    return [this.param1, this.param2, this.param3];
  }

}

