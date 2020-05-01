import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'return_specialfes_banner' })
export class ReturnSpecialfesBanner extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'gacha_id', type: 'integer' })
  gachaId: number;

  @Field()
  @Column({ name: 'banner_id_1', type: 'integer' })
  bannerId1: number;

  @Field()
  @Column({ name: 'banner_id_2', type: 'integer' })
  bannerId2: number;

  @Field()
  @Column({ name: 'banner_id_3', type: 'integer' })
  bannerId3: number;

  @Field()
  @Column({ name: 'banner_id_4', type: 'integer' })
  bannerId4: number;

  @Field()
  @Column({ name: 'banner_id_5', type: 'integer' })
  bannerId5: number;

  @Field()
  @Column({ name: 'banner_id_6', type: 'integer' })
  bannerId6: number;

  @Field()
  @Column({ name: 'banner_id_7', type: 'integer' })
  bannerId7: number;

  @Field()
  @Column({ name: 'banner_id_8', type: 'integer' })
  bannerId8: number;

  @Field()
  @Column({ name: 'banner_id_9', type: 'integer' })
  bannerId9: number;

  @Field()
  @Column({ name: 'banner_id_10', type: 'integer' })
  bannerId10: number;

}

