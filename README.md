# TypeScript 클래스 연습

### 인터넷에 나와있는 클래스 문제를 구현하기 
_**자바기반 문제이지만 자바스크립트로 구현**_

#### 1. 다음을 만족하는 Student 클래스를 작성하시오.
    · String형의 학과와 정수형의 학번을 필드로 선언
    · Student 클래스의 main() 메소드에서 Student 객체를 생성하여 학과와 학번 필드에 적당한 값을 입력 후 출력

#### 2. 위에서 구현한 Student 클래스를 다음을 만족하도록 기능을 추가하여 작성하시오.
    · 필드를 모두 private로 하고, getter와 setter를 구현하고
    · Student 클래스의 main() 메소드에서 Student 객체를 생성하여 setter를 사용하여 학과와 학번 필드에 적당한 값을 입력 후 출력


#### 3. 다음에 구현된 Circle 클래스를 참고로 다음을 만족하는 Cylinder 클래스를 작성하시오.
    · 원통을 나타내는 Cylinder 클래스는 Circle형의 원과 실수형의 높이를 필드로 선언
    · 메소드 getVolume()은 원통의 부피를 반환
    · Cylinder 클래스의 main() 메소드에서 반지름이 2.8, 높이가 5.6의 원통의 부피를 출력
```java
public class Circle {

public double radius;

public static double PI = 3.141592;

 

//생성자 구현

public Circle(double radius) {

this.radius = radius;

}

//현재 반지름을 사용하여 원의 면적을 구하는 메소드

public double getArea() {

return radius * radius * PI;

}
````


#### 4.위에서 구현한 Cylinder를 다음 조건에 맞도록 기능을 추가하여 작성하시오.
    · 다음과 같은 객체 생성이 가능하도록 생성자를 구현
    ㆍ Cylinder cd = new Cylinder(new Circle(2.8), 5.6);




