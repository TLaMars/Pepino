<script lang="ts">
  import CodeMirror, { EditorFromTextArea } from "codemirror";
  import { onMount } from "svelte";

  import type { Theme, Language } from "../types";
  import hljs from "../utils/hljs-helper";
  import LANGUAGES from "../cconstants/languages";
  import Gradient from "./Gradient.svelte";
  import TitleBar from "./TitleBar.svelte";

  export let imageElement: HTMLElement | undefined = undefined;
  export let language: Language;
  export let theme: Theme;
  export let lineNumbers = false;

  let element: HTMLTextAreaElement;
  let editor: EditorFromTextArea | undefined = undefined;

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
        name: "text/typescript-jsx",
        typescript: true,
      },
      lineNumbers,
      lineWrapping: true,
    });

    editor.on("change", () => {
      value = editor.getValue();
    });
  });

  function checkLanguage(value: string) {
    if (language.name !== "Auto" || value.length < 1 || !editor) return;

    const detectedLanguage = hljs.highlightAuto(value).language;
    const dLanguage = LANGUAGES.find((l) => l.hljs === detectedLanguage);

    if (!dLanguage) return;

    editor.setOption("mode", dLanguage.mode);
  }

  function changeMode(language: Language) {
    if (language.name === "Auto") {
      checkLanguage(value);
      return;
    }

    editor.setOption("mode", language.mode);
  }

  $: checkLanguage(value);
  $: changeMode(language);
  $: style = Object.keys(theme.colors).reduce<string>(
    (styleVars, key) => (styleVars += `--code-${key}: ${theme.colors[key]}; `),
    ""
  );
</script>

<div class="container" bind:this={imageElement}>
  <div class="pepino" {style}>
    <TitleBar />
    <textarea bind:this={element} {value} />
  </div>
  <Gradient gradient={theme.gradient} background />
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
    border-radius: var(--border-radius-m);
    background: var(--code-background);
    backdrop-filter: blur(1rem);
    -webkit-backdrop-filter: blur(1rem);
    font: var(--code);
    box-shadow: 0 0.8rem 3.2rem 0 rgba(31, 38, 135, 0.37);
  }
</style>
