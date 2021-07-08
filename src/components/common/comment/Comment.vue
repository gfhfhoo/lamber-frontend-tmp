<template>
  <div class="u-comment">
    <div class="container">
      <div class="left">
        <img id="avatar" src="https://tva4.sinaimg.cn/crop.0.13.1242.1242.1024/772f7f53jw8fbiigpolpzj20yi0z8acb.jpg">
      </div>
      <div class="right">
        <span class="nickname" v-if="!commentData.isSubReply">{{ commentData.from }}</span>
        <span id="sub-reply" v-else>
          <span class="nickname">{{ commentData.from }}</span>
          >
          <span class="nickname">{{ commentData.to }}</span>
        </span>
        <p id="content">
          {{commentData.content}}
        </p>
        <!--        <div class="more-info">-->
        <!--          <span>展开更多...</span>-->
        <!--        </div>-->
        <div class="stamp">
          <span id="timestamp">发表于 2021年6月19日 13:49</span>
        </div>
        <CommentInteractive></CommentInteractive>
        <comment v-for="(sub,i) in subComment" :key="i" :comment-data="sub" :sub-comment="[]"></comment>
      </div>
    </div>
  </div>
</template>

<script>
import CommentInteractive from "@/components/ui/commentInteractive/CommentInteractive";

export default {
  name: "Comment",
  components: {CommentInteractive},
  props: {
    commentData: {
      isSubReply: Boolean,
      from: String,
      to: String,
      content: String,
      default: () => {
      }
    },
    subComment: Array
  },
  created() {
    console.log(this.commentData)
  }
}
</script>

<style lang="scss" scoped>

.u-comment {
  max-width: 800px;
  padding: 15px 10px 15px 10px;
  background: white;
}

.container {
  display: flex;
  column-gap: 8px;
}

.left {
  display: flex;
  column-gap: 8px;

  #avatar {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-size: cover;
  }
}

.right {
  display: flex;
  flex-direction: column;

  .nickname {
    color: var(--color-light-blue);
    font-size: 14px;
  }

  #sub-reply {
    color: var(--color-grey);
    font-size: 13px;
    font-weight: bold;
  }

  #content {
    margin: 0;
    word-break: break-all;
    white-space: normal;
  }
}

.stamp {

  #timestamp {
    color: var(--color-grey);
    font-size: 13px;
  }
}

.more-info {
  text-align: center;
}

</style>