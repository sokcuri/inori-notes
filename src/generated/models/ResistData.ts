import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'resist_data' })
export class ResistData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  resist_status_id: number;

  @Field()
  @Column('integer')
  ailment_1: number;

  @Field()
  @Column('integer')
  ailment_2: number;

  @Field()
  @Column('integer')
  ailment_3: number;

  @Field()
  @Column('integer')
  ailment_4: number;

  @Field()
  @Column('integer')
  ailment_5: number;

  @Field()
  @Column('integer')
  ailment_6: number;

  @Field()
  @Column('integer')
  ailment_7: number;

  @Field()
  @Column('integer')
  ailment_8: number;

  @Field()
  @Column('integer')
  ailment_9: number;

  @Field()
  @Column('integer')
  ailment_10: number;

  @Field()
  @Column('integer')
  ailment_11: number;

  @Field()
  @Column('integer')
  ailment_12: number;

  @Field()
  @Column('integer')
  ailment_13: number;

  @Field()
  @Column('integer')
  ailment_14: number;

  @Field()
  @Column('integer')
  ailment_15: number;

  @Field()
  @Column('integer')
  ailment_16: number;

  @Field()
  @Column('integer')
  ailment_17: number;

  @Field()
  @Column('integer')
  ailment_18: number;

  @Field()
  @Column('integer')
  ailment_19: number;

  @Field()
  @Column('integer')
  ailment_20: number;

  @Field()
  @Column('integer')
  ailment_21: number;

  @Field()
  @Column('integer')
  ailment_22: number;

  @Field()
  @Column('integer')
  ailment_23: number;

  @Field()
  @Column('integer')
  ailment_24: number;

  @Field()
  @Column('integer')
  ailment_25: number;

  @Field()
  @Column('integer')
  ailment_26: number;

  @Field()
  @Column('integer')
  ailment_27: number;

  @Field()
  @Column('integer')
  ailment_28: number;

  @Field()
  @Column('integer')
  ailment_29: number;

  @Field()
  @Column('integer')
  ailment_30: number;

  @Field()
  @Column('integer')
  ailment_31: number;

  @Field()
  @Column('integer')
  ailment_32: number;

  @Field()
  @Column('integer')
  ailment_33: number;

  @Field()
  @Column('integer')
  ailment_34: number;

  @Field()
  @Column('integer')
  ailment_35: number;

  @Field()
  @Column('integer')
  ailment_36: number;

  @Field()
  @Column('integer')
  ailment_37: number;

  @Field()
  @Column('integer')
  ailment_38: number;

  @Field()
  @Column('integer')
  ailment_39: number;

  @Field()
  @Column('integer')
  ailment_40: number;

  @Field()
  @Column('integer')
  ailment_41: number;

  @Field()
  @Column('integer')
  ailment_42: number;

  @Field()
  @Column('integer')
  ailment_43: number;

  @Field()
  @Column('integer')
  ailment_44: number;

  @Field()
  @Column('integer')
  ailment_45: number;

  @Field()
  @Column('integer')
  ailment_46: number;

  @Field()
  @Column('integer')
  ailment_47: number;

  @Field()
  @Column('integer')
  ailment_48: number;

  @Field()
  @Column('integer')
  ailment_49: number;

  @Field()
  @Column('integer')
  ailment_50: number;

}

