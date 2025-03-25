/* [create-plugin] version: 5.19.0 */
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
define(["@emotion/css","@grafana/data","@grafana/runtime","@grafana/ui","module","react"], (__WEBPACK_EXTERNAL_MODULE__emotion_css__, __WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_runtime__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_amd_module__, __WEBPACK_EXTERNAL_MODULE_react__) => { return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/SimplePanel.jsx":
/*!************************************!*\
  !*** ./components/SimplePanel.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SimplePanel: () => (/* binding */ SimplePanel)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/css */ \"@emotion/css\");\n/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ \"@grafana/ui\");\n/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/runtime */ \"@grafana/runtime\");\n/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst getStyles = ()=>{\n    return {\n        wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)`\n      font-family: Open Sans;\n      position: relative;\n      width: 100%;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n      overflow: hidden;\n    `,\n        svgContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)`\n      position: relative;\n      width: 100%;\n      height: calc(100% - 80px); /* Reserve space for the text box and button */\n      overflow: hidden;\n      display: flex;\n      background-color: #000;\n      align-items: center;\n      justify-content: center;\n    `,\n        svg: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)`\n      width: 100%;\n      height: 100%;\n      background-color: #000;\n\n      & > div {\n        width: 100%;\n        height: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n\n      & svg {\n        max-width: 100%;\n        max-height: 100%;\n        width: auto;\n        height: auto;\n        object-fit: contain;\n      }\n    `,\n        controlsContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)`\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      padding: 10px;\n      display: flex;\n      justify-content: center;\n      gap: 10px;\n      z-index: 10;\n    `,\n        jsonDisplay: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)`\n      background: rgba(0, 0, 0, 0.05);\n      padding: 8px;\n      border-radius: 4px;\n      font-family: monospace;\n      font-size: 12px;\n      max-height: 200px;\n      overflow-y: auto;\n      white-space: pre-wrap;\n    `\n    };\n};\nconst SimplePanel = ({ options, data, width, height, fieldConfig, id })=>{\n    const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);\n    const [boxColor, setBoxColor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('red');\n    const svgRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n    const [allElements, setAllElements] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n    if (data.series.length === 0) {\n        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.PanelDataErrorView, {\n            fieldConfig: fieldConfig,\n            panelId: id,\n            data: data,\n            needsStringField: true\n        });\n    }\n    var ids = {};\n    data.series.forEach((series)=>{\n        series.fields.forEach((field)=>{\n            if (field.name == 'id') {\n                field.values.forEach((value, index)=>{\n                    ids[value] = {\n                        _index: index\n                    };\n                });\n            }\n        });\n    });\n    data.series.forEach((series)=>{\n        series.fields.forEach((field)=>{\n            if (field.name != 'id') {\n                field.values.forEach((value, index)=>{\n                    for(var a in ids){\n                        if (ids[a]._index == index) {\n                            ids[a][field.name] = value;\n                        }\n                    }\n                });\n            }\n        });\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        console.log(allElements, ids);\n        allElements.forEach((element)=>{\n            if (element.id in ids) {\n                if (element.type == 'text') {\n                    element.element.textContent = ids[element.id][element.field] + ' ' + element.unit;\n                }\n                if (element.type == 'rect') {\n                    element.element.style.fill = ids[element.id][element.field] ? 'lime' : '#FF0000';\n                }\n            }\n        });\n    }, [\n        ids,\n        allElements\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        fetch('/public/plugins/sa-plugin1-panel/img/scada.svg').then((response)=>response.text()).then((svg)=>{\n            if (svgRef.current) {\n                svgRef.current.innerHTML = svg;\n                loadAllElements(svgRef.current);\n                updateColor(svgRef.current, boxColor);\n                console.log('here');\n            }\n        }).catch((error)=>console.error('Error loading SVG:', error));\n    }, []);\n    const updateColor = (svgElement, newColor)=>{\n        if (!svgElement) return;\n        // Make SVG responsive\n        const svgRoot = svgElement.querySelector('svg');\n        if (svgRoot) {\n            svgRoot.setAttribute('width', '100%');\n            svgRoot.setAttribute('height', '100%');\n            svgRoot.setAttribute('preserveAspectRatio', 'xMidYMid meet');\n        }\n    };\n    const toggleColor = ()=>{\n        svgRef.current.querySelectorAll('*').forEach((element, index)=>{\n            if (element.attributes['inkscape:label']) {\n                if (element.tagName == 'text') {\n                    const tspanElement = element.querySelector('tspan');\n                    if (tspanElement) {\n                        const currentDate = new Date().getSeconds();\n                        tspanElement.textContent = new Date().getSeconds();\n                    // Center the text\n                    // element.setAttribute('text-anchor', 'middle');\n                    // element.setAttribute('dominant-baseline', 'middle');\n                    }\n                } else {\n                    element.style.fill = boxColor;\n                }\n            }\n        });\n        setBoxColor(boxColor === 'red' ? 'blue' : 'red');\n    };\n    const loadAllElements = (svgContainer)=>{\n        if (!svgContainer) return;\n        const allElements = svgContainer.querySelectorAll('*');\n        var all = [];\n        allElements.forEach((element, index)=>{\n            if (element.tagName == 'rect') {\n                var label = element.attributes['inkscape:label'];\n                if (label) {\n                    if (label.value.startsWith('%')) {\n                        var field = label.value.split('@')[1];\n                        var id = label.value.split('@')[0].replace('%', '');\n                        all.push({\n                            element: element,\n                            id: id,\n                            field: field,\n                            type: 'rect'\n                        });\n                    }\n                }\n            // all.push({\n            //   element: element,\n            //   id: element.id,\n            //   field: 'value',\n            // }); \n            }\n            if (element.tagName == 'text') {\n                var text = element.textContent;\n                if (text.startsWith('%')) {\n                    var id = text.split('@')[0].replace('%', '');\n                    var field = text.split('@')[1].split('#')[0];\n                    var unit = text.split('@')[1].split('#')[1];\n                    all.push({\n                        element: element,\n                        id: id,\n                        field: field,\n                        type: 'text',\n                        unit\n                    });\n                    element.textContent = '';\n                }\n            }\n        // if(element.attributes['inkscape:label']) {\n        //   console.log(element.attributes['inkscape:label'].value, element.tagName);\n        //   all.push({\n        //     id: element.id,\n        //     type: element.tagName,\n        //     label: element.attributes['inkscape:label'].value,\n        //   });\n        // }\n        });\n        console.log(all);\n        setAllElements(all);\n    };\n    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.wrapper, (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)`\n          width: ${width}px;\n          height: ${height}px;\n        `)\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        ref: svgRef,\n        className: styles.svgContainer\n    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: styles.controlsContainer\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {\n        variant: \"primary\",\n        onClick: toggleColor\n    }, \"Change to \", boxColor === 'red' ? 'Blue' : 'Red')));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFO29CQUM1QyxJQUFJN0IsT0FBTU0sS0FBS3VCLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDQSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQzFDSCxJQUFJSyxJQUFJLENBQUM7d0JBQ1BsQyxTQUFTQTt3QkFDVHZCLElBQUlBO3dCQUNKYyxPQUFPQTt3QkFDUFUsTUFBTTt3QkFDTkU7b0JBQ0Y7b0JBQ0FILFFBQVFFLFdBQVcsR0FBRztnQkFDeEI7WUFDRjtRQUNBLDZDQUE2QztRQUM3Qyw4RUFBOEU7UUFDOUUsZUFBZTtRQUNmLHNCQUFzQjtRQUN0Qiw2QkFBNkI7UUFDN0IseURBQXlEO1FBRXpELFFBQVE7UUFDUixJQUFJO1FBQ047UUFDQUosUUFBUUMsR0FBRyxDQUFDOEI7UUFDWjlDLGVBQWU4QztJQUNqQjtJQUVBLHFCQUNFLGlEQUFDTTtRQUNDQyxXQUFXM0UsZ0RBQUVBLENBQ1hpQixPQUFPWixPQUFPLEVBQ2ROLGlEQUFHLENBQUM7aUJBQ0ssRUFBRWMsTUFBTTtrQkFDUCxFQUFFQyxPQUFPO1FBQ25CLENBQUM7cUJBR0gsaURBQUM0RDtRQUFJRSxLQUFLeEQ7UUFBUXVELFdBQVcxRCxPQUFPWCxZQUFZO3NCQUNoRCxpREFBQ29FO1FBQUlDLFdBQVcxRCxPQUFPVCxpQkFBaUI7cUJBQ3RDLGlEQUFDTiwrQ0FBTUE7UUFBQzJFLFNBQVE7UUFBVUMsU0FBU2xCO09BQWEsY0FDbkMxQyxhQUFhLFFBQVEsU0FBUztBQUtuRCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2EtcGx1Z2luMS1wYW5lbC8uL2NvbXBvbmVudHMvU2ltcGxlUGFuZWwuanN4PzFjZDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUGFuZWxQcm9wcyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgU2ltcGxlT3B0aW9ucyB9IGZyb20gJ3R5cGVzJztcbmltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgdXNlU3R5bGVzMiwgQnV0dG9uIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgUGFuZWxEYXRhRXJyb3JWaWV3IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5cbmNvbnN0IGdldFN0eWxlcyA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB3cmFwcGVyOiBjc3NgXG4gICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYCxcbiAgICBzdmdDb250YWluZXI6IGNzc2BcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4MHB4KTsgLyogUmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIHRleHQgYm94IGFuZCBidXR0b24gKi9cbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBgLFxuICAgIHN2ZzogY3NzYFxuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuXG4gICAgICAmID4gZGl2IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgICYgc3ZnIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgfVxuICAgIGAsXG4gICAgY29udHJvbHNDb250YWluZXI6IGNzc2BcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBnYXA6IDEwcHg7XG4gICAgICB6LWluZGV4OiAxMDtcbiAgICBgLFxuICAgIGpzb25EaXNwbGF5OiBjc3NgXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICBgLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IFNpbXBsZVBhbmVsID0gKHsgb3B0aW9ucywgZGF0YSwgd2lkdGgsIGhlaWdodCwgZmllbGRDb25maWcsIGlkIH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCBbYm94Q29sb3IsIHNldEJveENvbG9yXSA9IHVzZVN0YXRlKCdyZWQnKTtcbiAgY29uc3Qgc3ZnUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbYWxsRWxlbWVudHMsIHNldEFsbEVsZW1lbnRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgaWYgKGRhdGEuc2VyaWVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiA8UGFuZWxEYXRhRXJyb3JWaWV3IGZpZWxkQ29uZmlnPXtmaWVsZENvbmZpZ30gcGFuZWxJZD17aWR9IGRhdGE9e2RhdGF9IG5lZWRzU3RyaW5nRmllbGQgLz47XG4gIH1cbiAgdmFyIGlkcyA9IHt9O1xuICBkYXRhLnNlcmllcy5mb3JFYWNoKChzZXJpZXMpID0+IHtcbiAgICBzZXJpZXMuZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICBpZiAoZmllbGQubmFtZSA9PSAnaWQnKSB7XG4gICAgICAgIGZpZWxkLnZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBpZHNbdmFsdWVdID0ge1xuICAgICAgICAgICAgX2luZGV4OiBpbmRleCxcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgZGF0YS5zZXJpZXMuZm9yRWFjaCgoc2VyaWVzKSA9PiB7XG4gICAgc2VyaWVzLmZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgaWYgKGZpZWxkLm5hbWUgIT0gJ2lkJykge1xuICAgICAgICBmaWVsZC52YWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgZm9yICh2YXIgYSBpbiBpZHMpIHtcbiAgICAgICAgICAgIGlmIChpZHNbYV0uX2luZGV4ID09IGluZGV4KSB7XG4gICAgICAgICAgICAgIGlkc1thXVtmaWVsZC5uYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coYWxsRWxlbWVudHMsIGlkcyk7XG4gICAgYWxsRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgXG4gICAgICBpZiAoZWxlbWVudC5pZCBpbiBpZHMpIHtcbiAgICAgICAgXG4gICAgICAgIGlmKGVsZW1lbnQudHlwZT09J3RleHQnKSB7XG4gICAgICAgICAgZWxlbWVudC5lbGVtZW50LnRleHRDb250ZW50ID0gaWRzW2VsZW1lbnQuaWRdW2VsZW1lbnQuZmllbGRdICsgJyAnICsgZWxlbWVudC51bml0O1xuICAgICAgICB9XG4gICAgICAgIGlmKGVsZW1lbnQudHlwZT09J3JlY3QnKSB7XG4gICAgICAgICAgZWxlbWVudC5lbGVtZW50LnN0eWxlLmZpbGwgPSBpZHNbZWxlbWVudC5pZF1bZWxlbWVudC5maWVsZF0/J2xpbWUnOicjRkYwMDAwJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9LCBbaWRzLCBhbGxFbGVtZW50c10pO1xuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaCgnL3B1YmxpYy9wbHVnaW5zL3NhLXBsdWdpbjEtcGFuZWwvaW1nL3NjYWRhLnN2ZycpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAgIC50aGVuKChzdmcpID0+IHtcbiAgICAgICAgaWYgKHN2Z1JlZi5jdXJyZW50KSB7XG4gICAgICAgICAgc3ZnUmVmLmN1cnJlbnQuaW5uZXJIVE1MID0gc3ZnO1xuICAgICAgICAgIGxvYWRBbGxFbGVtZW50cyhzdmdSZWYuY3VycmVudCk7XG4gICAgICAgICAgdXBkYXRlQ29sb3Ioc3ZnUmVmLmN1cnJlbnQsIGJveENvbG9yKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnaGVyZScpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyBTVkc6JywgZXJyb3IpKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHVwZGF0ZUNvbG9yID0gKHN2Z0VsZW1lbnQsIG5ld0NvbG9yKSA9PiB7XG4gICAgaWYgKCFzdmdFbGVtZW50KSByZXR1cm47XG4gICAgLy8gTWFrZSBTVkcgcmVzcG9uc2l2ZVxuICAgIGNvbnN0IHN2Z1Jvb3QgPSBzdmdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpO1xuICAgIGlmIChzdmdSb290KSB7XG4gICAgICBzdmdSb290LnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMTAwJScpO1xuICAgICAgc3ZnUm9vdC5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICcxMDAlJyk7XG4gICAgICBzdmdSb290LnNldEF0dHJpYnV0ZSgncHJlc2VydmVBc3BlY3RSYXRpbycsICd4TWlkWU1pZCBtZWV0Jyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZUNvbG9yID0gKCkgPT4ge1xuICAgIHN2Z1JlZi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQuYXR0cmlidXRlc1snaW5rc2NhcGU6bGFiZWwnXSkge1xuICAgICAgICBpZiAoZWxlbWVudC50YWdOYW1lID09ICd0ZXh0Jykge1xuICAgICAgICAgIGNvbnN0IHRzcGFuRWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcigndHNwYW4nKTtcbiAgICAgICAgICBpZiAodHNwYW5FbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCkuZ2V0U2Vjb25kcygpO1xuICAgICAgICAgICAgdHNwYW5FbGVtZW50LnRleHRDb250ZW50ID0gbmV3IERhdGUoKS5nZXRTZWNvbmRzKCk7XG4gICAgICAgICAgICAvLyBDZW50ZXIgdGhlIHRleHRcbiAgICAgICAgICAgIC8vIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKTtcbiAgICAgICAgICAgIC8vIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkb21pbmFudC1iYXNlbGluZScsICdtaWRkbGUnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5maWxsID0gYm94Q29sb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZXRCb3hDb2xvcihib3hDb2xvciA9PT0gJ3JlZCcgPyAnYmx1ZScgOiAncmVkJyk7XG4gIH07XG5cbiAgY29uc3QgbG9hZEFsbEVsZW1lbnRzID0gKHN2Z0NvbnRhaW5lcikgPT4ge1xuICAgIGlmICghc3ZnQ29udGFpbmVyKSByZXR1cm47XG4gICAgY29uc3QgYWxsRWxlbWVudHMgPSBzdmdDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnKicpO1xuICAgIHZhciBhbGwgPSBbXTtcbiAgICBhbGxFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgaWYoZWxlbWVudC50YWdOYW1lPT0ncmVjdCcpIHtcbiAgICAgICAgdmFyIGxhYmVsID0gZWxlbWVudC5hdHRyaWJ1dGVzWydpbmtzY2FwZTpsYWJlbCddO1xuICAgICAgICBpZihsYWJlbCkge1xuICAgICAgICAgIFxuICAgICAgICAgIGlmKGxhYmVsLnZhbHVlLnN0YXJ0c1dpdGgoJyUnKSkge1xuICAgICAgICAgICAgdmFyIGZpZWxkID0gbGFiZWwudmFsdWUuc3BsaXQoJ0AnKVsxXTtcbiAgICAgICAgICAgIHZhciBpZCA9IGxhYmVsLnZhbHVlLnNwbGl0KCdAJylbMF0ucmVwbGFjZSgnJScsICcnKTtcbiAgICAgICAgICAgIGFsbC5wdXNoKHtcbiAgICAgICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICBmaWVsZDogZmllbGQsXG4gICAgICAgICAgICAgIHR5cGU6ICdyZWN0JyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgLy8gYWxsLnB1c2goe1xuICAgICAgICAvLyAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICAgIC8vICAgaWQ6IGVsZW1lbnQuaWQsXG4gICAgICAgIC8vICAgZmllbGQ6ICd2YWx1ZScsXG4gICAgICAgIC8vIH0pOyBcbiAgICAgIH1cbiAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT0gJ3RleHQnKSB7XG4gICAgICAgIHZhciB0ZXh0ID0gZWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgICAgaWYgKHRleHQuc3RhcnRzV2l0aCgnJScpKSB7XG4gICAgICAgICAgdmFyIGlkID0gdGV4dC5zcGxpdCgnQCcpWzBdLnJlcGxhY2UoJyUnLCAnJyk7XG4gICAgICAgICAgdmFyIGZpZWxkID0gdGV4dC5zcGxpdCgnQCcpWzFdLnNwbGl0KCcjJylbMF07XG4gICAgICAgICAgdmFyIHVuaXQgPXRleHQuc3BsaXQoJ0AnKVsxXS5zcGxpdCgnIycpWzFdO1xuICAgICAgICAgIGFsbC5wdXNoKHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICBmaWVsZDogZmllbGQsXG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICB1bml0LFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgfVxuICAgICAgfSBcbiAgICAgIC8vIGlmKGVsZW1lbnQuYXR0cmlidXRlc1snaW5rc2NhcGU6bGFiZWwnXSkge1xuICAgICAgLy8gICBjb25zb2xlLmxvZyhlbGVtZW50LmF0dHJpYnV0ZXNbJ2lua3NjYXBlOmxhYmVsJ10udmFsdWUsIGVsZW1lbnQudGFnTmFtZSk7XG4gICAgICAvLyAgIGFsbC5wdXNoKHtcbiAgICAgIC8vICAgICBpZDogZWxlbWVudC5pZCxcbiAgICAgIC8vICAgICB0eXBlOiBlbGVtZW50LnRhZ05hbWUsXG4gICAgICAvLyAgICAgbGFiZWw6IGVsZW1lbnQuYXR0cmlidXRlc1snaW5rc2NhcGU6bGFiZWwnXS52YWx1ZSxcblxuICAgICAgLy8gICB9KTtcbiAgICAgIC8vIH1cbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhhbGwpO1xuICAgIHNldEFsbEVsZW1lbnRzKGFsbCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICBzdHlsZXMud3JhcHBlcixcbiAgICAgICAgY3NzYFxuICAgICAgICAgIHdpZHRoOiAke3dpZHRofXB4O1xuICAgICAgICAgIGhlaWdodDogJHtoZWlnaHR9cHg7XG4gICAgICAgIGBcbiAgICAgICl9XG4gICAgPlxuICAgICAgPGRpdiByZWY9e3N2Z1JlZn0gY2xhc3NOYW1lPXtzdHlsZXMuc3ZnQ29udGFpbmVyfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250cm9sc0NvbnRhaW5lcn0+XG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXt0b2dnbGVDb2xvcn0+XG4gICAgICAgICAgQ2hhbmdlIHRvIHtib3hDb2xvciA9PT0gJ3JlZCcgPyAnQmx1ZScgOiAnUmVkJ31cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsImNzcyIsImN4IiwidXNlU3R5bGVzMiIsIkJ1dHRvbiIsIlBhbmVsRGF0YUVycm9yVmlldyIsImdldFN0eWxlcyIsIndyYXBwZXIiLCJzdmdDb250YWluZXIiLCJzdmciLCJjb250cm9sc0NvbnRhaW5lciIsImpzb25EaXNwbGF5IiwiU2ltcGxlUGFuZWwiLCJvcHRpb25zIiwiZGF0YSIsIndpZHRoIiwiaGVpZ2h0IiwiZmllbGRDb25maWciLCJpZCIsInN0eWxlcyIsImJveENvbG9yIiwic2V0Qm94Q29sb3IiLCJzdmdSZWYiLCJhbGxFbGVtZW50cyIsInNldEFsbEVsZW1lbnRzIiwic2VyaWVzIiwibGVuZ3RoIiwicGFuZWxJZCIsIm5lZWRzU3RyaW5nRmllbGQiLCJpZHMiLCJmb3JFYWNoIiwiZmllbGRzIiwiZmllbGQiLCJuYW1lIiwidmFsdWVzIiwidmFsdWUiLCJpbmRleCIsIl9pbmRleCIsImEiLCJjb25zb2xlIiwibG9nIiwiZWxlbWVudCIsInR5cGUiLCJ0ZXh0Q29udGVudCIsInVuaXQiLCJzdHlsZSIsImZpbGwiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsInRleHQiLCJjdXJyZW50IiwiaW5uZXJIVE1MIiwibG9hZEFsbEVsZW1lbnRzIiwidXBkYXRlQ29sb3IiLCJjYXRjaCIsImVycm9yIiwic3ZnRWxlbWVudCIsIm5ld0NvbG9yIiwic3ZnUm9vdCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRBdHRyaWJ1dGUiLCJ0b2dnbGVDb2xvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhdHRyaWJ1dGVzIiwidGFnTmFtZSIsInRzcGFuRWxlbWVudCIsImN1cnJlbnREYXRlIiwiRGF0ZSIsImdldFNlY29uZHMiLCJhbGwiLCJsYWJlbCIsInN0YXJ0c1dpdGgiLCJzcGxpdCIsInJlcGxhY2UiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwidmFyaWFudCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SimplePanel.jsx\n");

