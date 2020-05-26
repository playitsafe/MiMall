<template>
  <div class="modal" v-show="showModal">
    <div class="mask">
      <div class="modal-dialog">
        <div class="modal-header">
          <span>Title</span>
          <a href="javascript:;" class="icon-close"></a>
        </div>
        <div class="modal-body">
          <slot name="body">

          </slot>
        </div>
        <div class="modal-footer btn-group">
          <a href="javascript:;" class="btn">Confirm</a>
          <a href="javascript:;" class="btn">Cancel</a>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  props: {
    modalType: {
      type: String,
      default: 'form'
    },
    title: String,
    // 1:confirm 2:cancel 3: both
    btnType: String,
    sureText: {
      type: String,
      default: 'Confirm'
    },

    cancelText: {
      type: String,
      default: 'Cancel'
    },
    showModal: Boolean
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/config.scss';
@import '@/assets/scss/mixin.scss';
@import '@/assets/scss/modal.scss';
</style>