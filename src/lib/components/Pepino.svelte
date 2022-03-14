<script lang="ts">
  import CodeMirror, { EditorFromTextArea } from "codemirror";
  import { onMount } from "svelte";
  import hljs from "../utils/hljs-helper";
  import LANGUAGES from "../cconstants/languages";
  import Gradient from "./Gradient.svelte";
  import TitleBar from "./TitleBar.svelte";

  export let imageElement: HTMLElement | undefined = undefined;
  let element: HTMLTextAreaElement | undefined = undefined;
  let language: string = "auto";
  let editor: EditorFromTextArea = undefined;
  let theme = "beach";
  let lineNumbers = false;

  // Example code
  let value: string = `import React from "react"; \n\nconst Login: React.FC = () => ( \n  <div>    
    <input type="text" placeholder="Username" />   
    <input type="password" placeholder="Password" />\n  </div>\n);\n\nexport default Login;`;

  onMount(() => {
    if (editor) element.innerHTML = "";

    editor = CodeMirror.fromTextArea(element, {
      autocorrect: true,
      spellcheck: true,
      tabSize: 2,
      mode: {
        name: "text/jsx",
        typescript: true,
      },
      lineNumbers,
      lineWrapping: true,
    });

    editor.on("change", () => {
      value = editor.getValue();
    });
  });

  const checkLanguage = async (value: string) => {
    if (language !== "auto" || value.length < 1 || !editor) return;

    const detectedLanguage = hljs.highlightAuto(value).language;
    const dLanguage = LANGUAGES.find((l) => l.hljs === detectedLanguage);

    if (!dLanguage) return;

    editor.setOption("mode", dLanguage.mode);
  };

  $: checkLanguage(value);
</script>

<div class="container" bind:this={imageElement}>
  <div class={`pepino ${theme}`}>
    <TitleBar />
    <textarea bind:this={element} {value} class:beach={theme === "beach"} />
  </div>
  <Gradient {theme} />
</div>

<style lang="scss">
  .container {
    position: relative;
    padding: 1.6rem;
    width: auto;
    min-width: 42rem;
    max-width: 102rem;
  }

  .pepino {
    padding: 1.6rem;
    border-radius: 1.2rem;
    background: var(--code-background);
    backdrop-filter: blur(0.95rem);
    -webkit-backdrop-filter: blur(9.5px);
    font: var(--code);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  }
</style>
