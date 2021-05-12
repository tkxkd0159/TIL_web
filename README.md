## JSON.stringify, JSON.parse
browser에 object 형태의 값을 전달하고 싶다면 JSON.stringify(target_object)로 string 형변환 해줘야 함. 아니면 그냥 object 자체로 인식<br>
browser에서 string 형변환 되어있는 값을 내 javascript에서 object로 다시 바꾸려면 JSON.parse(target_string)