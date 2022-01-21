<template>
  <view>
    <view class="wrap">
      <u-subsection :list="list" :current="current" @change="change"></u-subsection>
      <scroll-view
        scroll-y
        style="height: 100%;width: 100%;"
        @scrolltolower="reachBottom"
        :refresher-enabled="true"
        refresher-default-style="black"
        @refresherrefresh="refresh"
        :refresher-triggered="isRefresh"
      >
        <view class="page-box">
          <view class="item" v-for="item in dataList" :key="item.id" @click="handleToDetail(item)">
            <view class="flex-row-between main-font">
              <view>询价单</view>
              <u-icon name="arrow-right-double"></u-icon>
            </view>
            <u-line></u-line>
            <view class="main-font customer-name">{{item.customerName}}</view>
            <view class="main-font flex-row">
              状态：
              <text class="flex-1 color-6">{{item.status}}</text>
            </view>
            <view class="main-font flex-row">
              商品类别数量：
              <text class="flex-1 color-6">{{item.orderNum || ""}}</text>
            </view>
            <view class="main-font flex-row">
              创建人：
              <text class="flex-1 color-6">{{item.createUser || ""}}</text>
            </view>
            <view class="main-font flex-row">
              创建时间：
              <text class="flex-1 color-6">{{item.createTime || ""}}</text>
            </view>
          </view>
          <!-- <u-loadmore v-if="!isRefresh" :status="false"></u-loadmore> -->
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
import { enquiryService } from './enquiryService'
const type = [
  {
    title: '待报价',
    searchStatus: ['pending_order']
  },
  {
    title: '作废',
    searchStatus: ['pending_labor']
  },
  {
    title: '已开单',
    searchStatus: ['pending_system_review']
  },
  {
    title: '已报价',
    searchStatus: ['completed']
  },
  {
    title: '全部',
    searchStatus: []
  }
]
export default {
  data() {
    return {
      list: [], //tab分类
      dataList: [], //数据
      isRefresh: true, //是否刷新
      current: 1 //当前页码
    }
  },
  //页面加载
  onLoad() {
    this.list = type.map(item => ({ name: item.title }))
    this.loadData()
  },
  methods: {
    // 页面数据
    async loadData(current) {
      const searchParams = {
        shopCode: 'SHOP-M-00000102',
        pageSize: 10,
        pageNum: current ?? this.current
      }
      let { retData } = await enquiryService.page(searchParams)
      const { records, ...pg } = retData
      this.dataList = [...this.dataList, ...records]
      this.current = pg.current + 1
    },
    //详情
    handleToDetail(item) {
      uni.navigateTo({
        url: `/order-modules/detail/index?orderId=${item.id}`
      })
    },
    // tab栏切换
    change(index) {
      this.current = index
    },
    //滚动到底部/右边事件
    reachBottom() {
      this.loadData()
    },
    // 自定义下拉刷新被触发
    refresh() {
      this.loadData(1)
    }
  }
}
</script>

<style lang="scss" scoped>
page {
  height: 100%;
  background-color: #f2f2f2;
}

.item {
  width: 710rpx;
  background-color: #ffffff;
  margin: 20rpx auto;
  border-radius: 20rpx;
  box-sizing: border-box;
  padding: 20rpx;
  font-size: 28rpx;

  .customer-name {
    margin-top: 25rpx;
    color: #007aff;
    font-size: 32rpx;
    margin-bottom: 20rpx;
  }

  .order-status {
    margin-left: 20rpx;
  }
}

.wrap {
  display: flex;
  flex-direction: column;
  height: calc(100vh - var(--window-top));
  width: 100%;
}

.swiper-box {
  flex: 1;
}

.swiper-item {
  height: 100%;
}
</style>
