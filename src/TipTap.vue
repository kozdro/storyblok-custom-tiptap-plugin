<template>
  <div class="editor">
    <div class="editor-toolbar">
      <div class="editor-toolbar__row">
        <button
          @click="editor.chain().focus().toggleItalic().run()"
          :disabled="!editor.can().chain().focus().toggleItalic().run()"
          :class="{ 'is-active': editor.isActive('italic') }"
        >
          <ItalicIcon />
        </button>
        <button
          @click="editor.chain().focus().toggleStrike().run()"
          :disabled="!editor.can().chain().focus().toggleStrike().run()"
          :class="{ 'is-active': editor.isActive('strike') }"
        >
          <StrikeIcon />
        </button>
        <button
          @click="editor.chain().focus().toggleUnderline().run()"
          :disabled="!editor.can().chain().focus().toggleUnderline().run()"
          :class="{ 'is-active': editor.isActive('underline') }"
        >
          <UnderlineIcon />
        </button>
        <button @click="editor.chain().focus().setTextAlign('left').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }">
          <AlignLeftIcon />
        </button>
        <button @click="editor.chain().focus().setTextAlign('center').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }">
          <AlignCenterIcon />
        </button>
        <button @click="editor.chain().focus().setTextAlign('right').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }">
          <AlignRightIcon />
        </button>
        <button @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }">
          <ListUnorderedIcon />
        </button>
        <button @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor.isActive('orderedList') }">
          <ListOrderedIcon />
        </button>
      </div>

      <div class="editor-toolbar__row">
        <button @click="editor.chain().focus().setParagraph().run()" :class="{ 'is-active': editor.isActive('paragraph') }">
          <ParagraphIcon />
        </button>
        <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
          <H1Icon />
        </button>
        <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
          <H2Icon />
        </button>
        <button @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
          <H3Icon />
        </button>
        <button @click="editor.chain().focus().toggleHeading({ level: 4 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }">
          <H4Icon />
        </button>
        <button @click="setLink" :class="{ 'is-active': editor.isActive('link') }">
          <LinkIcon />
        </button>
        <button @click="addButtonLink" :class="{ 'is-active': editor.isActive('buttonLink') }">
          <ArrowRightIcon />
        </button>
      </div>

      <div class="editor-toolbar__row">
        <button @click="editor.chain().focus().setColor('#002052').run()" style="background-color:#002052;" class="editor-toolbar__text-color" :class="{ 'is-active': editor.isActive('textStyle', { color: '#002052' })}" />
        <button @click="editor.chain().focus().setColor('#4D4D4D').run()" style="background-color:#4D4D4D;" class="editor-toolbar__text-color" :class="{ 'is-active': editor.isActive('textStyle', { color: '#4D4D4D' })}" />
        <button @click="editor.chain().focus().setColor('#979797').run()" style="background-color:#979797;" class="editor-toolbar__text-color" :class="{ 'is-active': editor.isActive('textStyle', { color: '#979797' })}" />
        <button @click="editor.chain().focus().setColor('#EDEDED').run()" style="background-color:#EDEDED;" class="editor-toolbar__text-color" :class="{ 'is-active': editor.isActive('textStyle', { color: '#EDEDED' })}" />
        <button @click="editor.chain().focus().setColor('#CC071E').run()" style="background-color:#CC071E;" class="editor-toolbar__text-color" :class="{ 'is-active': editor.isActive('textStyle', { color: '#CC071E' })}" />
        <button @click="editor.chain().focus().setColor('#399B60').run()" style="background-color:#399B60;" class="editor-toolbar__text-color" :class="{ 'is-active': editor.isActive('textStyle', { color: '#399B60' })}" />
        <button @click="editor.chain().focus().setColor('#86754F').run()" style="background-color:#86754F;" class="editor-toolbar__text-color" :class="{ 'is-active': editor.isActive('textStyle', { color: '#86754F' })}" />
        <button @click="editor.chain().focus().setColor('#000000').run()" style="background-color:#000000;" class="editor-toolbar__text-color" :class="{ 'is-active': editor.isActive('textStyle', { color: '#000000' })}" />
        <button @click="editor.chain().focus().unsetColor().run()">
          unset
        </button>
      </div>

      <div class="editor-toolbar__row">
        <button
          @click="editor.chain().focus().setFontWeight('500').run()"
          :class="{ 'is-active': editor.isActive('textStyle', { fontWeight: '500' }) }"
        >
          <BoldIcon />500
        </button>
        <button
          @click="editor.chain().focus().setFontWeight('600').run()"
          :class="{ 'is-active': editor.isActive('textStyle', { fontWeight: '600' }) }"
        >
          <BoldIcon />600
        </button>
        <button
          @click="editor.chain().focus().setFontWeight('700').run()"
          :class="{ 'is-active': editor.isActive('textStyle', { fontWeight: '700' }) }"
        >
          <BoldIcon />700
        </button>
        <button @click="editor.chain().focus().unsetFontWeight().run()">
          <BoldIcon />unset
        </button>
      </div>

      <div class="editor-toolbar__row editor-toolbar__font-size">
        <button
          @click="editor.chain().focus().setFontSize('12px').run()"
          :class="{ 'is-active': editor.isActive('textStyle', { fontSize: '12px' }) }"
        >
          <FontSizeIcon />12
        </button>
        <button
          @click="editor.chain().focus().setFontSize('14px').run()"
          :class="{ 'is-active': editor.isActive('textStyle', { fontSize: '14px' }) }"
        >
          <FontSizeIcon />14
        </button>
        <button
          @click="editor.chain().focus().setFontSize('16px').run()"
          :class="{ 'is-active': editor.isActive('textStyle', { fontSize: '16px' }) }"
        >
          <FontSizeIcon />16
        </button>
        <button
          @click="editor.chain().focus().setFontSize('18px').run()"
          :class="{ 'is-active': editor.isActive('textStyle', { fontSize: '18px' }) }"
        >
          <FontSizeIcon />18
        </button>
        <button
          @click="editor.chain().focus().setFontSize('20px').run()"
          :class="{ 'is-active': editor.isActive('textStyle', { fontSize: '20px' }) }"
        >
          <FontSizeIcon />20
        </button>
        <button @click="editor.chain().focus().unsetFontSize().run()">
          <FontSizeIcon />unset
        </button>
      </div>

      <div class="editor-toolbar__row">
        <button
          @click="editor.chain().focus().setLetterSpacing('3px').run()"
          :class="{ 'is-active': editor.isActive('textStyle', { letterSpacing: '3px' }) }"
        >
          <LetterSpacingIcon />3
        </button>
        <button @click="editor.chain().focus().unsetLetterSpacing().run()">
          <LetterSpacingIcon />unset
        </button>
      </div>
    </div>
    <editor-content :editor="editor" class="content" />
  </div>  
