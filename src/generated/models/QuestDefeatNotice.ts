import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'quest_defeat_notice' })
export class QuestDefeatNotice extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  id: number;

  @Field()
  @Column('integer')
  image_id: number;

  @Field()
  @Column('integer')
  required_team_level: number;

  @Field()
  @Column('integer')
  required_quest_id: number;

}

