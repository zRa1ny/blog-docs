import { DefaultTheme } from 'vitepress';
export const nav: DefaultTheme.NavItem[] = [
    {
        text: '技术笔记',
        items: [
            { text: '概念', link: '/technology/theory/' },
            { text: '学习笔记', link: '/technology/study/' },
            { text: '源码学习', link: '/technology/source/' },
            // { text: '技术教程', link: '/technology/learn/' },
            // { text: '模板工程', link: '/technology/tpl/' }
            // { text: '个人作品', link: '/technology/works/' },
        ]
    },
    {
        text: '计算机基础',
        items: [
            { text: '算法与数据结构', link: '/computerBase/algorithm/' },
            // { text: '操作系统', link: '/computerBase/os/' },
            // { text: '计算机网络', link: '/computerBase/Internet/' },
            { text: '设计模式', link: '/computerBase/design/' },
        ]
    },
    {
        text: '大前端',
        items: [
            { text: 'javascript', link: '/bigWeb/js/' },
            { text: 'html', link: '/bigWeb/html/' },
            { text: 'css', link: '/bigWeb/css/' },
            { text: '浏览器', link: '/bigWeb/browser/' },
            // { text: 'Web性能优化', link: '/bigWeb/performance/' },
            // { text: 'regexp', link: '/bigWeb/regexp/' },
            // { text: 'node', link: '/bigWeb/node/' }
        ]
    },
    {
        text: '关于我',
        items: [
            { text: 'Github', link: 'https://github.com/zRa1ny' },
            { text: 'Gitee', link: 'https://gitee.com/zRainy' },
            {
                text: '掘金',
                link: 'https://juejin.cn/user/418232918880926'
            },
            {
                text: 'CSDN',
                link: 'https://blog.csdn.net/qq_41914181'
            }
        ]
    }
];


