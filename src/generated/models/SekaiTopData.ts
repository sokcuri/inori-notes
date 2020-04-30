import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'sekai_top_data' })
export class SekaiTopData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  sekai_id: number;

  @Field()
  @Column('text')
  name: string;

  @Field()
  @Column('text')
  description: string;

  @Field()
  @Column('integer')
  top_bg: number;

  @Field()
  @Column('integer')
  position_x: number;

  @Field()
  @Column('integer')
  position_y: number;

  @Field()
  @Column('real')
  scale_ratio: number;

  @Field()
  @Column('text')
  sheet_id: string;

  @Field()
  @Column('text')
  que_id: string;

  @Field()
  @Column('integer')
  boss_mode: number;

  @Field()
  @Column('integer')
  sekai_boss_mode_id: number;

  @Field()
  @Column('text')
  boss_hp_from: string;

  @Field()
  @Column('text')
  boss_hp_to: string;

  @Field()
  @Column('text')
  boss_time_from: string;

  @Field()
  @Column('text')
  boss_time_to: string;

  @Field()
  @Column('integer')
  duration: number;

  @Field()
  @Column('integer')
  story_id: number;

}

