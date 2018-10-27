# 테스트 주도 개발

테스트를 중심으로 개발을 진행하는것. 실제 개발시간은 늘어나지만 유지보수 시간이 비약적으로 줄어들며, 이에 따라 코드 리팩토링시 신뢰성도 상승한다.

## 테스트 도구

### Mocha

- js TDD 에 사용되는 테스트 러너
- describe 로 테스트 환경을 세팅하며, it 으로 테스트 케이스를 실행시킨다.

### should

- mocha 공식 문서에는 테스트 코드 작성시 'assert 말고 서드 파티 라이브러리를 사용하라'고 명시되어있음

### 슈퍼테스트(superTest)

- 하나의 함수를 테스트 하는 유닛테스트와 달리 슈퍼 테스트는 통합테스트에서 사용한다.
- 유닛테스트 보다 조금 더 큰 규모를 테스트한다.
- 내부적으로 익스프레스 서버를 구동시켜 실제 요청을 보낸 후 결과를 전송한다.

## 데이터베이스

### ORM

- 데이터베이스를 객체로 추상화 해 놓음.
- 쿼리를 직접 작성하는 대신 메소드로 데이터를 관리함
- 잘못사용하면 성능 이슈가 있음
- 노드에서는 주로 시퀄라이저를 사용

### 시퀄라이저

```js
// insert users ('name').values('alice');
User.create({ name: 'alice' });

// select * from users;
User.findAll();

// update users set name = 'bek' where id =1;
User.update({ name: 'bek' }, { where: { id: 1 } });

// delete from users where id = 1;
User.destroy({ where: { id: 1 } });
```

### 모델

- 데이터베이스 테이블을 ORM 으로 추상화 한 것을 모델이라고 한다
- 우리가 사용할 유저 모델을 만들어 보자
  - sequelize.define(): 모델 정의
  - sequelize.sync(): 데이터베이스 연동
