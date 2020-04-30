import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'room_item_announcement' })
export class RoomItemAnnouncement extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field()
  @Column({ name: 'announcement_start', type: 'text' })
  announcementStart: string;

  @Field()
  @Column({ name: 'announcement_end', type: 'text' })
  announcementEnd: string;

  @Field()
  @Column({ name: 'announcement_text', type: 'text' })
  announcementText: string;

}