/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   plugin: () => (/* binding */ plugin)\n/* harmony export */ });\n/* harmony import */ var grafana_public_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grafana-public-path */ \"./node_modules/grafana-public-path.js\");\n/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/data */ \"@grafana/data\");\n/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_SimplePanel_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/SimplePanel.jsx */ \"./components/SimplePanel.jsx\");\n/*** IMPORTS FROM imports-loader ***/\n\n\n\n\nconst plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelPlugin(_components_SimplePanel_jsx__WEBPACK_IMPORTED_MODULE_2__.SimplePanel).setPanelOptions((builder)=>{\n    return builder.addTextInput({\n        path: 'text',\n        name: 'Simple text option',\n        description: 'Description of panel option',\n        defaultValue: 'Default value of text input option'\n    }).addBooleanSwitch({\n        path: 'showSeriesCount',\n        name: 'Show series counter',\n        defaultValue: false\n    }).addRadio({\n        path: 'seriesCountSize',\n        defaultValue: 'sm',\n        name: 'Series counter size',\n        settings: {\n            options: [\n                {\n                    value: 'sm',\n                    label: 'Small'\n                },\n                {\n                    value: 'md',\n                    label: 'Medium'\n                },\n                {\n                    value: 'lg',\n                    label: 'Large'\n                }\n            ]\n        },\n        showIf: (config)=>config.showSeriesCount\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNEM7QUFFZTtBQUVwRCxNQUFNRSxTQUFTLElBQUlGLHNEQUFXQSxDQUFnQkMsb0VBQVdBLEVBQUVFLGVBQWUsQ0FBQyxDQUFDQztJQUNqRixPQUFPQSxRQUNKQyxZQUFZLENBQUM7UUFDWkMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLGFBQWE7UUFDYkMsY0FBYztJQUNoQixHQUNDQyxnQkFBZ0IsQ0FBQztRQUNoQkosTUFBTTtRQUNOQyxNQUFNO1FBQ05FLGNBQWM7SUFDaEIsR0FDQ0UsUUFBUSxDQUFDO1FBQ1JMLE1BQU07UUFDTkcsY0FBYztRQUNkRixNQUFNO1FBQ05LLFVBQVU7WUFDUkMsU0FBUztnQkFDUDtvQkFDRUMsT0FBTztvQkFDUEMsT0FBTztnQkFDVDtnQkFDQTtvQkFDRUQsT0FBTztvQkFDUEMsT0FBTztnQkFDVDtnQkFDQTtvQkFDRUQsT0FBTztvQkFDUEMsT0FBTztnQkFDVDthQUNEO1FBQ0g7UUFDQUMsUUFBUSxDQUFDQyxTQUFXQSxPQUFPQyxlQUFlO0lBQzVDO0FBQ0osR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL3NhLXBsdWdpbjEtcGFuZWwvLi9tb2R1bGUudHM/YzIxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYW5lbFBsdWdpbiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgU2ltcGxlT3B0aW9ucyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgU2ltcGxlUGFuZWwgfSBmcm9tICcuL2NvbXBvbmVudHMvU2ltcGxlUGFuZWwuanN4JztcblxuZXhwb3J0IGNvbnN0IHBsdWdpbiA9IG5ldyBQYW5lbFBsdWdpbjxTaW1wbGVPcHRpb25zPihTaW1wbGVQYW5lbCkuc2V0UGFuZWxPcHRpb25zKChidWlsZGVyKSA9PiB7XG4gIHJldHVybiBidWlsZGVyXG4gICAgLmFkZFRleHRJbnB1dCh7XG4gICAgICBwYXRoOiAndGV4dCcsXG4gICAgICBuYW1lOiAnU2ltcGxlIHRleHQgb3B0aW9uJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRGVzY3JpcHRpb24gb2YgcGFuZWwgb3B0aW9uJyxcbiAgICAgIGRlZmF1bHRWYWx1ZTogJ0RlZmF1bHQgdmFsdWUgb2YgdGV4dCBpbnB1dCBvcHRpb24nLFxuICAgIH0pXG4gICAgLmFkZEJvb2xlYW5Td2l0Y2goe1xuICAgICAgcGF0aDogJ3Nob3dTZXJpZXNDb3VudCcsXG4gICAgICBuYW1lOiAnU2hvdyBzZXJpZXMgY291bnRlcicsXG4gICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgIH0pXG4gICAgLmFkZFJhZGlvKHtcbiAgICAgIHBhdGg6ICdzZXJpZXNDb3VudFNpemUnLFxuICAgICAgZGVmYXVsdFZhbHVlOiAnc20nLFxuICAgICAgbmFtZTogJ1NlcmllcyBjb3VudGVyIHNpemUnLFxuICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhbHVlOiAnc20nLFxuICAgICAgICAgICAgbGFiZWw6ICdTbWFsbCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZTogJ21kJyxcbiAgICAgICAgICAgIGxhYmVsOiAnTWVkaXVtJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhbHVlOiAnbGcnLFxuICAgICAgICAgICAgbGFiZWw6ICdMYXJnZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICBzaG93SWY6IChjb25maWcpID0+IGNvbmZpZy5zaG93U2VyaWVzQ291bnQsXG4gICAgfSk7XG59KTtcbiJdLCJuYW1lcyI6WyJQYW5lbFBsdWdpbiIsIlNpbXBsZVBhbmVsIiwicGx1Z2luIiwic2V0UGFuZWxPcHRpb25zIiwiYnVpbGRlciIsImFkZFRleHRJbnB1dCIsInBhdGgiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJkZWZhdWx0VmFsdWUiLCJhZGRCb29sZWFuU3dpdGNoIiwiYWRkUmFkaW8iLCJzZXR0aW5ncyIsIm9wdGlvbnMiLCJ2YWx1ZSIsImxhYmVsIiwic2hvd0lmIiwiY29uZmlnIiwic2hvd1Nlcmllc0NvdW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./module.ts\n");

