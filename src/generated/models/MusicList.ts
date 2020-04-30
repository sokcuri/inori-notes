import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'music_list' })
export class MusicList extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  music_id: number;

  @Field()
  @Column('text')
  list_name: string;

  @Field()
  @Column('real')
  font_size: number;

  @Field()
  @Column('text')
  pre_shop_start: string;

  @Field()
  @Column('text')
  shop_start: string;

  @Field()
  @Column('text')
  shop_end: string;

  @Field()
  @Column('integer')
  story_id: number;

  @Field()
  @Column('integer')
  cost_item_num: number;

  @Field()
  @Column('integer')
  sort: number;

  @Field()
  @Column('text')
  kana: string;

  @Field()
  @Column('text')
  ios_url: string;

  @Field()
  @Column('text')
  android_url: string;

  @Field()
  @Column('text')
  dmm_url: string;

}

