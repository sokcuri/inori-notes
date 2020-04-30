import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'still' })
export class Still extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  still_id: number;

  @Field()
  @Column('integer')
  story_group_id: number;

  @Field()
  @Column('integer')
  story_id: number;

  @Field()
  @Column('integer')
  still_group_id: number;

  @Field()
  @Column('integer')
  vertical_still_flg: number;

  @Field()
  @Column('integer')
  position_y: number;

  @Field()
  @Column('integer')
  unit_id_1: number;

  @Field()
  @Column('integer')
  unit_id_2: number;

  @Field()
  @Column('integer')
  unit_id_3: number;

  @Field()
  @Column('integer')
  unit_id_4: number;

  @Field()
  @Column('integer')
  unit_id_5: number;

  @Field()
  @Column('integer')
  unit_id_6: number;

  @Field()
  @Column('integer')
  unit_id_7: number;

  @Field()
  @Column('integer')
  unit_id_8: number;

  @Field()
  @Column('integer')
  unit_id_9: number;

  @Field()
  @Column('integer')
  unit_id_10: number;

  @Field()
  @Column('integer')
  facial_id: number;

  @Field()
  @Column('integer')
  album_ignore: number;

}

