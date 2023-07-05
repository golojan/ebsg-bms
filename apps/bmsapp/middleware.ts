// middleware.ts
import { stackMiddlewares } from 'middlewares/stackMiddlewares';
import withLogs from 'middlewares/withLogs';
import withLogin from 'middlewares/withLogin';
// import withSession from 'middlewares/withSession';

const middlewares = [withLogs, withLogin];
export default stackMiddlewares(middlewares);
