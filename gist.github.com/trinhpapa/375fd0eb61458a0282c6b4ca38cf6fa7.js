document.write('<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-c77408be8058.css">')
document.write('<div id=\"gist108788117\" class=\"gist\">\n    <div class=\"gist-file\" translate=\"no\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-removal-api-js\" class=\"file my-2\">\n    \n    <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-javascript  \">\n\n        \n<div class=\"js-check-bidi js-blob-code-container blob-code-content\">\n\n  <template class=\"js-file-alert-template\">\n  <div data-view-component=\"true\" class=\"flash flash-warn flash-full d-flex flex-items-center\">\n  <svg aria-hidden=\"true\" height=\"16\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\" class=\"octicon octicon-alert\">\n    <path d=\"M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z\"><\/path>\n<\/svg>\n    <span>\n      This file contains bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.\n      <a class=\"Link--inTextBlock\" href=\"https://github.co/hiddenchars\" target=\"_blank\">Learn more about bidirectional Unicode characters<\/a>\n    <\/span>\n\n\n  <div data-view-component=\"true\" class=\"flash-action\">        <a href=\"{{ revealButtonHref }}\" data-view-component=\"true\" class=\"btn-sm btn\">    Show hidden characters\n<\/a>\n<\/div>\n<\/div><\/template>\n<template class=\"js-line-alert-template\">\n  <span aria-label=\"This line has hidden Unicode characters\" data-view-component=\"true\" class=\"line-alert tooltipped tooltipped-e\">\n    <svg aria-hidden=\"true\" height=\"16\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\" class=\"octicon octicon-alert\">\n    <path d=\"M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z\"><\/path>\n<\/svg>\n<\/span><\/template>\n\n  <table data-hpc class=\"highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file\" data-tab-size=\"8\" data-paste-markdown-skip data-tagsearch-lang=\"JavaScript\" data-tagsearch-path=\"removal-api.js\">\n        <tr>\n          <td id=\"file-removal-api-js-L1\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"1\"><\/td>\n          <td id=\"file-removal-api-js-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>var<\/span> <span class=pl-s1>data<\/span> <span class=pl-c1>=<\/span> <span class=pl-k>new<\/span> <span class=pl-v>FormData<\/span><span class=pl-kos>(<\/span><span class=pl-kos>)<\/span><span class=pl-kos>;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-removal-api-js-L2\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"2\"><\/td>\n          <td id=\"file-removal-api-js-LC2\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s1>data<\/span><span class=pl-kos>.<\/span><span class=pl-en>append<\/span><span class=pl-kos>(<\/span><span class=pl-s>&quot;image_file&quot;<\/span><span class=pl-kos>,<\/span> <span class=pl-s1>fileInput<\/span><span class=pl-kos>.<\/span><span class=pl-c1>files<\/span><span class=pl-kos>[<\/span><span class=pl-c1>0<\/span><span class=pl-kos>]<\/span><span class=pl-kos>,<\/span> <span class=pl-s>&quot;@path/to/image&quot;<\/span><span class=pl-kos>)<\/span><span class=pl-kos>;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-removal-api-js-L3\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"3\"><\/td>\n          <td id=\"file-removal-api-js-LC3\" class=\"blob-code blob-code-inner js-file-line\"> <span class=pl-s1>data<\/span><span class=pl-kos>.<\/span><span class=pl-en>append<\/span><span class=pl-kos>(<\/span><span class=pl-s>&quot;image_url&quot;<\/span><span class=pl-kos>,<\/span> <span class=pl-s>&quot;url_to_image&quot;<\/span><span class=pl-kos>)<\/span><span class=pl-kos>;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-removal-api-js-L4\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"4\"><\/td>\n          <td id=\"file-removal-api-js-LC4\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-removal-api-js-L5\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"5\"><\/td>\n          <td id=\"file-removal-api-js-LC5\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>var<\/span> <span class=pl-s1>xhr<\/span> <span class=pl-c1>=<\/span> <span class=pl-k>new<\/span> <span class=pl-v>XMLHttpRequest<\/span><span class=pl-kos>(<\/span><span class=pl-kos>)<\/span><span class=pl-kos>;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-removal-api-js-L6\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"6\"><\/td>\n          <td id=\"file-removal-api-js-LC6\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s1>xhr<\/span><span class=pl-kos>.<\/span><span class=pl-c1>withCredentials<\/span> <span class=pl-c1>=<\/span> <span class=pl-c1>true<\/span><span class=pl-kos>;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-removal-api-js-L7\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"7\"><\/td>\n          <td id=\"file-removal-api-js-LC7\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-removal-api-js-L8\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"8\"><\/td>\n          <td id=\"file-removal-api-js-LC8\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s1>xhr<\/span><span class=pl-kos>.<\/span><span class=pl-en>addEventListener<\/span><span class=pl-kos>(<\/span><span class=pl-s>&quot;readystatechange&quot;<\/span><span class=pl-kos>,<\/span> <span class=pl-k>function<\/span><span class=pl-kos>(<\/span><span class=pl-kos>)<\/span> <span class=pl-kos>{<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-removal-api-js-L9\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"9\"><\/td>\n          <td id=\"file-removal-api-js-LC9\" class=\"blob-code blob-code-inner js-file-line\">  <span class=pl-k>if<\/span><span class=pl-kos>(<\/span><span class=pl-smi>this<\/span><span class=pl-kos>.<\/span><span class=pl-c1>readyState<\/span> <span class=pl-c1>===<\/span> <span class=pl-c1>4<\/span><span class=pl-kos>)<\/span> <span class=pl-kos>{<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-removal-api-js-L10\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"10\"><\/td>\n          <td id=\"file-removal-api-js-LC10\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-smi>console<\/span><span class=pl-kos>.<\/span><span class=pl-en>log<\/span><span class=pl-kos>(<\/span><span class=pl-smi>this<\/span><span class=pl-kos>.<\/span><span class=pl-c1>responseText<\/span><span class=pl-kos>)<\/span><span class=pl-kos>;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-removal-api-js-L11\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"11\"><\/td>\n          <td id=\"file-removal-api-js-LC11\" class=\"blob-code blob-code-inner js-file-line\">  <span class=pl-kos>}<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-removal-api-js-L12\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"12\"><\/td>\n          <td id=\"file-removal-api-js-LC12\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-kos>}<\/span><span class=pl-kos>)<\/span><span class=pl-kos>;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-removal-api-js-L13\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"13\"><\/td>\n          <td id=\"file-removal-api-js-LC13\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-removal-api-js-L14\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"14\"><\/td>\n          <td id=\"file-removal-api-js-LC14\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s1>xhr<\/span><span class=pl-kos>.<\/span><span class=pl-en>open<\/span><span class=pl-kos>(<\/span><span class=pl-s>&quot;POST&quot;<\/span><span class=pl-kos>,<\/span> <span class=pl-s>&quot;https://api.removal.ai/3.0/remove&quot;<\/span><span class=pl-kos>)<\/span><span class=pl-kos>;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-removal-api-js-L15\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"15\"><\/td>\n          <td id=\"file-removal-api-js-LC15\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s1>xhr<\/span><span class=pl-kos>.<\/span><span class=pl-en>setRequestHeader<\/span><span class=pl-kos>(<\/span><span class=pl-s>&quot;Rm-Token&quot;<\/span><span class=pl-kos>,<\/span> <span class=pl-s>&quot;Your Token&quot;<\/span><span class=pl-kos>)<\/span><span class=pl-kos>;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-removal-api-js-L16\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"16\"><\/td>\n          <td id=\"file-removal-api-js-LC16\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-removal-api-js-L17\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"17\"><\/td>\n          <td id=\"file-removal-api-js-LC17\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s1>xhr<\/span><span class=pl-kos>.<\/span><span class=pl-en>send<\/span><span class=pl-kos>(<\/span><span class=pl-s1>data<\/span><span class=pl-kos>)<\/span><span class=pl-kos>;<\/span><\/td>\n        <\/tr>\n  <\/table>\n<\/div>\n\n\n    <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/trinhpapa/375fd0eb61458a0282c6b4ca38cf6fa7/raw/9b0f2036ee0bf34e1be7a96bdf7fd4a118b5587c/removal-api.js\" style=\"float:right\" class=\"Link--inTextBlock\">view raw<\/a>\n        <a href=\"https://gist.github.com/trinhpapa/375fd0eb61458a0282c6b4ca38cf6fa7#file-removal-api-js\" class=\"Link--inTextBlock\">\n          removal-api.js\n        <\/a>\n        hosted with &#10084; by <a class=\"Link--inTextBlock\" href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
