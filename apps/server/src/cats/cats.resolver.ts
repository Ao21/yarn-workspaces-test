import { Cat } from './cats.object';
import { Resolver, Query, Subscription } from '@nestjs/graphql';
import { interval } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { PubSub } from 'graphql-subscriptions';

const CAT_NAMES = ['Annie', 'Alex', 'Andrea'];

const pubSub = new PubSub();

@Resolver(of => Cat)
export class CatsResolver {
  constructor() {
    interval(1000)
      .pipe(map((x, i) => [i, CAT_NAMES[i % 3]]))
      .subscribe(([index, name]) =>
        pubSub.publish('cats', {
          cats: { id: index, firstName: name, lastName: 'cat' },
        }),
      );
  }

  @Query(returns => Cat)
  cat() {
    return { id: 1, firstName: 'Cat', lastName: 'Jack' };
  }

  @Subscription(returns => Cat)
  cats() {
    return pubSub.asyncIterator('cats');
  }
}
