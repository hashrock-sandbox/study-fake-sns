new Vue({
  el: "#app",
  methods: {
    tweet() {
      this.items.unshift({
        name: "me",
        contents: this.input,
      });
      this.input = "";
    },
    url(contents) {
      return (
        "https://twitter.com/intent/tweet?text=" + encodeURIComponent(contents)
      );
    },
  },
  data: {
    input: "",
    items: [
      {
        name: "@hoge hoge",
        contents: "おいしい",
      },
      {
        name: "@hoge hoge",
        contents: "よかった",
      },
      {
        name: "@hoge hoge",
        contents: "拡散希望",
      },
      {
        name: "@hoge hoge",
        contents: "なるほど",
      },
      {
        name: "@hoge hoge",
        contents: "最高",
      },
    ],
  },
});
