import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'chara_story_status' })
export class CharaStoryStatus extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  story_id: number;

  @Field()
  @Column('text')
  unlock_story_name: string;

  @Field()
  @Column('integer')
  status_type_1: number;

  @Field()
  @Column('integer')
  status_rate_1: number;

  @Field()
  @Column('integer')
  status_type_2: number;

  @Field()
  @Column('integer')
  status_rate_2: number;

  @Field()
  @Column('integer')
  status_type_3: number;

  @Field()
  @Column('integer')
  status_rate_3: number;

  @Field()
  @Column('integer')
  status_type_4: number;

  @Field()
  @Column('integer')
  status_rate_4: number;

  @Field()
  @Column('integer')
  status_type_5: number;

  @Field()
  @Column('integer')
  status_rate_5: number;

  @Field()
  @Column('integer')
  chara_id_1: number;

  @Field()
  @Column('integer')
  chara_id_2: number;

  @Field()
  @Column('integer')
  chara_id_3: number;

  @Field()
  @Column('integer')
  chara_id_4: number;

  @Field()
  @Column('integer')
  chara_id_5: number;

  @Field()
  @Column('integer')
  chara_id_6: number;

  @Field()
  @Column('integer')
  chara_id_7: number;

  @Field()
  @Column('integer')
  chara_id_8: number;

  @Field()
  @Column('integer')
  chara_id_9: number;

  @Field()
  @Column('integer')
  chara_id_10: number;

}

