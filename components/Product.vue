<template>
        <div id="prod" class="col-md-6 col-sm-12">
            <!-- First product box start here-->
            <div class="prod-info-main prod-wrap clearfix">
                <div class="row">
                    <div class="col-md-5 col-sm-12 col-xs-12">
                        <div class="product-image">
                            <img v-bind:src="product.imageUrl" class="img-responsive">
                            <span v-if="product.discount!==''" class="tag2 hot">SALE</span>
                            <span v-bind:class="[product.seller.name.toLowerCase()]"
                                  class="tag3">{{product.seller.name}}</span>
                        </div>
                    </div>
                    <div class="col-md-7 col-sm-12 col-xs-12">
                        <div class="product-detail">
                            <h5 class="name">
                                <a v-bind:href="product.url" target="_blank" v-bind:title="product.name">
                                    {{product.name.substring(0,46)}}
                                </a>
                                <a href="#">
                                    <span>{{product.category.name}}</span>
                                </a>

                            </h5>
                            <p class="price-container">
                                <span>{{product.sale_price}}</span>
                            </p>
                            <span class="tag1"></span>
                            <span class="sale">{{product.price}}</span>&nbsp;
                            <span class="discount">{{product.discount}}</span>
                        </div>
                        <div class="clear">

                        </div>
                        <div class="product-info smart-form">
                            <div class="row">
                                <div class="col-md-12">
                                    <a v-bind:href="product.url" class="btn btn-danger">
                                        <span><i class="fa fa-shopping-cart"></i> MUA NGAY</span></a>
                                </div>
                                <!--<div class="col-md-12">
                                    <div class="rating">Rating:
                                        <label for="stars-rating-5"><i class="fa fa-star text-danger"></i></label>
                                        <label for="stars-rating-4"><i class="fa fa-star text-danger"></i></label>
                                        <label for="stars-rating-3"><i class="fa fa-star text-danger"></i></label>
                                        <label for="stars-rating-2"><i class="fa fa-star text-warning"></i></label>
                                        <label for="stars-rating-1"><i class="fa fa-star text-warning"></i></label>
                                    </div>
                                </div>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end product -->
</template>

<script>
  export default {
    name: 'product',
    props: ['product']
  }
</script>

