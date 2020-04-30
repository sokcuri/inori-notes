import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'ttk_enemy' })
export class TtkEnemy extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  enemy_id: number;

  @Field()
  @Column('integer')
  score: number;

  @Field()
  @Column('integer')
  coin: number;

  @Field()
  @Column('integer')
  max: number;

}

