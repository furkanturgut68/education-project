<template>
  <div class="gap-4 grid justify-items-center" style="grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr))">
    <CourseCard v-for="coursea of courseaList" :key="coursea.id" :coursea="coursea" />
  </div>
</template>

<script>
import CourseCard from "./CourseCard.vue";
import supabase from "../../db/db.js";
import { ref } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "CourseGrid",
  components: { CourseCard },
  setup() {
    const courseaList = ref([]);
    const route = useRoute();
    const getCourses = async () => {
      const { error, data } = await supabase.from("courses").select().eq("topics_id", route.params.id);
      if (error) return console.log(error);
      courseaList.value = data;
    }

    getCourses();

    return { courseaList }
  }
}
</script>
