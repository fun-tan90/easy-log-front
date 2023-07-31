import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const realTimeLog: AppRouteModule = {
  path: '/real-time-log',
  name: 'RealTimeLog',
  component: LAYOUT,
  redirect: '/real-time-log/index',
  meta: {
    orderNo: 2,
    icon: 'octicon:log-16',
    title: t('routes.real-time-log.moduleName'),
  },
  children: [
    {
      path: 'index',
      name: 'RealTimeLogIndex',
      component: () => import('/@/views/easy-log/real-time-log/index.vue'),
      meta: {
        icon: 'octicon:log-16',
        title: t('routes.real-time-log.title'),
        hideMenu: true,
      },
    },
  ],
};

export default realTimeLog;
