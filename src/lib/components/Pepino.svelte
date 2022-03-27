<script lang="ts">
  import CodeMirror, { EditorFromTextArea } from "codemirror";
  import { onMount } from "svelte";

  import type { Theme, Language, SettingPadding } from "../types";
  import hljs from "../utils/hljs-helper";
  import LANGUAGES from "../cconstants/languages";
  import Gradient from "./Gradient.svelte";
  import TitleBar from "./TitleBar.svelte";

  export let imageElement: HTMLElement | undefined = undefined;
  export let language: Language;
  export let theme: Theme;
  export let lineNumbers = false;
  export let width: number | "auto";
  export let background: boolean;
  export let coloredButtons: boolean;
  export let padding: SettingPadding;

  let element: HTMLTextAreaElement;
  let editor: EditorFromTextArea | undefined = undefined;

  // Example code
  let value: string = `import React from "react"; \n\nconst Login: React.FC = () => ( \n  <div>    
    <input type="text" placeholder="Name" />   
    <input type="password" placeholder="Pass" />\n  </div>\n);\n\nexport default Login;`;

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
  $: elementWidth = width === "auto" ? "auto" : `${width}px`;
  $: style = Object.keys(theme.colors).reduce<string>(
    (styleVars, key) => (styleVars += `--code-${key}: ${theme.colors[key]}; `),
    ""
  );
</script>

<div
  class="container"
  bind:this={imageElement}
  style="width: {elementWidth}; padding: {padding}px;"
>
  <div class="pepino" {style}>
    <TitleBar colored={coloredButtons} />
    <textarea bind:this={element} {value} />
  </div>
  {#if background}
    <Gradient gradient={theme.gradient} background />
  {/if}
</div>

<style lang="scss">
  .container {
    position: relative;
    box-sizing: border-box;
    width: auto;
    min-width: 52rem;
    max-width: 102rem;
  }

  .pepino {
    padding: 1.6rem;
    border-radius: var(--border-radius-m);
    background: var(--code-background);
    backdrop-filter: blur(1rem);
    -webkit-backdrop-filter: blur(1rem);
    font: var(--code);
    box-shadow: var(--box-shadow);
  }
</style>
