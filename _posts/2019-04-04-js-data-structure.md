---
layout: post
title: JavaScript数据结构和算法
description: "工作的需要，从头学习数据结构和算法"
modified: 2019-1-1
category: articles
tags: [技术]
---

<section id="table-of-contents" class="toc">
  <header>
    <h3>Contents</h3>
  </header>
<div id="drawer" markdown="1">
*  Auto generated table of contents
{:toc}
</div>
</section><!-- /#table-of-contents -->

![数据结构](/images/ds.jpg)

## 从头学习数据结构和算法

一转眼没有想到在这个公司都呆了五年了，是时候换个工作环境了，于是试着投了两份简历，这时我才猛然醒悟到今年是毕业十周年。IT十年，居然还在做着非常基础的工作，怎么也说不过去了，于是投了几份简历，两次面试下来，发觉面试对于数据结构和算法这种非常基础的考察非常多，这正是我所欠缺的。于是利用这个时间好好学习一下数据结构和算法。

学习中主要参考了《学习JavaScript数据结构和算法》一书，使用JavaScript实现。

### 栈
    function Stack(){
        let items=[];
        this.push=(ele)=>{
            items.push(ele);
        }
        this.pop=()=>{
            return items.pop();
        }
        this.peek=()=>{
            return items[items.length-1];
        }
        this.size=()=>{
            return items.length;
        }
        this.clear=()=>{
            items=[];
        }
        this.print=()=>{
            console.log(items.toString());
        }
    }

### 堆
    function Queue(){
        let items=[];
        this.enqueue=(ele)=>{
            items.push(ele);
        }
        this.dequeue=()=>{
            return items.shift();
        }
        this.front=()=>{
            return items[0];
        }
        this.isEmpty=()=>{
            return items.length==0;
        }
        this.size=()=>{
            return items.length;
        }
        this.print=()=>{
            console.log(items.toString());
        }
    }
