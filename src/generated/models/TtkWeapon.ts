import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'ttk_weapon' })
export class TtkWeapon extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  ttk_weapon_id: number;

  @Field()
  @Column('integer')
  ttk_score: number;

  @Field()
  @Column('text')
  name: string;

}

