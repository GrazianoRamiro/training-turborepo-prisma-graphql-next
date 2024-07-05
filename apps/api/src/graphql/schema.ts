import { makeSchema } from 'nexus';
import { join } from 'path';

import * as types from './types/User';

export const schema = makeSchema({
  types,
  outputs: {
    schema: join(__dirname, '../../schema.graphql'),
    typegen: join(__dirname, '../../nexus-typegen.ts'),
  },
  contextType: {
    module: join(__dirname, '../app.context.ts'),
    export: 'Context',
  },
});
