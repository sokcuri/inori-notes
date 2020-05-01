import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'ttk_weapon' })
export class TtkWeapon extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'ttk_weapon_id', type: 'integer' })
  ttkWeaponId: number;

  @Field(type => Int)
  @Column({ name: 'ttk_score', type: 'integer' })
  ttkScore: number;

  @Field(type => String)
  @Column({ name: 'name', type: 'text' })
  name: string;

}

