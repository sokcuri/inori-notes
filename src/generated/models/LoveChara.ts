import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'love_chara' })
export class LoveChara extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'love_level', type: 'integer' })
  loveLevel: number;

  @Field()
  @Column({ name: 'total_love', type: 'integer' })
  totalLove: number;

  @Field()
  @Column({ name: 'unlocked_class', type: 'integer' })
  unlockedClass: number;

  @Field()
  @Column({ name: 'rarity', type: 'integer' })
  rarity: number;

}

