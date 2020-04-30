import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'hatsune_quiz_reward' })
export class HatsuneQuizReward extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  quiz_id: number;

  @Field()
  @Column('integer')
  reward_type_1: number;

  @Field()
  @Column('integer')
  reward_id_1: number;

  @Field()
  @Column('integer')
  reward_num_1: number;

  @Field()
  @Column('integer')
  reward_type_2: number;

  @Field()
  @Column('integer')
  reward_id_2: number;

  @Field()
  @Column('integer')
  reward_num_2: number;

  @Field()
  @Column('integer')
  reward_type_3: number;

  @Field()
  @Column('integer')
  reward_id_3: number;

  @Field()
  @Column('integer')
  reward_num_3: number;

  @Field()
  @Column('integer')
  reward_type_4: number;

  @Field()
  @Column('integer')
  reward_id_4: number;

  @Field()
  @Column('integer')
  reward_num_4: number;

  @Field()
  @Column('integer')
  reward_type_5: number;

  @Field()
  @Column('integer')
  reward_id_5: number;

  @Field()
  @Column('integer')
  reward_num_5: number;

}

