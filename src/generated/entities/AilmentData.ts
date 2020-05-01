import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'ailment_data' })
export class AilmentData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'ailment_id', type: 'integer' })
  ailmentId: number;

  @Field()
  @Column({ name: 'ailment_action', type: 'integer' })
  ailmentAction: number;

  @Field()
  @Column({ name: 'ailment_detail_1', type: 'integer' })
  ailmentDetail1: number;

  @Field()
  @Column({ name: 'ailment_name', type: 'text' })
  ailmentName: string;

}

