import { visit } from 'unist-util-visit';

export default function remarkAddClasses() {
  return function transformer(tree) {
    visit(tree, 'heading', (node) => {
      if (!node.data) node.data = {};
      if (!node.data.hProperties) node.data.hProperties = {};
      switch (node.depth) {
        case 1:
          node.data.hProperties.className = 'mb-30 fz-50 fw-600';
          break;
        case 2:
          node.data.hProperties.className = 'mb-30 fz-40 fw-600';
          break;
        case 3:
          node.data.hProperties.className = 'mb-20 fz-30 fw-600';
          break;
        default:
          break;
      }
    });

    visit(tree, 'paragraph', (node) => {
      if (!node.data) node.data = {};
      if (!node.data.hProperties) node.data.hProperties = {};
      node.data.hProperties.className = 'mb-20';
    });

    visit(tree, 'thematicBreak', (node) => {
      if (!node.data) node.data = {};
      if (!node.data.hProperties) node.data.hProperties = {};
      node.data.hProperties.className = 'mt-30 mb-30';
    });

    visit(tree, 'list', (node) => {
      if (!node.ordered) {
        if (!node.data) node.data = {};
        if (!node.data.hProperties) node.data.hProperties = {};
        node.data.hProperties.className = 'dot-list mb-20';
      }
    });

    visit(tree, 'listItem', (node) => {
      if (!node.data) node.data = {};
      if (!node.data.hProperties) node.data.hProperties = {};
      node.data.hProperties.className = 'mb-10';
    });
  };
}