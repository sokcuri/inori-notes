import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'enemy_m_parts' })
export class EnemyMParts extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  enemy_id: number;

  @Field()
  @Column('text')
  name: string;

  @Field()
  @Column('integer')
  child_enemy_parameter_1: number;

  @Field()
  @Column('integer')
  child_enemy_parameter_2: number;

  @Field()
  @Column('integer')
  child_enemy_parameter_3: number;

  @Field()
  @Column('integer')
  child_enemy_parameter_4: number;

  @Field()
  @Column('integer')
  child_enemy_parameter_5: number;

}

