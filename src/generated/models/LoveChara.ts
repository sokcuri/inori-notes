import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'love_chara' })
export class LoveChara extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  love_level: number;

  @Field()
  @Column('integer')
  total_love: number;

  @Field()
  @Column('integer')
  unlocked_class: number;

  @Field()
  @Column('integer')
  rarity: number;

}

