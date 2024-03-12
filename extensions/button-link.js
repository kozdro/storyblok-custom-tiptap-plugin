import { Mark, mergeAttributes } from '@tiptap/core'

export const ButtonLink = Mark.create({
  name: 'buttonLink',

  addAttributes() {
    return {
      href: {
        default: null,
      },
      class: {
        default: 'button-link',
      },
    };
  },
  
  parseHTML() {
    return [
      {
        tag: 'a[href]',
        getAttrs: dom => ({ href: dom.getAttribute('href'), class: dom.getAttribute('class') }),
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['a', mergeAttributes(HTMLAttributes), 0];
  },

  addCommands() {
    return {
      setButtonLink:
        attributes => ({ commands }) => {
          return commands.setMark(this.name, attributes);
        },
      unsetButtonLink:
        () => ({ commands }) => {
          return commands.unsetMark(this.name);
        },
    };
  },
});
