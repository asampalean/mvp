<template>
  <v-container>
    <v-row justify="space-around">
      <v-switch v-model="drawer" class="ma-2" label="v-model"></v-switch>

      <v-switch v-model="miniVariant" class="ma-2" label="Mini variant"></v-switch>

      <v-switch v-model="background" class="ma-2" label="Background"></v-switch>

      <v-switch v-model="right" class="ma-2" label="Right"></v-switch>
    </v-row>

    <v-card height="400" class="overflow-hidden">
      <v-navigation-drawer
        v-model="drawer"
        :search="search"
        :mini-variant="miniVariant"
        :right="right"
        :src="bg"
        absolute
        light
      >
        <v-list dense nav class="py-0">
          <v-list-item two-line :class="miniVariant && 'px-0'">
            <v-list-item-avatar>
              <img src="https://i.imgur.com/a9BI08n.png" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>AccessibleART</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>
                <router-link :to="item.link">{{ item.title }}</router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "SIGN IN", icon: "mdi-view-dashboard", link: "/sign-in" },
        { title: "SIGN UP", icon: "mdi-view-dashboard", link: "/sign-up" },
        { title: "ARTWORK", icon: "mdi-image", link: "/artwork" },
        {
          title: "SHOPPING CART",
          icon: "mdi-shopping_cart",
          link: "/shopping-cart"
        }
      ],
      search: "",
      right: true,
      miniVariant: false,
      expandOnHover: false,
      background: false
    };
  },
  computed: {
    bg() {
      return this.background ? "https://i.imgur.com/LZJRNzE.jpg" : undefined;
    }
  }
};
</script>

<style></style>
