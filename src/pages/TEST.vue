<template>
  <div>
    <JudgeQueue></JudgeQueue>
  </div>
</template>

<script>
import Comment from "@/components/common/comment/Comment";
import JudgeQueue from "@/pages/index/judgeQueue/JudgeQueue";
export default {
  name: "TEST",
  components: {JudgeQueue, Comment},
  data() {
    return {
      testData: {
        isSubReply: false,
        from: "Bob Rbo",
        to: "",
        content: "你忽略了马克思主义原理的核心"
      },
      subData: {
        isSubReply: false,
        from: "We will fight",
        to: "Bob Rbo",
        content: "你又懂了😅？"
      },
      subData1: {
        isSubReply: true,
        from: "QwQ2333",
        to: "We will fight",
        content: "来，你给👴说说¿"
      }
    }
  }
}
</script>

<style scoped>

</style>