<script>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";

// import { FaGithub } from "vue-icons/fa6";

export default {
  name: "RepoList",
  /*   components: {
    FaGithub,
  }, */
  setup() {
    const repos = ref([]);
    const currentPage = ref(1);

    const fetchMyRepos = () => {
      fetch(
        `https://api.github.com/users/Dennardavid/repos?per_page=12&page=${currentPage.value}`
      )
        .then((response) => response.json())
        .then((data) => {
          repos.value = data;
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value -= 1;
        fetchMyRepos();
      }
    };

    const nextPage = () => {
      if (currentPage.value < 4) {
        currentPage.value += 1;
        fetchMyRepos();
      }
    };

    onMounted(() => {
      fetchMyRepos();
    });

    return {
      repos,
      currentPage,
      prevPage,
      nextPage,
    };
  },
};
</script>

<template>
  <section class="repos">
    <u>
      <h2 class="repo_header"><span>MY</span> REPOSITORIES</h2>
    </u>
    <section class="repo-container">
      <RouterLink
        v-for="repoElement in repos"
        :key="repoElement.id"
        :to="`/repodetails/${repoElement.name}`"
        class="repolink"
      >
        <article class="card">
          <div class="just">
            <img
              src="../assets/github.svg"
              alt="github"
              style="height: 25px; color: white"
              class="justimg"
            />
          </div>
          <h2 class="repoheader">{{ repoElement.name }}</h2>
          <p class="visibility">Visibility: {{ repoElement.visibility }}</p>
          <div class="buttondiv">
            <button class="page_buttons">View details</button>
          </div>
        </article>
      </RouterLink>
    </section>
    <div class="buttondiv">
      <button @click="prevPage" class="page_buttons below">
        Previous page
      </button>
      <button @click="nextPage" class="page_buttons below">Next page</button>
    </div>
  </section>
</template>

<style scoped>
.repos {
  background-color: rgba(240, 83, 35, 0.5);
  padding: 20px 100px 20px 100px;
}
.repo_header {
  color: #fff;
  font-weight: 600px;
  font-size: 50px;
  font-family: "Ojuju", sans-serif;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}
u {
  text-decoration-color: #f05323;
}
span {
  color: #013440;
}
.card {
  background-color: #efd9b4;
  width: 400px;
  border-radius: 20px;
  border: 1px solid #013440;
  padding: 20px;
  cursor: pointer;
  box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.5), 0 0px 5px 0 rgba(0, 0, 0, 0.19);
}
.repoheader {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 20px;
  color: #013440;
}
.Language,
.date,
.visibility {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  color: #f05323;
}

.repo-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  column-gap: 40px;
  row-gap: 20px;
  justify-content: center;
}
.buttondiv {
  padding-top: 20px;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
}
.page_buttons,
.below {
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
}
.repolink {
  text-decoration: none;
}

/* Media query */
@media screen and (max-width: 1400px) {
  .repo-container {
    grid-template-columns: auto auto auto;
  }
  .card {
    width: 350px;
  }
  .repo_header {
    font-size: 40px;
  }
}

@media screen and (max-width: 1400px) {
  .card {
    width: 300px;
  }
  .repoheader {
    font-size: 18px;
  }
}

@media screen and (max-width: 990px) {
  .card {
    width: 260px;
  }
  .repoheader {
    font-size: 16px;
  }
}

@media screen and (max-width: 840px) {
  .card {
    width: 300px;
  }
  .repoheader {
    font-size: 16px;
  }
  .repo-container {
    grid-template-columns: auto auto;
  }
}

@media screen and (max-width: 644px) {
  .card {
    width: 260px;
  }
  .repoheader {
    font-size: 16px;
  }
  .repo-container {
    grid-template-columns: auto auto;
  }
}

@media screen and (max-width: 560px) {
  .card {
    width: 98%;
  }
  .repoheader {
    font-size: 18px;
  }
  .repo_header {
    font-size: 30px;
  }
  .repo-container {
    grid-template-columns: auto;
  }
}

@media screen and (max-width: 490px) {
  .below {
    width: 100%;
    font-size: 12px;
    font-weight: 500;
  }
  .repo_header {
    font-size: 25px;
  }
}

@media screen and (max-width: 435px) {
  .below {
    width: 100%;
    font-size: 10px;
    font-weight: 400;
  }
  .repo_header {
    font-size: 22px;
  }
}

@media screen and (max-width: 400px) {
  .below {
    width: 100%;
    font-size: 7.5px;
    font-weight: 400;
  }
  .repo_header {
    font-size: 20px;
  }
}
</style>
