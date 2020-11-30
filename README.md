# TIL_web

`p` tag는 단락을 정의. 즉, 위아래 margin이 자동으로 들어감 <br>
`div` tag는 HTML 구역을 분할한다. 즉 margin이 없음. `div` 안에 `p` 정의 가능. 반대는 불가
`id`는 한 요소당 한개만 사용 가능, 같은 `id`를 여러 요소가 공유 불가. `class`는 여러 요소가 공유 가능하고 여러 개의 `class`를 한 요소에 적용 가능
```html
<span></span>
<img src="" width=, heigh= >
<a href="" >
```

## CSS
[CSS Selector Reference](https://www.w3schools.com/cssref/css_selectors.asp)
```
.a, .b, .c{}   # 쉼표로 연결 시 각각의 항목을 OR로 적용
.a .b .c{}     # 공백으로 연결해서 사용하면 뒤에 나온 개체를 하위개체로 지정
.a.b.c{}       # 공백없이 연결해서 사용하면 AND 적용
```

### JSON.stringify, JSON.parse
browser에 object 형태의 값을 전달하고 싶다면 JSON.stringify(target_object)로 string 형변환 해줘야 함. 아니면 그냥 object 자체로 인식<br>
browser에서 string 형변환 되어있는 값을 내 javascript에서 object로 다시 바꾸려면 JSON.parse(target_string)