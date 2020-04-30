import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'fke_reward' })
export class FkeReward extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  fke_point: number;

  @Field()
  @Column('text')
  mission_detail: string;

  @Field()
  @Column('integer')
  reward_type_1: number;

  @Field()
  @Column('integer')
  reward_id_1: number;

  @Field()
  @Column('integer')
  reward_count_1: number;

  @Field()
  @Column('integer')
  reward_type_2: number;

  @Field()
  @Column('integer')
  reward_id_2: number;

  @Field()
  @Column('integer')
  reward_count_2: number;

  @Field()
  @Column('integer')
  reward_type_3: number;

  @Field()
  @Column('integer')
  reward_id_3: number;

  @Field()
  @Column('integer')
  reward_count_3: number;

  @Field()
  @Column('integer')
  reward_type_4: number;

  @Field()
  @Column('integer')
  reward_id_4: number;

  @Field()
  @Column('integer')
  reward_count_4: number;

  @Field()
  @Column('integer')
  reward_type_5: number;

  @Field()
  @Column('integer')
  reward_id_5: number;

  @Field()
  @Column('integer')
  reward_count_5: number;

}

