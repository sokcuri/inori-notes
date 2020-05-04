import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'specialfes_banner' })
export class SpecialfesBanner extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'gacha_id', type: 'integer' })
  gachaId: number;

  @Field(type => Int)
  @Column({ name: 'banner_id_1', type: 'integer' })
  bannerId1: number;

  @Field(type => Int)
  @Column({ name: 'banner_id_2', type: 'integer' })
  bannerId2: number;

  @Field(type => Int)
  @Column({ name: 'banner_id_3', type: 'integer' })
  bannerId3: number;

  @Field(type => Int)
  @Column({ name: 'banner_id_4', type: 'integer' })
  bannerId4: number;

  @Field(type => Int)
  @Column({ name: 'banner_id_5', type: 'integer' })
  bannerId5: number;

  @Field(type => Int)
  @Column({ name: 'banner_id_6', type: 'integer' })
  bannerId6: number;

  @Field(type => Int)
  @Column({ name: 'banner_id_7', type: 'integer' })
  bannerId7: number;

  @Field(type => Int)
  @Column({ name: 'banner_id_8', type: 'integer' })
  bannerId8: number;

  @Field(type => Int)
  @Column({ name: 'banner_id_9', type: 'integer' })
  bannerId9: number;

  @Field(type => Int)
  @Column({ name: 'banner_id_10', type: 'integer' })
  bannerId10: number;

  @Field(type => [Int])
  get bannerId() {
    return [this.bannerId1, this.bannerId2, this.bannerId3, this.bannerId4, this.bannerId5, this.bannerId6, this.bannerId7, this.bannerId8, this.bannerId9, this.bannerId10];
  }

}

