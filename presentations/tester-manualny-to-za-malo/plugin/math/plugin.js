import{KaTeX as t}from"./katex";import{MathJax2 as e}from"./mathjax2";import{MathJax3 as a}from"./mathjax3";let defaultTypesetter=e;/*!
 * This plugin is a wrapper for the MathJax2,
 * MathJax3 and KaTeX typesetter plugins.
 */ export default Plugin=Object.assign(defaultTypesetter(),{KaTeX:t,MathJax2:e,MathJax3:a});