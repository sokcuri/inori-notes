import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'notif_data' })
export class NotifData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'unit_id', type: 'integer' })
  unitId: number;

  @Field(type => ID)
  @PrimaryColumn({ name: 'notif_type', type: 'integer' })
  notifType: number;

  @Field()
  @Column({ name: 'comment', type: 'text' })
  comment: string;

}

