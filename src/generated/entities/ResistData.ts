import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'resist_data' })
export class ResistData extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn({ name: 'resist_status_id', type: 'integer' })
  resistStatusId: number;

  @Field(type => Int)
  @Column({ name: 'ailment_1', type: 'integer' })
  ailment1: number;

  @Field(type => Int)
  @Column({ name: 'ailment_2', type: 'integer' })
  ailment2: number;

  @Field(type => Int)
  @Column({ name: 'ailment_3', type: 'integer' })
  ailment3: number;

  @Field(type => Int)
  @Column({ name: 'ailment_4', type: 'integer' })
  ailment4: number;

  @Field(type => Int)
  @Column({ name: 'ailment_5', type: 'integer' })
  ailment5: number;

  @Field(type => Int)
  @Column({ name: 'ailment_6', type: 'integer' })
  ailment6: number;

  @Field(type => Int)
  @Column({ name: 'ailment_7', type: 'integer' })
  ailment7: number;

  @Field(type => Int)
  @Column({ name: 'ailment_8', type: 'integer' })
  ailment8: number;

  @Field(type => Int)
  @Column({ name: 'ailment_9', type: 'integer' })
  ailment9: number;

  @Field(type => Int)
  @Column({ name: 'ailment_10', type: 'integer' })
  ailment10: number;

  @Field(type => Int)
  @Column({ name: 'ailment_11', type: 'integer' })
  ailment11: number;

  @Field(type => Int)
  @Column({ name: 'ailment_12', type: 'integer' })
  ailment12: number;

  @Field(type => Int)
  @Column({ name: 'ailment_13', type: 'integer' })
  ailment13: number;

  @Field(type => Int)
  @Column({ name: 'ailment_14', type: 'integer' })
  ailment14: number;

  @Field(type => Int)
  @Column({ name: 'ailment_15', type: 'integer' })
  ailment15: number;

  @Field(type => Int)
  @Column({ name: 'ailment_16', type: 'integer' })
  ailment16: number;

  @Field(type => Int)
  @Column({ name: 'ailment_17', type: 'integer' })
  ailment17: number;

  @Field(type => Int)
  @Column({ name: 'ailment_18', type: 'integer' })
  ailment18: number;

  @Field(type => Int)
  @Column({ name: 'ailment_19', type: 'integer' })
  ailment19: number;

  @Field(type => Int)
  @Column({ name: 'ailment_20', type: 'integer' })
  ailment20: number;

  @Field(type => Int)
  @Column({ name: 'ailment_21', type: 'integer' })
  ailment21: number;

  @Field(type => Int)
  @Column({ name: 'ailment_22', type: 'integer' })
  ailment22: number;

  @Field(type => Int)
  @Column({ name: 'ailment_23', type: 'integer' })
  ailment23: number;

  @Field(type => Int)
  @Column({ name: 'ailment_24', type: 'integer' })
  ailment24: number;

  @Field(type => Int)
  @Column({ name: 'ailment_25', type: 'integer' })
  ailment25: number;

  @Field(type => Int)
  @Column({ name: 'ailment_26', type: 'integer' })
  ailment26: number;

  @Field(type => Int)
  @Column({ name: 'ailment_27', type: 'integer' })
  ailment27: number;

  @Field(type => Int)
  @Column({ name: 'ailment_28', type: 'integer' })
  ailment28: number;

  @Field(type => Int)
  @Column({ name: 'ailment_29', type: 'integer' })
  ailment29: number;

  @Field(type => Int)
  @Column({ name: 'ailment_30', type: 'integer' })
  ailment30: number;

  @Field(type => Int)
  @Column({ name: 'ailment_31', type: 'integer' })
  ailment31: number;

  @Field(type => Int)
  @Column({ name: 'ailment_32', type: 'integer' })
  ailment32: number;

  @Field(type => Int)
  @Column({ name: 'ailment_33', type: 'integer' })
  ailment33: number;

  @Field(type => Int)
  @Column({ name: 'ailment_34', type: 'integer' })
  ailment34: number;

  @Field(type => Int)
  @Column({ name: 'ailment_35', type: 'integer' })
  ailment35: number;

  @Field(type => Int)
  @Column({ name: 'ailment_36', type: 'integer' })
  ailment36: number;

  @Field(type => Int)
  @Column({ name: 'ailment_37', type: 'integer' })
  ailment37: number;

  @Field(type => Int)
  @Column({ name: 'ailment_38', type: 'integer' })
  ailment38: number;

  @Field(type => Int)
  @Column({ name: 'ailment_39', type: 'integer' })
  ailment39: number;

  @Field(type => Int)
  @Column({ name: 'ailment_40', type: 'integer' })
  ailment40: number;

  @Field(type => Int)
  @Column({ name: 'ailment_41', type: 'integer' })
  ailment41: number;

  @Field(type => Int)
  @Column({ name: 'ailment_42', type: 'integer' })
  ailment42: number;

  @Field(type => Int)
  @Column({ name: 'ailment_43', type: 'integer' })
  ailment43: number;

  @Field(type => Int)
  @Column({ name: 'ailment_44', type: 'integer' })
  ailment44: number;

  @Field(type => Int)
  @Column({ name: 'ailment_45', type: 'integer' })
  ailment45: number;

  @Field(type => Int)
  @Column({ name: 'ailment_46', type: 'integer' })
  ailment46: number;

  @Field(type => Int)
  @Column({ name: 'ailment_47', type: 'integer' })
  ailment47: number;

  @Field(type => Int)
  @Column({ name: 'ailment_48', type: 'integer' })
  ailment48: number;

  @Field(type => Int)
  @Column({ name: 'ailment_49', type: 'integer' })
  ailment49: number;

  @Field(type => Int)
  @Column({ name: 'ailment_50', type: 'integer' })
  ailment50: number;

  @Field(type => [Int])
  get ailment() {
    return [this.ailment1, this.ailment2, this.ailment3, this.ailment4, this.ailment5, this.ailment6, this.ailment7, this.ailment8, this.ailment9, this.ailment10, this.ailment11, this.ailment12, this.ailment13, this.ailment14, this.ailment15, this.ailment16, this.ailment17, this.ailment18, this.ailment19, this.ailment20, this.ailment21, this.ailment22, this.ailment23, this.ailment24, this.ailment25, this.ailment26, this.ailment27, this.ailment28, this.ailment29, this.ailment30, this.ailment31, this.ailment32, this.ailment33, this.ailment34, this.ailment35, this.ailment36, this.ailment37, this.ailment38, this.ailment39, this.ailment40, this.ailment41, this.ailment42, this.ailment43, this.ailment44, this.ailment45, this.ailment46, this.ailment47, this.ailment48, this.ailment49, this.ailment50];
  }

}

