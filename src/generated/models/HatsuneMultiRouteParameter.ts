import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_multi_route_parameter' })
export class HatsuneMultiRouteParameter extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  quest_id: number;

  @Field()
  @Column('integer')
  type: number;

  @Field()
  @Column('integer')
  param_1: number;

  @Field()
  @Column('integer')
  param_2: number;

  @Field()
  @Column('integer')
  param_3: number;

  @Field()
  @Column('text')
  text_1: string;

}

