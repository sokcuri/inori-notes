import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_special_enemy' })
export class HatsuneSpecialEnemy extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  enemy_id: number;

  @Field()
  @Column('integer')
  event_id: number;

  @Field()
  @Column('integer')
  mode: number;

  @Field()
  @Column('integer')
  enemy_point: number;

  @Field()
  @Column('integer')
  initial_position: number;

  @Field()
  @Column('integer')
  order: number;

}

