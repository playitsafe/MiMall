<template>
  <div class="product">
    <ProductNav>
      <template v-slot:buy>
        <button class="btn">Buy Now</button>
      </template>
    </ProductNav>
    <div class="fake">123</div>

  </div>
</template>

<script>
import ProductNav from '@/components/ProductNav'

export default {
  name: 'product',
  components: {
    ProductNav
  }

}
</script>

<style lang="scss">
.product {
  .btn {
    margin-left: 10px;
  }

  .fake {
      height: 1000px;
      /* background: red; */
    }
}
</style>