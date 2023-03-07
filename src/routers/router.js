import Vue from "vue";
import Router from 'vue-router'

Vue.use(Router);

const router=new Router({
    routes:[
        {
            path:"/category-review",
            name:'CategoryReview',
            component:()=>import("@/components/maincontent/categoryreview/CategoryReview")
        },
        {
            path:"/list-homestay",
            name:'ListHomestay',
            component:()=>import("@/components/maincontent/listhomestay/ListHomestay")
        },
        {
            path:"/list-land",
            name:'ListHomestay',
            component:()=>import("@/components/maincontent/listland/ListLand")
        },
        {
            path:"/list-house",
            name:'ListHouse',
            component:()=>import("@/components/maincontent/listhouse/ListHouse")
        },
        {
            path:"/list-rented-house",
            name:'ListRentedHouse',
            component:()=>import("@/components/maincontent/listrentedhouse/ListRentedHouse")
        }
    ]
})

export default router;
