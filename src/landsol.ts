import { getRepository, ObjectType } from 'typeorm';

export async function getOne<Entity>(entity: ObjectType<Entity>, param: object): Promise<Entity> {
  return await getRepository<Entity>(entity)
  .createQueryBuilder('base')
  .where(Object.keys(param).map(x => `base.${x} = :${x}`).join(' AND '), param)
  .getOne();
}

export async function getMany<Entity>(entity: ObjectType<Entity>, param: object): Promise<Entity[]> {
  return await getRepository<Entity>(entity)
  .createQueryBuilder('base')
  .where(Object.keys(param).map(x => `base.${x} = :${x}`).join(' AND '), param)
  .getMany();
}
