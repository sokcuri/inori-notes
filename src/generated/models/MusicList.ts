import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'music_list' })
export class MusicList extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'music_id', type: 'integer' })
  musicId: number;

  @Field()
  @Column({ name: 'list_name', type: 'text' })
  listName: string;

  @Field()
  @Column({ name: 'font_size', type: 'real' })
  fontSize: number;

  @Field()
  @Column({ name: 'pre_shop_start', type: 'text' })
  preShopStart: string;

  @Field()
  @Column({ name: 'shop_start', type: 'text' })
  shopStart: string;

  @Field()
  @Column({ name: 'shop_end', type: 'text' })
  shopEnd: string;

  @Field()
  @Column({ name: 'story_id', type: 'integer' })
  storyId: number;

  @Field()
  @Column({ name: 'cost_item_num', type: 'integer' })
  costItemNum: number;

  @Field()
  @Column({ name: 'sort', type: 'integer' })
  sort: number;

  @Field()
  @Column({ name: 'kana', type: 'text' })
  kana: string;

  @Field()
  @Column({ name: 'ios_url', type: 'text' })
  iosUrl: string;

  @Field()
  @Column({ name: 'android_url', type: 'text' })
  androidUrl: string;

  @Field()
  @Column({ name: 'dmm_url', type: 'text' })
  dmmUrl: string;

}

