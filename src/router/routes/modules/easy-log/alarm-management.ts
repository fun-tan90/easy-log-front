import type { AppRouteModule } from '/src/router/types';

import { LAYOUT } from '/src/router/constant';
import { t } from '/src/hooks/web/useI18n';

const alarmManagement: AppRouteModule = {
  path: '/alarm-management',
  name: 'AlarmManagement',
  component: LAYOUT,
  redirect: '/alarm-management/index',
  meta: {
    orderNo: 4,
    icon: 'icon-park-outline:alarm',
    title: t('routes.alarm-management.moduleName'),
  },
  children: [
    {
      path: 'index',
      name: 'AlarmManagementIndex',
      component: () => import('/src/views/easy-log/alarm-management/index.vue'),
      meta: {
        icon: 'icon-park-outline:alarm',
        title: t('routes.alarm-management.title'),
        hideMenu: true,
      },
    },
  ],
};

export default alarmManagement;
