
    const students = []
    students.push({이름: '구름', 국어: 87, 영어: 98, 수학: 88, 과학: 90})
    students.push({이름: '별이', 국어: 92, 영어: 98, 수학: 96, 과학: 88})
    students.push({이름: '겨울', 국어: 76, 영어: 96, 수학: 94, 과학: 86})
    students.push({이름: '바다', 국어: 98, 영어: 52, 수학: 98, 과학: 92})

    // 출력
    console.log(JSON.stringify(students, null, 2))