# vue3-basic-and-jd

1.v-once 放在组件中，只渲染一次后续改变data里的这个属性,将不会再重新渲染改变后的值。
2.computed与methods的区别， computed是依赖于此属性计算的其他值发生变化时才会执行，methods是页面重新渲染时就会执行
3.生命周期，在 某一时刻 自动 执行的函数
4. input 修饰符 trim(去空格),number(转数字)，lazy(失去焦点时才更新数据)

在事件处理程序中调用 event.preventDefault() 或 event.stopPropagation() 是非常常见的需求。尽管我们可以在方法中轻松实现这点，但更好的方式是：方法只有纯粹的数据逻辑，而不是去处理 DOM 事件细节。

为了解决这个问题，Vue.js 为 v-on 提供了事件修饰符。之前提过，修饰符是由点开头的指令后缀来表示的。

<!-- 阻止单击事件继续传播 -->
<a v-on:click.stop="doThis"></a>
stop停止子传父冒泡

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>
阻止默认事件

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即元素自身触发的事件先在此处处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>
从默认冒泡变为capture父传子捕获，先执行父再执行子
<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</div>
只执行当前元素事件，既不会冒泡也不会捕获
复制代码
注意：

使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 v-on:click.prevent.self 会阻止所有的点击，而 v-on:click.self.prevent 只会阻止对元素自身的点击。

<!-- 点击事件将只会触发一次 -->
<a v-on:click.once="doThis"></a>



五. mixin:  1.组件的data，methods优先级高于mixin里面的data,methods
2.生命周期函数先执行mixin里的再执行组件里的

六. compositionApi：
setup()在vue实例完全初始化之前执行，取不到this实例

1.ref和react方法 都能把非双向数据绑定的数据变双向数据绑定的数据，都是利用proxy对象转成双向数据绑定的对象proxy((key, value: ''))。两者区别是ref作用于基本数据类型，后者作用于非基础数据类型

为了取响应式对象里的key-value 普通解构出来的属性是没有响应式的，即使用react对象包裹， 需要使用toRefs包裹才可以赋予解构的响应式。即在原来的proxy({name: 'Yip'})前 套上 toRefs({name: proxy({name: 'Yip})})

2.toRefs 与 toRef的区别

toRefs 用于将响应式对象转换为结果对象，其中结果对象的每个属性都是指向原始对象相应属性的ref。常用于es6的解构赋值操作，因为在对一个响应式对象直接解构时解构后的数据将不再有响应式，而使用toRefs可以方便解决这一问题。

 ·获取数据值的时候需要加.value
 ·toRefs后的ref数据不是原始数据的拷贝，而是引用，改变结果数据的值也会同时改变原始数据
作用其实和 toRef 类似，只不过 toRef 是一个个手动赋值，而    ·toRefs 是自动赋值。

3.watch和watchEffect的区别
·watch在生命周期开始第一次不执行（watch的惰性）；watch对象需要传待监听的对象的值；能获取新旧值
·watchEffect立即执行；传参只传入回调函数；不能获取到旧的值