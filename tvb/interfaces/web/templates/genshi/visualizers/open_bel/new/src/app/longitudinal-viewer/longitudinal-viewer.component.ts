import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-longitudinal-viewer',
  templateUrl: './longitudinal-viewer.component.html',
  styleUrls: ['./longitudinal-viewer.component.css', '../global-style.css']
})
export class LongitudinalViewerComponent implements OnInit {
  data = [
    {
      visible: 'legendonly',
      type: 'scatter', // all "scatter" attributes: https://plot.ly/javascript/reference/#scatter
      line: { shape: 'spline' },
      x: [
        0.529411764705882,
        0.541176470588235,
        0.552941176470588,
        0.564705882352941,
        0.647058823529412,
        0.658823529411765,
        0.670588235294118,
        0.682352941176471,
        0.764705882352941,
        0.776470588235294,
        0.788235294117647,
        0.8,
      ], // more about "x": #scatter-x
      y: [
        0.411301569049573,
        0.427930971086883,
        0.437718409625499,
        0.444434834506958,
        0.43841391388284,
        0.466353551949924,
        0.481905951720887,
        0.473256828290679,
        0.453221899029746,
        0.473695340442853,
        0.486012067608996,
        0.500418453790595,
      ], // #scatter-y
      name: 'AB40',
    },
    {
      visible: 'legendonly',
      type: 'scatter', // all "scatter" attributes: https://plot.ly/javascript/reference/#scatter
      line: { shape: 'spline' },
      x: [
        0.529411764705882,
        0.541176470588235,
        0.552941176470588,
        0.564705882352941,
        0.647058823529412,
        0.658823529411765,
        0.670588235294118,
        0.682352941176471,
        0.764705882352941,
        0.776470588235294,
        0.788235294117647,
        0.8,
      ], // more about "x": #scatter-x
      y: [
        0.336473892244031,
        0.350914934791542,
        0.369877336711644,
        0.382466261304816,
        0.348090404888793,
        0.362657080725461,
        0.375752218845437,
        0.387424628030647,
        0.28180423467992,
        0.298193106515107,
        0.311079900598061,
        0.335135043045149,
      ], // #scatter-y
      name: 'AB42',
    },
    {
      visible: 'legendonly',
      type: 'scatter', // all "scatter" attributes: https://plot.ly/javascript/reference/#scatter
      line: { shape: 'spline' },
      x: [
        0.529411764705882,
        0.541176470588235,
        0.552941176470588,
        0.564705882352941,
        0.647058823529412,
        0.658823529411765,
        0.670588235294118,
        0.682352941176471,
        0.764705882352941,
        0.776470588235294,
        0.788235294117647,
        0.8,
      ], // more about "x": #scatter-x
      y: [
        0.137708004453001,
        0.133358155659918,
        0.133560269743197,
        0.131900217195238,
        0.124867107214024,
        0.120035354851477,
        0.120686522481616,
        0.128665726237752,
        0.122410025913179,
        0.102273042157669,
        0.109086516918501,
        0.111652300133981,
      ], // #scatter-y
      name: 'AB42RatioAB40',
    },
    {
      visible: 'legendonly',
      type: 'scatter', // all "scatter" attributes: https://plot.ly/javascript/reference/#scatter
      line: { shape: 'spline' },
      x: [
        0.529411764705882,
        0.552941176470588,
        0.564705882352941,
        0.576470588235294,
        0.588235294117647,
        0.647058823529412,
        0.658823529411765,
        0.682352941176471,
        0.694117647058824,
      ], // more about "x": #scatter-x
      y: [
        0.275078119832423,
        0.308509840355362,
        0.304785812900566,
        0.32073307642414,
        0.339298076251284,
        0.369083451949537,
        0.385039927038785,
        0.340697218117062,
        0.365030521525656,
      ], // #scatter-y
      name: 'ABETA',
    },
    {
      visible: 'legendonly',
      type: 'scatter', // all "scatter" attributes: https://plot.ly/javascript/reference/#scatter
      line: { shape: 'spline' },
      x: [
        0.529411764705882,
        0.535294117647059,
        0.541176470588235,
        0.552941176470588,
        0.647058823529412,
        0.652941176470588,
        0.658823529411765,
        0.670588235294118,
        0.682352941176471,
        0.764705882352941,
        0.770588235294118,
        0.776470588235294,
        0.788235294117647,
      ], // more about "x": #scatter-x
      y: [
        0.00433980045232104,
        0.00455715279564146,
        0.00503668242997885,
        0.00599574169865365,
        0.0666768392337826,
        0.069002842157139,
        0.0710465985807416,
        0.0756986044274543,
        0.0806328567739209,
        0.231595625679594,
        0.250066193344548,
        0.281362680379281,
        0.367073021347562,
      ], // #scatter-y
      name: 'CDRSB',
    },
    {
      visible: 'legendonly',
      type: 'scatter', // all "scatter" attributes: https://plot.ly/javascript/reference/#scatter
      line: { shape: 'spline' },
      x: [
        0.529411764705882,
        0.535294117647059,
        0.541176470588235,
        0.552941176470588,
        0.647058823529412,
        0.652941176470588,
        0.658823529411765,
        0.670588235294118,
        0.682352941176471,
        0.764705882352941,
        0.770588235294118,
        0.776470588235294,
        0.788235294117647,
      ], // more about "x": #scatter-x
      y: [
        0.161976750327553,
        0.15929719096286,
        0.156617631598167,
        0.151258512868782,
        0.213222018485271,
        0.212835132113362,
        0.212448245741453,
        0.211674472997636,
        0.210900700253818,
        0.250675230171132,
        0.278064500906578,
        0.31517242614321,
        0.408825585618848,
      ], // #scatter-y
      name: 'Cognition',
    },
    {
      visible: 'legendonly',
      type: 'scatter', // all "scatter" attributes: https://plot.ly/javascript/reference/#scatter
      line: { shape: 'spline' },
      x: [
        0.529411764705882,
        0.535294117647059,
        0.541176470588235,
        0.552941176470588,
        0.647058823529412,
        0.652941176470588,
        0.658823529411765,
        0.670588235294118,
        0.764705882352941,
        0.770588235294118,
        0.776470588235294,
        0.788235294117647,
      ], // more about "x": #scatter-x
      y: [
        0.494031938412892,
        0.499874413098791,
        0.505232218762921,
        0.50854504358208,
        0.543655513557017,
        0.544533724392122,
        0.547658066247053,
        0.559022337700512,
        0.70538922015292,
        0.716679998623258,
        0.726165388667109,
        0.753857974815165,
      ], // #scatter-y
      name: 'Entorhinal',
    },
    {
      // visible: 'legendonly',
      type: 'scatter', // all "scatter" attributes: https://plot.ly/javascript/reference/#scatter
      line: { shape: 'spline', dash: 'dash', width: 5 },
      x: [
        0.529411764705882,
        0.535294117647059,
        0.541176470588235,
        0.552941176470588,
        0.647058823529412,
        0.652941176470588,
        0.658823529411765,
        0.670588235294118,
        0.764705882352941,
        0.770588235294118,
        0.776470588235294,
        0.788235294117647,
      ], // more about "x": #scatter-x
      y: [
        0.435795861032036,
        0.439186456312056,
        0.443608706785592,
        0.456967132911412,
        0.438540554090538,
        0.444351410190868,
        0.442735264414945,
        0.453733041849034,
        0.630627571006051,
        0.639496543115438,
        0.653172629785891,
        0.682340903099579,
      ], // #scatter-y
      name: 'Hippocampal formation',
    },
    {
      visible: 'legendonly',
      type: 'scatter', // all "scatter" attributes: https://plot.ly/javascript/reference/#scatter
      line: { shape: 'spline' },
      x: [
        0.529411764705882,
        0.535294117647059,
        0.541176470588235,
        0.552941176470588,
        0.647058823529412,
        0.652941176470588,
        0.658823529411765,
        0.670588235294118,
        0.682352941176471,
        0.764705882352941,
        0.770588235294118,
        0.776470588235294,
        0.788235294117647,
      ], // more about "x": #scatter-x
      y: [
        0.0347575705379995,
        0.0382019471890005,
        0.0362039247039649,
        0.0388451214524598,
        0.0592044460829085,
        0.057183213483887,
        0.0613383956177654,
        0.0610235674602493,
        0.0755103464609065,
        0.241383975076047,
        0.273563401265787,
        0.321613230281511,
        0.401842485486975,
      ], // #scatter-y
      name: 'MMSE',
    },
    {
      visible: 'legendonly',
      type: 'scatter', // all "scatter" attributes: https://plot.ly/javascript/reference/#scatter
      line: { shape: 'spline' },
      x: [
        0.529411764705882,
        0.552941176470588,
        0.564705882352941,
        0.576470588235294,
        0.588235294117647,
        0.647058823529412,
        0.658823529411765,
        0.682352941176471,
        0.694117647058824,
      ], // more about "x": #scatter-x
      y: [
        0.45880558212467,
        0.482713220922961,
        0.477651593357181,
        0.48908581264277,
        0.503946929570367,
        0.532834058982944,
        0.56566607465001,
        0.556918822412765,
        0.554357490381539,
      ], // #scatter-y
      name: 'TAU',
    },
    {
      visible: 'legendonly',
      type: 'scatter', // all "scatter" attributes: https://plot.ly/javascript/reference/#scatter
      line: { shape: 'spline' },
      x: [
        0.529411764705882,
        0.552941176470588,
        0.564705882352941,
        0.576470588235294,
        0.588235294117647,
        0.647058823529412,
        0.658823529411765,
        0.682352941176471,
        0.694117647058824,
      ], // more about "x": #scatter-x
      y: [
        0.411263134986023,
        0.47925470581894,
        0.481165790758,
        0.513055306586326,
        0.518092849205159,
        0.494997681745537,
        0.528315412509146,
        0.570255973449671,
        0.575193089422189,
      ], // #scatter-y
      name: 'PTAU',
    },
    {
      visible: 'legendonly',
      type: 'scatter', // all "scatter" attributes: https://plot.ly/javascript/reference/#scatter
      line: { shape: 'spline' },
      x: [
        0.529411764705882,
        0.535294117647059,
        0.541176470588235,
        0.552941176470588,
        0.647058823529412,
        0.652941176470588,
        0.658823529411765,
        0.670588235294118,
        0.764705882352941,
        0.770588235294118,
        0.776470588235294,
        0.788235294117647,
      ], // more about "x": #scatter-x
      y: [
        0.495111448507894,
        0.506329093606161,
        0.509099205043363,
        0.526432812073312,
        0.466775442122454,
        0.475676957823396,
        0.487001032652787,
        0.496893873081542,
        0.576926629778508,
        0.596174815244803,
        0.607816455859437,
        0.636454013629331,
      ], // #scatter-y
      name: 'Ventricles',
    },
  ];

