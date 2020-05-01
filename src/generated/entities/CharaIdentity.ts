import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'chara_identity' })
export class CharaIdentity extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'unit_id', type: 'integer' })
  unitId: number;

  @Field(type => Int)
  @Column({ name: 'chara_type', type: 'integer' })
  charaType: number;

}

