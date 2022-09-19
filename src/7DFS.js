const chapterTree = {
  name: '总章节',
  children: [
    {
      name: '章节一',
      children: [{
        name: '第一节',
        children: [{
          name: '第一小节'
        }, {
          name: '第二小节'
        }]
      }, {
        name: '第二节'
      }]
    },
    {
      name: '章节二',
      children: [{
        name: '第三节'
      }, {
        name: '第四节'
      }]
    }
  ]
};

const chapterTree1 = {
  name: '总章节',
  children: [
    {
      name: '章节一',
      children: [{
        name: '第一节',
        children: [{
          name: '第一小节'
        }, {
          name: '第二小节'
        }]
      }, {
        name: '第二节'
      }]
    },
    {
      name: '章节二',
      children: [{
        name: '第三节'
      }, {
        name: '第四节'
      }]
    }
  ]
};

// 带编号 (递归)
function serialize(tree, logData = []) {
  let arr = [];
  const before = logData.length > 0 ? `(${logData.join('.')})` : '';

  arr.push(before+tree.name);

  console.log(arr);

  if (!tree.children) {
    return arr;
  };

  for (let i = 0; i < tree.children.length; i++) {
    const logVal = logData.slice();
    // console.log(logVal);
    logVal.push(i + 1);

    // arr = arr.concat(serialize(tree.children[i], logData));
    arr.push(...serialize(tree.children[i], logVal))
  };

  // if (!tree.children) {
  //   return arr;
  // };

  // arr.push(tree.name);

  // for(let i = 0; i < tree.children.length; i++) {
  //   // arr = arr.concat(serialize(tree.children[i]));
  //   serialize(tree.children[i]);
  // };

  return arr;
}

// 不带编号 (递归)
function serialize1 (tree1) {
  let arr = [];

  arr.push(tree1.name);

  if (!tree1.children) {
    return arr;
  };

  for (let i = 0; i < tree1.children.length; i++) {
    // arr = arr.concat(serialize1(tree1.children[i]))
    arr.push(...serialize1(tree1.children[i]));
  };

  return arr;
};

// 非递归 (不带编号)
function serialize2 (tree) {
  let arr = [];
  let res = [];

  res.push(tree);
  arr.push(tree.name);

  while (res.children) {
    for (let i = 0; i < res.children.length; i++) {
      arr.push(res.children[i].name);
      if (res.children[i].children){
        res.push(res.children[i]);
      }
    };
  };

  return arr;
};

// 带编号
const result = serialize(chapterTree);
console.log(result);

// 不带编号
const resData = serialize1(chapterTree1);
console.log(resData);

// 非递归
const a = serialize2(chapterTree);
console.log(a);
// ["总章节", "章节一", "第一节", "第一小节", "第二小节", "第二节", "章节二", "第三节", "第四节"]

// const a = [1, 2, 3];

// console.log(a.slice());
