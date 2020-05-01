import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'music_list' })
export class MusicList extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'music_id', type: 'integer' })
  musicId: number;

  @Field(type => String)
  @Column({ name: 'list_name', type: 'text' })
  listName: string;

  @Field(type => Float)
  @Column({ name: 'font_size', type: 'real' })
  fontSize: number;

  @Field(type => String)
  @Column({ name: 'pre_shop_start', type: 'text' })
  preShopStart: string;

  @Field(type => String)
  @Column({ name: 'shop_start', type: 'text' })
  shopStart: string;

  @Field(type => String)
  @Column({ name: 'shop_end', type: 'text' })
  shopEnd: string;

  @Field(type => Int)
  @Column({ name: 'story_id', type: 'integer' })
  storyId: number;

  @Field(type => Int)
  @Column({ name: 'cost_item_num', type: 'integer' })
  costItemNum: number;

  @Field(type => Int)
  @Column({ name: 'sort', type: 'integer' })
  sort: number;

  @Field(type => String)
  @Column({ name: 'kana', type: 'text' })
  kana: string;

  @Field(type => String)
  @Column({ name: 'ios_url', type: 'text' })
  iosUrl: string;

  @Field(type => String)
  @Column({ name: 'android_url', type: 'text' })
  androidUrl: string;

  @Field(type => String)
  @Column({ name: 'dmm_url', type: 'text' })
  dmmUrl: string;

}

