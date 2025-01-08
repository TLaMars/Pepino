<script lang="ts">
  import CodeMirror, {
    type EditorConfiguration,
    type EditorFromTextArea,
  } from "codemirror";
  import { onMount } from "svelte";

  import type { Theme, Language, SettingPadding } from "../types";
  import hljs from "../utils/hljs-helper";
  import LANGUAGES from "../constants/languages";
  import Gradient from "./Gradient.svelte";
  import TitleBar from "./TitleBar.svelte";
  import EXAMPLES from "../constants/examples";
  import type { Writable } from "svelte/store";

  const example = EXAMPLES[Math.floor(Math.random() * EXAMPLES.length)];

  export let imageElement: HTMLElement | undefined = undefined;
  export let language: Language;
  export let theme: Theme;
  export let lineNumbers: boolean;
  export let width: number | "auto";
  export let background: boolean;
  export let coloredButtons: boolean;
  export let padding: SettingPadding;
  export let title: Writable<string>;

  let element: HTMLTextAreaElement;
  let editor: EditorFromTextArea | undefined = undefined;
  let value: string = example.code;

  onMount(() => {
    if (editor) element.innerHTML = "";

    editor = CodeMirror.fromTextArea(element, {
      autocorrect: true,
      spellcheck: true,
      tabSize: 2,
      mode: {
        name: example.language.mode,
        typescript: true,
      },
      lineNumbers,
      lineWrapping: true,
    });

    editor.on("change", () => {
      value = editor?.getValue() ?? "";
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

    changeOption("mode", language.mode);
  }

  function changeOption(option: keyof EditorConfiguration, value: any) {
    if (!editor) return;

    editor.setOption(option, value);
  }

  $: checkLanguage(value);
  $: changeMode(language);
  $: changeOption("lineNumbers", lineNumbers);
  $: elementWidth = width === "auto" ? "auto" : `${width}px`;
  $: style = Object.keys(theme.colors).reduce<string>(
    // @ts-ignore -- fix this
    (styleVars, key) => (styleVars += `--code-${key}: ${theme.colors[key]}; `),
    ""
  );
</script>

<div
  class="container"
  bind:this={imageElement}
  style="width: {elementWidth}; padding: {padding}px;"
>
  <div class="pepino" class:shadow={background} {style}>
    <TitleBar colored={coloredButtons} bind:title />
    <textarea bind:this={element} bind:value></textarea>
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
    max-width: 152rem;
  }

  .pepino {
    padding: 1.6rem;
    border-radius: var(--border-radius-m);
    background: var(--code-background);
    backdrop-filter: blur(1rem);
    -webkit-backdrop-filter: blur(1rem);
    font: var(--code);

    &.shadow {
      box-shadow: var(--box-shadow);
    }
  }
</style>
