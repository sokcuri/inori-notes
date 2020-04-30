import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'ailment_data' })
export class AilmentData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  ailment_id: number;

  @Field()
  @Column('integer')
  ailment_action: number;

  @Field()
  @Column('integer')
  ailment_detail_1: number;

  @Field()
  @Column('text')
  ailment_name: string;

}

