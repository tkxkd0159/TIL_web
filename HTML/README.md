# html
`p` tag는 단락을 정의. 즉, 위아래 margin이 자동으로 들어감 <br>
`div` tag는 HTML 구역을 분할한다. 즉 margin이 없음. `div` 안에 `p` 정의 가능. 반대는 불가<br>
`id`는 한 요소당 한개만 사용 가능, 같은 `id`를 여러 요소가 공유 불가.  
`class`는 여러 요소가 공유 가능하고 여러 개의 `class`를 한 요소에 적용 가능

```html
<link href="../css/basic.css" rel="stylesheet" />
<script src="../js/sample.js"></script>
<span></span>
<img src="../img/sample.jpg" width="500" height="300" />
<a href="" target="_blank"></a>
```

# Tag
## style in html
```html
<style>
  h1 {
    color: green;
    text-align: center;
  }

  p {
    font-size: 18px;
  }
</style>

<h1 style="color: green; text-align: center;">Hello World!</h1>
```