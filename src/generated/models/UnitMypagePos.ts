import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'unit_mypage_pos' })
export class UnitMypagePos extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('real')
  pos_x: number;

  @Field()
  @Column('real')
  pos_y: number;

  @Field()
  @Column('real')
  scale: number;

}

