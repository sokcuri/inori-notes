import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_multi_route_parameter' })
export class HatsuneMultiRouteParameter extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field()
  @Column({ name: 'quest_id', type: 'integer' })
  questId: number;

  @Field()
  @Column({ name: 'type', type: 'integer' })
  type: number;

  @Field()
  @Column({ name: 'param_1', type: 'integer' })
  param1: number;

  @Field()
  @Column({ name: 'param_2', type: 'integer' })
  param2: number;

  @Field()
  @Column({ name: 'param_3', type: 'integer' })
  param3: number;

  @Field()
  @Column({ name: 'text_1', type: 'text' })
  text1: string;

}

