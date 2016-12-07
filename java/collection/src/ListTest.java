import java.util.*;

/**
 * Created by amyqing719@gmail.com on 2016/12/7.
 */

/*备选课程类*/
public class ListTest {
    public List coursesToSelect;
    public ListTest(){
        this.coursesToSelect = new ArrayList();
    }

    public void testAdd(){
        Course cr1 = new Course("1","数据结构");
        coursesToSelect.add(cr1);
        Course temp = (Course)coursesToSelect.get(0);
        System.out.println("添加课程成功~"+" id: "+temp.id+" name: "+temp.name);

        Course c2 = new Course("2","java");
        coursesToSelect.add(0,c2);
        Course temp2 = (Course)coursesToSelect.get(0);
        System.out.println("添加课程成功~"+" id: "+temp2.id+" name: "+temp2.name);


        Course c3 = new Course("3","web");
        coursesToSelect.add(c3);
        Course temp3 = (Course)coursesToSelect.get(2);
        System.out.print("id: "+temp3.id+" name: "+temp3.name);

        Course[] course = {new Course("3","高数"),new Course("4","英语")};
        coursesToSelect.addAll(Arrays.asList(course));
        Course temp4 = (Course)coursesToSelect.get(3);
        Course temp5 = (Course)coursesToSelect.get(4);
        System.out.print("id: "+temp4.id+" name: "+temp4.name);
        System.out.print("id: "+temp5.id+" name: "+temp5.name);

    }

    public void testGet(){
        System.out.println("有以下课程待选");
        for(int i = 0;i<coursesToSelect.size();i++){
            Course temp0 = (Course)coursesToSelect.get(i);
            System.out.println("号："+temp0.id+"名字："+temp0.name);
        }
    }

    public void testIterator(){
        Iterator it = coursesToSelect.iterator();
            while(it.hasNext()){
                Course cr = (Course)it.next();
                System.out.println("it ID"+cr.id+"it Name"+cr.name);
            }
    }

    public void testForeach(){
        for(Object obj:coursesToSelect){
            Course cr = (Course)obj;
            System.out.println(cr.id+cr.name+"foreach");
        }
    }
}
