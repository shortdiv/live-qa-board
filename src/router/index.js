import Vue from "vue";
import Router from "vue-router";
import JollofForm from "../components/QuestionForm";
import SubmissionFail from "../components/SubmissionFail.vue";
import SubmissionSuccess from "../components/SubmissionSuccess.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "JollofForm",
      component: JollofForm
    },
    {
      path: "/thanks",
      name: "success",
      component: SubmissionSuccess
    },
    {
      path: "/404",
      name: "fail",
      component: SubmissionFail
    }
  ]
});

export default router;
