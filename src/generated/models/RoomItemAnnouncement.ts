import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'room_item_announcement' })
export class RoomItemAnnouncement extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('text')
  announcement_start: string;

  @Field()
  @Column('text')
  announcement_end: string;

  @Field()
  @Column('text')
  announcement_text: string;

}

