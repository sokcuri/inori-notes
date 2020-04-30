import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'experience_team' })
export class ExperienceTeam extends BaseEntity {
  @Field(type => ID)
  @PrimaryColumn('integer')
  team_level: number;

  @Field()
  @Column('integer')
  total_exp: number;

  @Field()
  @Column('integer')
  max_stamina: number;

  @Field()
  @Column('integer')
  over_limit_stamina: number;

  @Field()
  @Column('integer')
  recover_stamina_count: number;

}

