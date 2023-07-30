import type { AppRouteModule } from '/src/router/types';

import { LAYOUT } from '/src/router/constant';
import { t } from '/src/hooks/web/useI18n';

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
      component: () => import('/src/views/easy-log/link-trace/index.vue'),
      meta: {
        icon: 'icon-park-outline:trace',
        title: t('routes.link-trace.title'),
        hideMenu: true,
      },
    },
  ],
};

export default linkTrace;