/***/ }),

/***/ "./node_modules/grafana-public-path.js":
/*!*********************************************!*\
  !*** ./node_modules/grafana-public-path.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var amd_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! amd-module */ \"amd-module\");\n/* harmony import */ var amd_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(amd_module__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n__webpack_require__.p =\n  (amd_module__WEBPACK_IMPORTED_MODULE_0___default()) && (amd_module__WEBPACK_IMPORTED_MODULE_0___default().uri)\n    ? amd_module__WEBPACK_IMPORTED_MODULE_0___default().uri.slice(0, amd_module__WEBPACK_IMPORTED_MODULE_0___default().uri.lastIndexOf('/') + 1)\n    : 'public/plugins/sa-plugin1-panel/';\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvZ3JhZmFuYS1wdWJsaWMtcGF0aC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQ3VDOztBQUV2QyxxQkFBdUI7QUFDdkIsRUFBRSxtREFBYSxJQUFJLHVEQUFpQjtBQUNwQyxNQUFNLHFEQUFpQixVQUFVLHFEQUFpQjtBQUNsRCIsInNvdXJjZXMiOlsid2VicGFjazovL3NhLXBsdWdpbjEtcGFuZWwvLi9ub2RlX21vZHVsZXMvZ3JhZmFuYS1wdWJsaWMtcGF0aC5qcz85M2UzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IGFtZE1ldGFNb2R1bGUgZnJvbSAnYW1kLW1vZHVsZSc7XG5cbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID1cbiAgYW1kTWV0YU1vZHVsZSAmJiBhbWRNZXRhTW9kdWxlLnVyaVxuICAgID8gYW1kTWV0YU1vZHVsZS51cmkuc2xpY2UoMCwgYW1kTWV0YU1vZHVsZS51cmkubGFzdEluZGV4T2YoJy8nKSArIDEpXG4gICAgOiAncHVibGljL3BsdWdpbnMvc2EtcGx1Z2luMS1wYW5lbC8nO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/grafana-public-path.js\n");

/***/ }),

/***/ "@emotion/css":
/*!*******************************!*\
  !*** external "@emotion/css" ***!
  \*******************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__emotion_css__;

/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/runtime":
/*!***********************************!*\
  !*** external "@grafana/runtime" ***!
  \***********************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_runtime__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "amd-module":
/*!*************************!*\
  !*** external "module" ***!
  \*************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_amd_module__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "public/plugins/sa-plugin1-panel/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./module.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});;