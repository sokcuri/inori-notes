import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'ailment_data' })
export class AilmentData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'ailment_id', type: 'integer' })
  ailmentId: number;

  @Field(type => Int)
  @Column({ name: 'ailment_action', type: 'integer' })
  ailmentAction: number;

  @Field(type => Int)
  @Column({ name: 'ailment_detail_1', type: 'integer' })
  ailmentDetail1: number;

  @Field(type => String)
  @Column({ name: 'ailment_name', type: 'text' })
  ailmentName: string;

  @Field(type => [Int])
  get ailmentDetail() {
    return [this.ailmentDetail1];
  }

}