</template>

<script>
import debounce from 'lodash.debounce'

import { Editor, EditorContent } from '@tiptap/vue-2'
import { Color } from '@tiptap/extension-color'
import StarterKit from '@tiptap/starter-kit'
import TextStyle from '@tiptap/extension-text-style'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import FontSize from 'tiptap-extension-font-size'
import Link from '@tiptap/extension-link'

import { FontWeight } from '../extensions/font-weight.js'
import { LetterSpacing } from '../extensions/letter-spacing.js'
import { ButtonLink } from '../extensions/button-link.js'

import BoldIcon from '../assets/BoldIcon.svg'
import ItalicIcon from '../assets/ItalicIcon.svg'
import StrikeIcon from '../assets/StrikeIcon.svg'
import UnderlineIcon from '../assets/UnderlineIcon.svg'
import ParagraphIcon from '../assets/ParagraphIcon.svg'
import H1Icon from '../assets/H1Icon.svg'
import H2Icon from '../assets/H2Icon.svg'
import H3Icon from '../assets/H3Icon.svg'
import H4Icon from '../assets/H4Icon.svg'
import AlignLeftIcon from '../assets/AlignLeftIcon.svg'
import AlignCenterIcon from '../assets/AlignCenterIcon.svg'
import AlignRightIcon from '../assets/AlignRightIcon.svg'
import FontSizeIcon from '../assets/FontSizeIcon.svg'
import LinkIcon from '../assets/LinkIcon.svg'
import ListUnorderedIcon from '../assets/ListUnorderedIcon.svg'
import ListOrderedIcon from '../assets/ListOrderedIcon.svg'
import LetterSpacingIcon from '../assets/LetterSpacingIcon.svg'
import ArrowRightIcon from '../assets/ArrowRightIcon.svg'

export default {
  name: 'TipTap',
  components: {
    EditorContent,
    BoldIcon,
    ItalicIcon,
    StrikeIcon,
    UnderlineIcon,
    ParagraphIcon,
    H1Icon,
    H2Icon,
    H3Icon,
    H4Icon,
    AlignLeftIcon,
    AlignCenterIcon,
    AlignRightIcon,
    FontSizeIcon,
    LinkIcon,
    ListUnorderedIcon,
    ListOrderedIcon,
    LetterSpacingIcon,
    ArrowRightIcon,
  },
  props: {
    value: {
      type: undefined,
      required: true,
    },
  },
  data() {
    return {
      editor: null,
    }
  },
  mounted() {
    this.editor = new Editor({
      extensions: [
        StarterKit,
        Underline,
        TextAlign.configure({
          types: ['heading', 'paragraph'],
          alignments: ['left', 'center', 'right'],
        }),
        TextStyle,
        Color,
        FontSize,
        Link.configure({
          openOnClick: false,
        }),
        FontWeight,
        LetterSpacing,
        ButtonLink,
      ],
      content: this.value, 
    })

    this.editor.on('update', debounce(({ editor }) => {
      this.$emit('input', editor.getJSON())
    }, 200))
  },
  methods: {
    setLink() {
      const previousUrl = this.editor.getAttributes('link').href
      const url = window.prompt('URL', previousUrl)

      // cancelled
      if (url === null) {
        return
      }

      // empty
      if (url === '') {
        this.editor
          .chain()
          .focus()
          .extendMarkRange('link')
          .unsetLink()
          .run()

        return
      }

      // update link
      this.editor
        .chain()
        .focus()
        .extendMarkRange('link')
        .setLink({ href: url })
        .run()
    },

    addButtonLink() {
      const href = window.prompt('URL')

      // cancelled
      if (href === null) {
        return
      }

      // empty
      if (href === '') {
        this.editor
          .chain()
          .focus()
          .extendMarkRange('link')
          .unsetLink()
          .run()

        return
      }

      this.editor
        .chain()
        .focus()
        .extendMarkRange('link')
        .setButtonLink({ href })
        .run()
    }
  }
}
</script>

<style>
.editor {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #dfe3e8;
  border-radius: 8px;
}

.editor-toolbar {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 6px;
  background-color: #fff;
  border-bottom: 1px solid #dfe3e8;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
}

.editor-toolbar__row {
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  align-items: center;
}

.editor-toolbar button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  cursor: pointer;
  border: 0;
  border-radius: 8px;
  background-color: transparent;
}

.editor-toolbar button.is-active {
  background-color: #EFF1F3;
}

.editor-toolbar__text-color {
  width: 20px;
  height: 20px;
}

.editor-toolbar__text-color.is-active {
  border: 2px solid #01B2B0;
}

.editor-toolbar__font-size button {
  display: flex;
  align-items: flex-end;
}
</style>
