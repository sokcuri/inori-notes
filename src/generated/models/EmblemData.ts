import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'emblem_data' })
export class EmblemData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'emblem_id', type: 'integer' })
  emblemId: number;

  @Field()
  @Column({ name: 'disp_oder', type: 'integer' })
  dispOder: number;

  @Field()
  @Column({ name: 'type', type: 'integer' })
  type: number;

  @Field()
  @Column({ name: 'emblem_name', type: 'text' })
  emblemName: string;

  @Field()
  @Column({ name: 'description_mission_id', type: 'integer' })
  descriptionMissionId: number;

  @Field()
  @Column({ name: 'event_emblem', type: 'integer' })
  eventEmblem: number;

  @Field()
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field()
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

}

