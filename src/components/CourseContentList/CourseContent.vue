<template>
  <router-link :to="{name: 'ClassRoom', params:{id:courseaid, classid:content.id}}">
    <div class="flex gap-2 p-4">
      <span>-</span>
      <li class="font-bold capitalize">
        {{ content.title }}
      </li>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "CourseContent",
  props: {
    content: {
      type: Object
    },
    courseaid:{
      required:true
    }
  }
}

</script>
