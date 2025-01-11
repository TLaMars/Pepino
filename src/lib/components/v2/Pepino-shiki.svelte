<script lang="ts">
  import { onMount } from "svelte";
  import { CodeJar } from "codejar";
  import Gradient from "../Gradient.svelte";
  import TitleBar from "../TitleBar.svelte";
  import type { Writable } from "svelte/store";
  import type { SettingPadding } from "src/lib/types";
  import getHighlighter from "../../utils/shiki-highlighter";
  import EXAMPLES from "../../constants/examples";
  import type { Theme } from "src/lib/models/theme";
  import type {
    BundledLanguage,
    BundledTheme,
    HighlighterGeneric,
  } from "shiki";

  const example = EXAMPLES[Math.floor(Math.random() * EXAMPLES.length)];

  export let width: number | "auto";
  export let title: Writable<string>;
  export let padding: SettingPadding;
  export let theme: Theme;

  let element: HTMLDivElement;
  let shiki: HighlighterGeneric<BundledLanguage, BundledTheme>;
  let jar: ReturnType<typeof CodeJar>;

  onMount(async () => {
    shiki = await getHighlighter();

    jar = CodeJar(
      element,
      (e) => {
        e.innerHTML = shiki.codeToHtml(e.textContent || "", {
          lang: "tsx",
          theme: "lamars.io",
        });
      },
      {
        tab: "  ",
        addClosing: true,
      }
    );

    jar.updateCode(example.code);
  });

  $: console.log("theme", theme);

  $: style = Object.keys(theme.colors).reduce<string>(
    // @ts-ignore -- fix this
    (styleVars, key) =>
      (styleVars += `--pepino-${key}: ${theme.colors[key]}; `),
    ""
  );
</script>

<div
  class="container"
  style="width: {width === 'auto'
    ? 'auto'
    : `${width}px`}; padding: {padding}px"
>
  <div class="pepino" {style}>
    <TitleBar colored={false} {title} />
    <div class="editor" bind:this={element}></div>
  </div>
  <Gradient gradient={theme.gradient} background />
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
    background: var(--pepino-background);
    backdrop-filter: blur(1rem);
    -webkit-backdrop-filter: blur(1rem);

    &.shadow {
      box-shadow: var(--box-shadow);
    }
  }

  .editor {
    :global(pre) {
      margin: 1.6rem 0 0 0;
      background: transparent !important;
    }

    :global(code) {
      font-family: var(--code) !important;
      font-size: 1.5rem;
    }
  }
</style>
