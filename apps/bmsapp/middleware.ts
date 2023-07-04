// middleware.ts
import { stackMiddlewares } from 'middlewares/stackMiddlewares';
import withLogs from 'middlewares/withLogs';
import withLogin from 'middlewares/withLogin';

const middlewares = [withLogs, withLogin];
export default stackMiddlewares(middlewares);
