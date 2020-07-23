<template>
    <div class="course-list-wrap">
        <div class="search">
            <el-row :gutter="10">
                <el-col :span="4" class="search-condition-wrap">
                    <el-input v-model="course_name" placeholder="请输入搜索的课程名称"></el-input>
                </el-col>
                <el-col :span="4" class="search-condition-wrap">
                    <el-input v-model="course_name" placeholder="请输入搜索的课件的所属目录"></el-input>
                </el-col>
                <el-col :span="16">
                    <el-button type="primary">搜索</el-button>
                    <el-button type="primary">添加课程</el-button>
                </el-col>
            </el-row>
        </div>
        <div class="list"></div>
    </div>
</template>

<script>
import { getCourseList } from '@/api/courseManager.js';
export default {
    props: {},
    data() {
        return {
            list: [],
            Pagination: {
                page: 1,
                num: 12
            },
            course_name: '', //课件名称
            course_catalog: '' //课件目录
        };
    },
    components: {},
    computed: {},
    watch: {},
    methods: {},
    async created() {
        let { data } = await getCourseList(this.Pagination);
        this.list = data.rows;
    },
    mounted() {},
    destroyed() {}
};
</script>

<style lang="less" scoped>
.course-list-wrap {
    background: #fff;
    .search{
      padding: 10px;
    }
   .list{
     padding: 10px;
   }
}
</style>
