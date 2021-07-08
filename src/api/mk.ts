import mk from 'markdown-it';

const k = require('@iktakahiro/markdown-it-katex')
const prism = require("markdown-it-prism")
const hljs = require('@/assets/highlight.js');


const _mk = mk({
    html: true,
    linkify: true,
    typographer: true,
    breaks: true,
    langPrefix: 'lang-',
    highlight: (code: string, lang: string) => {
        if (lang && hljs.getLanguage(lang)) {
            let pre = hljs.highlightAuto(code).value;
            return pre;
            // let lines = pre.split(/\n/).slice(0, -1);
            // pre = lines.map((ele: any, i: number) => {
            //     return "<span class='line-id'>" + (i + 1) + ' ' + "</span>" + ele + '\n'
            // }).join('')
            // pre = "<div class='code-blocks'>" + pre + "</div>";
            // return pre
        }
    }
}).use(k)


export default _mk