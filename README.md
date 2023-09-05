<div align="center"> 
  <a href="https://gitee.com/DianZiFaPiao/easy-log-front"> 
    <img alt="VbenAdmin Logo" width="200" height="200" src="https://anncwb.github.io/anncwb/images/logo.png"> 
  </a>
  <br><br>

[![license](https://img.shields.io/github/license/anncwb/vue-vben-admin.svg)](LICENSE)

  <h1>Easy-Log</h1>
</div>

## 简介

基于开源的[Vue Vben Admin](https://github.com/vbenjs/vue-vben-admin)进行二次开发

- 文档地址：https://doc.vvbin.cn

## 特性

- **最新技术栈**：使用 Vue3/vite2 等前端前沿技术开发
- **TypeScript**: 应用程序级 JavaScript 的语言
- **主题**：可配置的主题
- **国际化**：内置完善的国际化方案
- **Mock 数据** 内置 Mock 数据方案
- **权限** 内置完善的动态路由权限生成方案
- **组件** 二次封装了多个常用的组件

## 准备

- [node](http://nodejs.org/) 和 [git](https://git-scm.com/) -项目开发环境
- [Vite](https://vitejs.dev/) - 熟悉 vite 特性
- [Vue3](https://v3.vuejs.org/) - 熟悉 Vue 基础语法
- [TypeScript](https://www.typescriptlang.org/) - 熟悉`TypeScript`基本语法
- [Es6+](http://es6.ruanyifeng.com/) - 熟悉 es6 基本语法
- [Vue-Router-Next](https://next.router.vuejs.org/) - 熟悉 vue-router 基本使用
- [Ant-Design-Vue](https://2x.antdv.com/docs/vue/introduce-cn/) - ui 基本使用
- [Mock.js](https://github.com/nuysoft/Mock) - mockjs 基本语法

## 安装使用

- 获取项目代码

```bash
git clone git@gitee.com:fun-tan90/easy-log-front.git
# OR
git clone git@github.com:fun-tan90/easy-log-front.git
```

- 安装依赖

```bash
cd easy-log-front

# 全局安装pnpm, pnpm是同类工具速度的将近2倍
npm install -g pnpm

# 卸载pnpm
npm rm -g pnpm

# 验证
pnpm -v # 出现对应版本号即代表安装成功

pnpm install
```

- 运行

```bash
npm run dev
```

- 打包

```bash
npm run build
```

## Git 贡献提交规范

- 参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范

  - `feat` 增加新功能
  - `fix` 修复问题/BUG
  - `style` 代码风格相关无影响运行结果的
  - `perf` 优化/性能提升
  - `refactor` 重构
  - `revert` 撤销修改
  - `test` 测试相关
  - `docs` 文档/注释
  - `chore` 依赖更新/脚手架配置修改等
  - `workflow` 工作流改进
  - `ci` 持续集成
  - `types` 类型定义文件更改
  - `wip` 开发中

## 更新日志

[CHANGELOG](./CHANGELOG.zh_CN.md)
