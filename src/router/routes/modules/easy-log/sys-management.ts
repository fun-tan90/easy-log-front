import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const sysManagement: AppRouteModule = {
  path: '/sys-management',
  name: 'SysManagement',
  component: LAYOUT,
  meta: {
    orderNo: 100,
    icon: 'ion:settings-outline',
    title: t('routes.sys-management.moduleName'),
  },
  children: [
    {
      path: 'index-management',
      name: 'IndexManagement',
      meta: {
        title: t('routes.sys-management.indexName'),
        icon: 'fluent-emoji-high-contrast:card-index-dividers',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/easy-log/sys-management/index-management/index.vue'),
    },
  ],
};

export default sysManagement;
