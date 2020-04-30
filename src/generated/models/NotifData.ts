import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'notif_data' })
export class NotifData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  unit_id: number;

  @Field(type => ID)
  @PrimaryColumn('integer')
  notif_type: number;

  @Field()
  @Column('text')
  comment: string;

}

