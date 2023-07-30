<template>
  <LoginFormTitle v-show="getShow" class="enter-x" />
  <Form
    class="p-4 enter-x"
    :model="formData"
    :rules="getFormRules"
    ref="formRef"
    v-show="getShow"
    @keypress.enter="handleLogin"
  >
    <FormItem name="username" class="enter-x">
      <Input
        size="large"
        v-model:value="formData.username"
        :placeholder="t('sys.login.userName')"
        class="fix-auto-fill"
      />
    </FormItem>
    <FormItem name="password" class="enter-x">
      <InputPassword
        size="large"
        visibilityToggle
        v-model:value="formData.password"
        :placeholder="t('sys.login.password')"
      />
    </FormItem>
    <div class="captcha-row">
      <div class="captcha-row-control">
        <FormItem name="captchaValue" class="enter-x">
          <Input
            size="large"
            v-model:value="formData.captchaValue"
            :placeholder="t('sys.login.smsPlaceholder')"
            class="fix-auto-fill"
          />
        </FormItem>
      </div>
      <div class="captcha-row-img">
        <ASpin size="small" :spinning="captchaImgLoading">
          <img
            :src="captchaImgStr"
            :alt="t('sys.login.smsHandler')"
            @click="resetCaptchaImgBase64"
          />
        </ASpin>
      </div>
    </div>

    <ARow class="enter-x">
      <ACol :span="12">
        <FormItem>
          <!-- No logic, you need to deal with it yourself -->
          <Checkbox v-model:checked="rememberMe" size="small">
            {{ t('sys.login.rememberMe') }}
          </Checkbox>
        </FormItem>
      </ACol>
    </ARow>

    <FormItem class="enter-x">
      <Button type="primary" size="large" block @click="handleLogin" :loading="loading">
        {{ t('sys.login.loginButton') }}
      </Button>
    </FormItem>
  </Form>
</template>
<script lang="ts" setup>
  import { reactive, ref, unref, computed, onMounted } from 'vue';

  import { Checkbox, Form, Input, Row, Col, Button, Spin } from 'ant-design-vue';
  import LoginFormTitle from './LoginFormTitle.vue';

  import { useI18n } from '/@/hooks/web/useI18n';
  import { useMessage } from '/@/hooks/web/useMessage';

  import { useUserStore } from '/@/store/modules/user';
  import { LoginStateEnum, useLoginState, useFormRules, useFormValid } from './useLogin';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { LoginCaptchaApi } from '/@/api/sys/captcha';
  //import { onKeyStroke } from '@vueuse/core';

  const ACol = Col;
  const ARow = Row;
  const ASpin = Spin;
  const FormItem = Form.Item;
  const InputPassword = Input.Password;
  const { t } = useI18n();
  const { notification, createErrorModal } = useMessage();
  const { prefixCls } = useDesign('login');
  const userStore = useUserStore();

  const { getLoginState } = useLoginState();
  const { getFormRules } = useFormRules();

  const formRef = ref();
  const loading = ref(false);
  const rememberMe = ref(false);
  const captchaKey = ref('');
  const captchaImgStr = ref('');
  const captchaImgLoading = ref(false);

  const formData = reactive({
    username: 'admin',
    password: '123456',
    captchaValue: '',
  });

  const { validForm } = useFormValid(formRef);

  //onKeyStroke('Enter', handleLogin);

  const getShow = computed(() => unref(getLoginState) === LoginStateEnum.LOGIN);

  onMounted(() => {
    resetCaptchaImgBase64();
  });

  // 获取验证码
  async function resetCaptchaImgBase64() {
    try {
      captchaImgLoading.value = true;
      const currentCaptchaKey = new Date().getTime().toString().substring(1);
      captchaKey.value = currentCaptchaKey;
      const captchaParams = {
        captchaKey: currentCaptchaKey, //获取验证码时随机KEY
        width: 103, //验证码宽度 (原始宽高比：130:48) 根据现高度和宽高比计算宽度值为103px
        height: 38, //验证码高度 (原始宽高比：130:48) 现高度为表单控件的高度40减去上下1像素边框得到38px
        len: 2, //验证码计算位数 默认2
        survival: 5, //验证码有效时间min 默认5min
      };
      captchaImgStr.value = await LoginCaptchaApi(captchaParams, 'none');
      captchaImgLoading.value = false;
    } catch (error) {
      captchaImgLoading.value = false;
    }
  }

  async function handleLogin() {
    const data = await validForm();
    if (!data) return;
    try {
      loading.value = true;
      const userInfo = await userStore.login({
        password: data.password,
        username: data.username,
        captchaKey: captchaKey.value,
        captchaValue: data.captchaValue,
        rememberMe: rememberMe.value,
        mode: 'none', //不要默认的错误提示
      });
      if (userInfo) {
        notification.success({
          message: t('sys.login.loginSuccessTitle'),
          description: `${t('sys.login.loginSuccessDesc')}: ${userInfo.userName}`,
          duration: 3,
        });
      }
    } catch (error) {
      await resetCaptchaImgBase64();
      createErrorModal({
        title: t('sys.api.errorTip'),
        content: (error as unknown as Error).message || t('sys.api.networkExceptionMsg'),
        getContainer: () => document.body.querySelector(`.${prefixCls}`) || document.body,
      });
    } finally {
      loading.value = false;
    }
  }
</script>

<style lang="less">
  .captcha-row {
    position: relative;
    height: 40px;
    margin-bottom: 24px;

    .captcha-row-control {
      position: absolute;
      top: 0;
      right: 121px;
      left: 0;

      input:not([type='checkbox']) {
        min-width: unset;
      }
    }

    .captcha-row-img {
      display: inline-block;
      position: absolute;
      right: 0;
      width: 105px;
      height: 40px;
      border: 1px solid rgb(217 217 217);
      border-radius: 3px;
      cursor: pointer;
    }
  }

  html[data-theme='dark'] {
    .captcha-row .captcha-row-img {
      border-color: #4a5569;
    }
  }
</style>
