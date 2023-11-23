<template>
  <div>
    <ol class="grid pl-4 md:pl-0">
      <CourseContent v-for="content in contentList" :key="content.id" :content="content" :courseaid="courseaid"/>
    </ol>
  </div>
</template>

<script >
import CourseContent from "./CourseContent.vue";
import { ref } from "vue";
import supabase from "../../db/db";
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
export default {
  name: "CourseContentList",
  components: { CourseContent },
  setup() {
    const contentList = ref();
    const route = useRoute();
    const courseaid = route.params.id;

    const getLesson = async () => {
      const { error, data } = await supabase.from("lessons").select().eq("courses_id", route.params.id);
      if (error) return console.log(error);
      contentList.value = data;
    }
    
    getLesson();

    return { contentList, courseaid }
  }
}
</script>
