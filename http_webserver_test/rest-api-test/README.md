# REST API 실험실
API REST를 경험해보기 위한 실험실입니다.

1. npm i json-server
2. npx json-server --watch db.json
3. localhost:3000 접속해서 홈페이지에서 안내하는 내용을 따라 합니다.

```bash
POST  #create
GET   # read
PATCH # Update partially, 설정한 특정항목만 수정
PUT   # Update entirely, 그 level에서 명시해서 전송하지 않은 나머지 항목은 삭제됨
DELETE
```