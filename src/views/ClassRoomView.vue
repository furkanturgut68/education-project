<template>
  <div>
    <div class="lg:flex">
      <!--This will be replaced by a real video player -->
      <div class="border-2 border-red-600 h-80 flex items-center justify-center w-full">
        <video-player v-if="videoLink" :src="videoLink" controls class="h-full w-full">

        </video-player>
      </div>
      <!---->
      <div class="mt-6 pl-4">
        <p class="font-bold text-lg">Lessons</p>
        <CourseContentList />
      </div>
    </div>
    <div class="pl-4 mt-6">
      <p class="font-bold text-lg">Comments</p>
      <ClassCommentList />
    </div>
  </div>
</template>

<script>
import CourseContentList from "../components/CourseContentList/CourseContentList.vue";
import ClassCommentList from "../components/ClassComment/ClassCommentList.vue";
import supabase from '../db/db';
import { ref } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';

export default {
  name: "ClassRoomView",
  components: { CourseContentList, ClassCommentList },
  setup() {
    const videoLink = ref();
    const route = useRoute();

    const getVideoLink = async (classid) => {
      const {error:lessonError, data:lessonData} = await supabase.from("lessons").select("video_url").eq("id",classid).single();
      if(lessonError) return console.log(lessonError);

      const videoUrl = lessonData.video_url;

      const { error, data } = await supabase.storage.from("vuejs").createSignedUrl(videoUrl, 60);
      if (error) return console.log(error);
      videoLink.value = data.signedUrl;
    }

    getVideoLink(route.params.classid);
    onBeforeRouteUpdate((route) => {
      getVideoLink(route.params.classid);
    })

    return { videoLink }
  }
}
</script>

