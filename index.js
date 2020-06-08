import { html, render } from "https://unpkg.com/lit-html?module";

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
  watch: {
    isCoding(val) {
      if (val && this.input === "") {
        this.input =
          "const myTemplate = (name) => " +
          "\n" +
          "html`" +
          "\n" +
          "<div>Hello ${name}</div>" +
          "\n" +
          "`;" +
          "\n" +
          "render(myTemplate('lit-html'), this.$refs.preview);";
      }
    },
    input(val) {
      if (this.isCoding) {
        eval(this.input);
      }
    },
  },
  computed: {},
  data: {
    isCoding: false,
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
  mounted() {
    // テンプレートを定義
    const myTemplate = (name) => html`<p>Hello ${name}</p>`;

    // テンプレートをページに描画
    render(myTemplate("World"), this.$refs.preview);
  },
});
