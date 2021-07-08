import {editor} from "monaco-editor";
import ITextModel = editor.ITextModel;
import IStandaloneCodeEditor = editor.IStandaloneCodeEditor;

const f = require('monaco-editor');

const maps = {
    'C': 'c',
    'C++': 'cpp'
}

let instance: IStandaloneCodeEditor;
let model: ITextModel;

function standardize(lang: string) {
    // @ts-ignore
    return maps[lang];
}

function parser(selector: any, lang: string, code: string) {
    instance = f.editor.create(selector, {
        value: code,
        language: standardize(lang),
        automaticLayout: true,
        fontFamily: 'Cascadia Code',
        fontLigatures: true,
        minimap: {
            enabled: false
        }
    });
    model = instance.getModel() as ITextModel;

    console.log(model)
}

function langSwitch(newLang: string) {
    editor.setModelLanguage(model, standardize(newLang)); //to do
    console.log(model)
}

function getCodes() {
    return model.getValue();
}

export {
    parser,
    langSwitch,
    getCodes
}