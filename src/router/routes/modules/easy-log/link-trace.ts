import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const linkTrace: AppRouteModule = {
  path: '/link-trace',
  name: 'LinkTrace',
  component: LAYOUT,
  redirect: '/link-trace/index',
  meta: {
    orderNo: 3,
    icon: 'icon-park-outline:trace',
    title: t('routes.link-trace.moduleName'),
  },
  children: [
    {
      path: 'index',
      name: 'LinkTraceIndex',
      component: () => import('/@/views/easy-log/link-trace/index.vue'),
      meta: {
        icon: 'icon-park-outline:trace',
        title: t('routes.link-trace.title'),
        hideMenu: true,
      },
    },
  ],
};

export default linkTrace;
