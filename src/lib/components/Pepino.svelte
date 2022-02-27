<script lang="ts">
  import CodeMirror, { EditorFromTextArea, getMode } from "codemirror";
  import { onMount } from "svelte";
  import hljs from "../utils/hljs-helper";
  import LANGUAGES from "../cconstants/languages";

  let element: HTMLTextAreaElement | undefined = undefined;
  let value: string = "const string = 'string';";
  let language: string = "auto";
  let editor: EditorFromTextArea = undefined;

  onMount(() => {
    if (editor) element.innerHTML = "";

    editor = CodeMirror.fromTextArea(element, {
      autocorrect: true,
      spellcheck: true,
      tabSize: 2,
      mode: {
        name: "text/typescript",
        typescript: true,
      },
      lineNumbers: true,
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

<div class="editor">
  <textarea bind:this={element} {value} class="editor" />
  {#if editor}
    <p>{editor.getMode().name}</p>
  {/if}
</div>

<style lang="scss">
  .editor {
    padding: 1.6rem;
    border-radius: 1.2rem;
    background: rgba(255, 255, 255, 0.45);
    backdrop-filter: blur(0.95rem);
    -webkit-backdrop-filter: blur(9.5px);
  }

  :root {
  }

  :global(.CodeMirror) {
    height: auto !important;
    color: var(--code-text) !important;
    background-color: var(--code-background) !important;
    padding: 1.6rem 0;
    background-color: transparent !important;
    border: none;
    font-size: 1.6rem;
    line-height: 1.5;
  }

  :global(.CodeMirror-gutters) {
    color: transparent !important;
    background-color: transparent !important;
    border: none !important;
  }

  :global(.CodeMirror-linenumber) {
    color: var(--code-text) !important;
  }

  :global(.CodeMirror-cursor) {
    border-left: solid 1px var(--code-text) !important;
  }

  :global(.cm-string),
  :global(.cm-string-2) {
    color: var(--code-string) !important;
  }

  :global(.cm-comment) {
    color: var(--code-comment) !important;
  }

  :global(.cm-variable) {
    color: var(--code-variable) !important;
  }

  :global(.cm-callee) {
    color: var(--code-property) !important;
  }

  :global(.cm-variable-2) {
    color: var(--code-variable2) !important;
  }

  :global(.cm-variable-3) {
    color: var(--code-variable3) !important;
  }

  :global(.cm-number) {
    color: var(--code-number) !important;
  }

  :global(.cm-atom) {
    color: var(--code-atom) !important;
  }

  :global(.cm-keyword) {
    color: var(--code-keyword) !important;
  }

  :global(.cm-property) {
    color: var(--code-property) !important;
  }

  :global(.cm-def) {
    color: var(--code-definition) !important;
  }

  :global(.cm-meta) {
    color: var(--code-meta) !important;
  }

  :global(.cm-operator) {
    color: var(--code-operator) !important;
  }

  :global(.cm-attribute) {
    color: var(--code-attribute) !important;
  }

  :global(.cm-tag) {
    color: var(--code-tag) !important;
  }

  :global(.cm-builtin) {
    color: var(--code-builtin) !important;
  }

  :global(.cm-qualifier) {
    color: var(--code-keyword) !important;
  }
</style>
