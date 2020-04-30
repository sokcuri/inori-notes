import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'emblem_data' })
export class EmblemData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  emblem_id: number;

  @Field()
  @Column('integer')
  disp_oder: number;

  @Field()
  @Column('integer')
  type: number;

  @Field()
  @Column('text')
  emblem_name: string;

  @Field()
  @Column('integer')
  description_mission_id: number;

  @Field()
  @Column('integer')
  event_emblem: number;

  @Field()
  @Column('text')
  start_time: string;

  @Field()
  @Column('text')
  end_time: string;

}

