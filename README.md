<!-- Header -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=200&section=header&text=Team5&fontSize=90" />

# ⛄︎프로젝트 일정⛄︎
<img src="./img/프로젝트일정.png"/>

</br>![slide](https://user-images.githubusercontent.com/83848462/210202091-08c59b60-c454-425b-92ee-10d0adc34638.gif)
![write](https://user-images.githubusercontent.com/83848462/210202101-ce83bda0-5798-4f75-85cb-8c285babeb35.gif)
![admin](https://user-images.githubusercontent.com/83848462/210202102-4a8a197e-32e7-4bfb-af79-8d1e6f672b67.gif)


# 💻 Platforms & Language 🧾

<div>
    <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=MySQL&logoColor=white" />
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" />
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" />
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white" />
    <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=white" />
</div>

</br>

# Tools 🛠️

<div>
    <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat&logo=Visual Studio Code&logoColor=white" />
    <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white" />
</div>

</br>

# 🎨 SNS & Portfolio 🎨 
<div>
     <img src="https://img.shields.io/badge/Tistory-000000?style=flat&logo=Tistory&logoColor=white" />
    <img src="https://img.shields.io/badge/Gmail-EA4335?style=flat&logo=Gmail&logoColor=white" />
</div>


# Express Project

-   강찬수
-   김성희
-   박종환

## 1일차

### 각 파트별 구상

-   HOME
-   JOIN
-   LOGIN
-   PROFILE
-   BOARD/LIST
-   BOARD/WRITE
-   BOARD/VIEW
-   BOARD/MODIFY
-   ADMIN(선택)

### 일정 계획하기

-   날마다 한 라우터씩 구현

### 작업순서 정하기

1. 라우터 연결
2. 컨트롤러 구현
3. 데이터베이스(MYSQL) 구현
4. 레파지토리 구현
5. 서비스 구현
6. 서비스와 컨트롤러 연결
7. 화면 꾸미기(프론트)

### 각 작업별 요구사항 숙지 및 학습하기

### 데이터 저장형태 정하기(SQL)

-   데이터베이스 : project
-   테이블명: user, board

```sql
-- user
+-------------+-------------+------+-----+---------+-------+
| Field       | Type        | Null | Key | Default | Extra |
+-------------+-------------+------+-----+---------+-------+
| user_id     | varchar(50) | NO   | PRI | NULL    |       |
| user_pw     | int         | NO   |     | NULL    |       |
| user_name   | varchar(50) | NO   |     | NULL    |       |
| nickname    | varchar(50) | NO   |     | NULL    |       |
| birth       | date        | NO   |     | NULL    |       |
| gender      | char(4)     | YES  |     | 남자     |       |
| telephone   | char(32)    | YES  |     | NULL    |       |
| mobile      | char(32)    | NO   |     | NULL    |       |
| user_author | tinyint(1)  | NO   |     | 1       |       |
| level       | int         | NO   |     | 3       |       |
+-------------+-------------+------+-----+---------+-------+
```

```sql
--board
+--------------+-------------+------+-----+-------------------+-------------------+
| Field        | Type        | Null | Key | Default           | Extra             |
+--------------+-------------+------+-----+-------------------+-------------------+
| idx          | int         | NO   | PRI | NULL              | auto_increment    |
| subject      | varchar(50) | NO   |     | NULL              |                   |
| user_id      | varchar(50) | NO   |     | NULL              |                   |
| content      | text        | YES  |     | NULL              |                   |
| registerDate | datetime    | YES  |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED |
| hit          | int         | YES  |     | 0                 |                   |
+--------------+-------------+------+-----+-------------------+-------------------+
```

### README 파일 입력

## 2일차

-   분배된 파트 라우터 1개(백엔드)

## 3일차

-   분배된 파트 라우터 1개(백엔드)

## 4일차

-   분배된 파트 라우터 1개(백엔드)
-   화면 꾸미기(프론트 엔드)

## 5일차

-   화면 꾸미기(프론트 엔드)




<!-- 영상 -->


</br>

<!-- Footer -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=200&section=footer&text=Thanks!&fontSize=90" />