<style scoped>
    body {
        margin-top: 20px;
        background: #eee;
    }

    .clear {
        padding: 10px;
    }

    #prod {
        border-top: 1px solid #DDD;
    }

    .prod-info-main {
        /*border: 1px solid #CEEFFF;*/
        margin-bottom: 20px;
        margin-top: 10px;
        background: #fff;
        padding: 6px;
        /*-webkit-box-shadow: 0 1px 4px 0 rgba(21, 180, 255, 0.5);*/
        /*box-shadow: 0 1px 1px 0 rgba(21, 180, 255, 0.5);*/
    }

    .prod-info-main a {
        text-decoration: none;
    }

    .prod-info-main .product-image {
        /*background-color: #EBF8FE;*/
        display: block;
        min-height: 238px;
        overflow: hidden;
        position: relative;
        /*border: 1px solid #CEEFFF;*/
        padding-top: 40px;
    }

    .prod-info-main .product-detail {
        /*border-bottom: 1px solid #dfe5e9;*/
        padding-bottom: 17px;
        padding-left: 16px;
        padding-top: 16px;
        position: relative;
        background: #fff;
    }

    .product-content .product-detail h5 a {
        color: #2f383d;
        font-size: 15px;
        line-height: 19px;
        text-decoration: none;
        padding-left: 0;
        margin-left: 0
    }

    .prod-info-main .product-detail h5 a span {
        color: #9aa7af;
        display: block;
        font-size: 13px
    }

    .prod-info-main .product-detail span.tag1 {
        border-radius: 50%;
        color: #fff;
        font-size: 15px;
        height: 50px;
        padding: 13px 0;
        position: absolute;
        right: 10px;
        text-align: center;
        top: 10px;
        width: 50px
    }

    .prod-info-main .product-detail span.sale {
        color: #a2a2a2;
        /*background-color: #21c2f8;*/
        text-decoration: line-through;
    }

    .prod-info-main .product-detail span.discount {
        color: #FF3B26;
        display: inline-block;
    }

    .prod-info-main .product-detail span.hot {
        background-color: #fa9442
    }

    .prod-info-main .description {
        font-size: 12.5px;
        line-height: 20px;
        padding: 10px 14px 16px 19px;
        background: #fff
    }

    .prod-info-main .product-info {
        padding: 11px 19px 10px 20px
    }

    /*.prod-info-main .product-info a.add-to-cart {*/
    /*color: #2f383d;*/
    /*font-size: 13px;*/
    /*padding-left: 16px*/
    /*}*/

    .prod-info-main name.a {
        padding: 5px 10px;
        margin-left: 16px
    }

    .product-info.smart-form .btn {
        padding: 6px 12px;
        margin-left: 12px;
        margin-top: -10px;
        color: white;
    }

    .product-block .product-detail p.price-container span,
    .prod-info-main .product-detail p.price-container span,
    .shipping table tbody tr td p.price-container span,
    .shopping-items table tbody tr td p.price-container span {
        color: #21c2f8;
        font-family: Lato, sans-serif;
        font-size: 24px;
        line-height: 20px
    }

    .product-info.smart-form .rating label {
        margin-top: 15px;

    }

    .prod-wrap .product-image span.tag2 {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        padding: 10px 0;
        color: #fff;
        font-size: 11px;
        text-align: center
    }

    .prod-wrap .product-image span.tag3 {
        position: absolute;
        top: 10px;
        right: 150px;
        width: 60px;
        padding: 2px 0;
        color: #fff;
        font-size: 11px;
        text-align: center;
        opacity: 0.8;
        font-weight: bold;
    }

    .prod-wrap .product-image span.tag3.tiki {
        background-color: #189eff;
    }

    .prod-wrap .product-image span.tag3.adayroi {
        background-color: #ed1e25;
    }

    .prod-wrap .product-image span.sale {
        background-color: #57889c;
    }

    .prod-wrap .product-image span.discount {
        background-color: #57889c;
    }

    .prod-wrap .product-image span.hot {
        background-color: #a90329;
    }

    .prod-wrap .product-image span.special {
        background-color: #3B6764;
    }

    .shop-btn {
        position: relative
    }

    .shop-btn > span {
        background: #a90329;
        display: inline-block;
        font-size: 10px;
        box-shadow: inset 1px 1px 0 rgba(0, 0, 0, .1), inset 0 -1px 0 rgba(0, 0, 0, .07);
        font-weight: 700;
        border-radius: 50%;
        padding: 2px 4px 3px !important;
        text-align: center;
        line-height: normal;
        width: 19px;
        top: -7px;
        left: -7px
    }

    .product-detail hr {
        padding: 0 0 5px !important
    }

    .product-detail .glyphicon {
        color: #3276b1
    }

    .product-detail .product-image {
        border-right: 0px solid #fff !important
    }

    .product-detail .name {
        margin-top: 0;
        margin-bottom: 0;
    }

    .product-detail .name small {
        display: block
    }

    .product-detail .name a {
        margin-left: 0
    }

    .product-detail .price-container {
        font-size: 24px;
        margin: 0;
        font-weight: 300;

    }

    .product-detail .price-container small {
        font-size: 12px;

    }

    .product-detail .fa-2x {
        font-size: 16px !important
    }

    .product-detail .fa-2x > h5 {
        font-size: 12px;
        margin: 0
    }

    .product-detail .fa-2x + a,
    .product-detail .fa-2x + a + a {
        font-size: 13px
    }

    .product-detail .certified {
        margin-top: 10px
    }

    .product-detail .certified ul {
        padding-left: 0
    }

    .product-detail .certified ul li:not(first-child) {
        margin-left: -3px
    }

    .product-detail .certified ul li {
        display: inline-block;
        background-color: #f9f9f9;
        padding: 13px 19px
    }

    .product-detail .certified ul li:first-child {
        border-right: none
    }

    .product-detail .certified ul li a {
        text-align: left;
        font-size: 12px;
        color: #6d7a83;
        line-height: 16px;
        text-decoration: none
    }

    .product-detail .certified ul li a span {
        display: block;
        color: #21c2f8;
        font-size: 13px;
        font-weight: 700;
        text-align: center
    }

    .product-detail .message-text {
        width: calc(100% - 70px)
    }

    @media only screen and (min-width: 1024px) {
        .prod-info-main div[class*=col-md-4] {
            padding-right: 0
        }

        .prod-info-main div[class*=col-md-8] {
            padding: 0 13px 0 0
        }

        .prod-wrap div[class*=col-md-5] {
            padding-right: 0
        }

        .prod-wrap div[class*=col-md-7] {
            padding: 0 13px 0 0
        }

        .prod-info-main .product-image {
            border-right: 1px solid #dfe5e9
        }

        .prod-info-main .product-info {
            position: relative
        }
    }
</style>