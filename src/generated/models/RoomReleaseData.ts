import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'room_release_data' })
export class RoomReleaseData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  system_id: number;

  @Field()
  @Column('integer')
  story_id: number;

  @Field()
  @Column('integer')
  pre_story_id: number;

}

