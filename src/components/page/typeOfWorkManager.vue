<template>
    <div class="typeofwork-wrap">
        <div class="list">
            
        </div>
    </div>
</template>

<script>
import { getTypeOfWork } from '@/api/systemSetUp.js';
export default {
    name:'typeOfWork',
    props: {},
    data() {
        return {
            list: [],
            Pagination: {
                page: 1,
                num: 12
            }
        };
    },
    components: {},
    computed: {},
    watch: {},
    methods: {},
    async created() {
        let { data } = await getTypeOfWork(this.Pagination);
        this.list = data.rows;
    },
    mounted() {},
    destroyed() {}
};
</script>

<style lang="less" scoped>
.typeofwork-wrap {
    background: #fff;
    .search{
      padding: 10px;
    }
   .list{
     padding: 10px;
   }
}
</style>
