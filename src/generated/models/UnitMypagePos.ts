import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'unit_mypage_pos' })
export class UnitMypagePos extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'id', type: 'integer' })
  id: number;

  @Field()
  @Column({ name: 'pos_x', type: 'real' })
  posX: number;

  @Field()
  @Column({ name: 'pos_y', type: 'real' })
  posY: number;

  @Field()
  @Column({ name: 'scale', type: 'real' })
  scale: number;

}

