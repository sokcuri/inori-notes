import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'ttk_weapon' })
export class TtkWeapon extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'ttk_weapon_id', type: 'integer' })
  ttkWeaponId: number;

  @Field()
  @Column({ name: 'ttk_score', type: 'integer' })
  ttkScore: number;

  @Field()
  @Column({ name: 'name', type: 'text' })
  name: string;

}