  layout = {
    // all "layout" attributes: #layout
    font: { family: 'Lato,"Helvetica Neue",Arial,Helvetica,sans-serif' },
    title: 'AD pathological cascade model based on ADNI data', // more about "layout.title": #layout-title
    titlefont: { family: 'Lato,"Helvetica Neue",Arial,Helvetica,sans-serif' },
    hoverlabel: { font: { family: 'Lato,"Helvetica Neue",Arial,Helvetica,sans-serif' } },
    xaxis: {
      title: 'Normalized time',
      titlefont: { family: 'Lato,"Helvetica Neue",Arial,Helvetica,sans-serif' },
      range: [0, 1],
      autorange: true,
    },
    yaxis: {
      title: 'Normalized biomarker abnormality',
      titlefont: { family: 'Lato,"Helvetica Neue",Arial,Helvetica,sans-serif' },
      range: [0, 1],
      autorange: true,
    },
    showlegend: true,
    legend: { font: { family: 'Lato,"Helvetica Neue",Arial,Helvetica,sans-serif' } },
    autoscale: true,
    annotations: [
      // all "annotation" attributes: #layout-annotations
      {
        text: 'Dementia', // #layout-annotations-text
        font: { family: 'Lato,"Helvetica Neue",Arial,Helvetica,sans-serif' },
        x: 0.75, // #layout-annotations-x
        xref: 'x', // #layout-annotations-xref
        y: 0, // #layout-annotations-y
        yref: 'y', // #layout-annotations-yref
        align: 'center',
        ax: 0,
        ay: -300,
        arrowhead: 1,
        arrowcolor: 'rgba(0,0,0,1)',
      },
      {
        text: 'MCI', // #layout-annotations-text
        font: { family: 'Lato,"Helvetica Neue",Arial,Helvetica,sans-serif' },
        x: 0.64, // #layout-annotations-x
        xref: 'x', // #layout-annotations-xref
        y: 0, // #layout-annotations-y
        yref: 'y', // #layout-annotations-yref
        arrowhead: 1,
        arrowcolor: 'rgba(0,0,0,1)',
        ax: 0,
        ay: -300,
      },
    ],
  };
  config = {
    showLink: false,
    displayModeBar: true,
  };
  ngOnInit() {
  }

}
