import type { AppRouteModule } from '/src/router/types';

import { LAYOUT } from '/src/router/constant';
import { t } from '/src/hooks/web/useI18n';

const logQuery: AppRouteModule = {
  path: '/log-query',
  name: 'LogQuery',
  component: LAYOUT,
  redirect: '/log-query/index',
  meta: {
    orderNo: 1,
    icon: 'material-symbols:search',
    title: t('routes.log-query.moduleName'),
  },
  children: [
    {
      path: 'index',
      name: 'LogQueryIndex',
      component: () => import('/src/views/easy-log/log-query/index.vue'),
      meta: {
        title: t('routes.log-query.title'),
        icon: 'material-symbols:search',
        hideMenu: true,
      },
    },
  ],
};

export default logQuery;
