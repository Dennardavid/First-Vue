<template>
  <div id="repodetail">
    <NavBar />
    <div class="repodetail-card">
      <section class="repo_card">
        <div class="just">
          <FaGithub class="justimg" />
        </div>

        <h1 class="repo-name">{{ details.name }}</h1>
        <div class="repo-mini-details">
          <p class="repo-stats">
            <img
              src="../assets/star-solid.svg"
              alt="github"
              style="height: 15px; color: white"
            />
            Stars: {{ details.stargazers_count }}
          </p>
          <p class="repo-stats">
            <img
              src="../assets/eye-solid.svg"
              alt="github"
              style="height: 15px; color: white"
            />
            Watch: {{ details.watchers }}
          </p>
          <p class="repo-stats">
            <img
              src="../assets/code-fork-solid.svg"
              alt="github"
              style="height: 15px; color: white"
            />
            Forks: {{ details.forks }}
          </p>
        </div>
        <p>
          Main Language:
          {{ details.language === null ? "none" : details.language }}
        </p>
        <p>Date created: {{ details.created_at }}</p>
        <p>Visibility: {{ details.visibility }}</p>

        <!-- Button to view repo on github -->
        <div class="buttondiv">
          <button class="page_buttons">
            <a
              :href="`https://github.com/${details.full_name}`"
              target="_blank"
              rel="noreferrer"
              class="viewongit"
            >
              View on Github
            </a>
          </button>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
// import { FaCodeFork, FaEye, FaGithub, FaRegStar } from "vue-icons/fa6";

export default {
  name: "RepoDetails",
  components: {
    NavBar,
    Footer,
    // FaCodeFork,
    // FaEye,
    // FaGithub,
    // FaRegStar,
  },
  setup() {
    const route = useRoute();
    const id = route.params.id;
    const details = ref({});

    onMounted(() => {
      fetch(`https://api.github.com/repos/Dennardavid/${id}`)
        .then((response) => response.json())
        .then((data) => {
          details.value = data;
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    });

    return {
      details,
    };
  },
};
</script>

<style scoped>
.fullpage {
  height: 100%;
}
.repodetail-card {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.repo-name {
  font-family: "Ojuju", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-size: 40px;
  margin-left: -3px;
  margin-bottom: 5px;
  line-height: 50px;
  font-style: normal;
  color: #fff;
}
.repo_card {
  border: 2px solid #013440;
  width: 500px;
  border-radius: 10px;
  padding: 20px;
  background-color: rgba(240, 83, 35, 0.5);
  box-shadow: 0 7px 8px 0 rgba(0, 0, 0, 0.5), 0 5px 20px 0 rgba(0, 0, 0, 0.19);
}
.page_buttons {
  background-color: #013440;
  padding: 10px;
  width: 200px;
  border: none;
  border-radius: 20px;
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 16px;
  cursor: pointer;
  margin-top: 30px;
}
.viewongit {
  color: #fff;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
}
.buttondiv {
  padding-top: 20px;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
}
.repo-mini-details {
  display: flex;
  /* background-color: green; */
  gap: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.just,
.repo-stats {
  display: flex;
  justify-content: center;
  align-items: center;
}
.justimg {
  color: #013440;
  width: 30px;
}
.repo-stats {
  gap: 5px;
}

@media screen and (max-width: 500px) {
  .repo-name {
    font-size: 30px;
  }
  .repo_card {
    width: 90%;
  }
}

@media screen and (max-width: 400px) {
  .repo-name {
    font-size: 25px;
  }
  .repo_card {
    width: 90%;
  }
  .repo-stats {
    gap: 2px;
    font-size: 14px;
  }
  .page_buttons {
    width: 40px;
    font-weight: 500;
    font-size: 16px;
  }
}

@media screen and (max-width: 330px) {
  .repo-stats {
    gap: 2px;
    font-size: 10px;
  }
  .repo-name {
    font-size: 20px;
  }
}
</style>
