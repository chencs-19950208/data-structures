// 链表（散乱）： 与数组类似，他们都是有序得列表，都是线性结构（有且仅有一个前驱，有且仅有一个后继）
// 不同点在于，链表中，数据单位得名称叫结点，而结点与结点得分布，在内存中可以是离散的。

/**
 * 1.正是由于数组中的元素是连续的，每个元素的内存地址可以根据其索引距离数组头部的距离来计算出来。
 * 因此对数组来说，每一个元素都可以通过数组的索引下标直接定位。
 */


/**
 * 链表中，每个结点的结构都是包括两部分内容： 数据域， 指针雨。js中的链表，是以嵌套的对象形式来实现的；
 */

/**
 * {
 *    val: 1,
 *    next: {
 *      val: 2,
 *      next: ...
 *    }    
 * }
 */

// 链表创建
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const node = new ListNode(1);
node.next = new ListNode(2);

const node3 = new ListNode(3);

// 1, 2 之间加个 3 结点
node3.next = node1.next;
node.next = node3;

// 1， 2 之间删除 3 结点
node1.next = node3.next;

/**
 * 但是链表也有一个弊端：当我们试图读取某一个特定的链表结点时，必须遍历整个链表来查找它。
 * 比如说我要在一个长度为 n（n>10） 的链表里，定位它的第 10 个结点
 */

const index = 10; // 记录目标结点的位置
let node = head  // 设一个游标指向链表的第一个结点

for(let i = 0; i < index && node; i++) {
  node = node.next;
}
