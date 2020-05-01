import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'emblem_data' })
export class EmblemData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'emblem_id', type: 'integer' })
  emblemId: number;

  @Field(type => Int)
  @Column({ name: 'disp_oder', type: 'integer' })
  dispOder: number;

  @Field(type => Int)
  @Column({ name: 'type', type: 'integer' })
  type: number;

  @Field(type => String)
  @Column({ name: 'emblem_name', type: 'text' })
  emblemName: string;

  @Field(type => Int)
  @Column({ name: 'description_mission_id', type: 'integer' })
  descriptionMissionId: number;

  @Field(type => Int)
  @Column({ name: 'event_emblem', type: 'integer' })
  eventEmblem: number;

  @Field(type => String)
  @Column({ name: 'start_time', type: 'text' })
  startTime: string;

  @Field(type => String)
  @Column({ name: 'end_time', type: 'text' })
  endTime: string;

}

