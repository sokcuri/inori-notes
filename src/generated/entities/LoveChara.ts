import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'love_chara' })
export class LoveChara extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'love_level', type: 'integer' })
  loveLevel: number;

  @Field(type => Int)
  @Column({ name: 'total_love', type: 'integer' })
  totalLove: number;

  @Field(type => Int)
  @Column({ name: 'unlocked_class', type: 'integer' })
  unlockedClass: number;

  @Field(type => Int)
  @Column({ name: 'rarity', type: 'integer' })
  rarity: number;

}

