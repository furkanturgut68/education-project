<template>
  <div class="bg-white flex flex-col items-center">
    <div class="w-full max-w-5xl">
      <div class="px-4 mt-4 bg-white py-4 mb-5">
        <div class="max-w-[800px]">
          <h1 class="text-8xl font-bold">{{ topic.name }}</h1>
          <div class="my-4 text-md flex flex-col gap-4" v-html="topic.description"></div>
     
        </div>
      </div>
    </div>
    <div class="bg-gray-100 w-full flex flex-col items-center">
      <div class="px-4 py-4 w-full max-w-5xl">
        <CourseGrid />
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import CourseGrid from "../components/CourseCard/CourseGrid.vue";
import supabase from '../db/db.js';
import { ref } from 'vue';
export default {
  name: "TopicShowCaseView",
  components: { CourseGrid },
  setup() {
    const route = useRoute();
    const topic = ref();
    const getTopics = async () => {
      const {error, data}= await supabase.from("topics").select().match({id:route.params.id}).single();
      if(error) return console.log(error);

      topic.value = data;
      console.log(data);

    }

    getTopics();

    return {topic}

  }
}
</script>
