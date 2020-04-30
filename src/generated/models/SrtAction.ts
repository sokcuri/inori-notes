import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'srt_action' })
export class SrtAction extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('text')
  action_name: string;

  @Field()
  @Column('text')
  inori_action: string;

  @Field()
  @Column('text')
  dragon_action: string;

  @Field()
  @Column('text')
  kaya_action: string;

  @Field()
  @Column('text')
  homare_action: string;

  @Field()
  @Column('integer')
  talk_text_type: number;

  @Field()
  @Column('text')
  talk_text: string;

  @Field()
  @Column('text')
  voice_list: string;

}

