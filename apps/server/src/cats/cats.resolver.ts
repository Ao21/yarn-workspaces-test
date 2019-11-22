import { Cat } from './cats.object';
import { Resolver, Query } from '@nestjs/graphql';

@Resolver(of => Cat)
export class CatsResolver {
  @Query(returns => Cat)
  cat() {
    return { id: 1, firstName: 'Cat', lastName: 'Jack' };
  }
}
