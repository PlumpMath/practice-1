import java.util.HashSet;
import java.util.Set;

/**
 * Created by amyqing719@gmail.com on 2016/12/7.
 */
public class Student {
    public String id;
    public String name;
    public Set courses;
    public Student(String id,String name){
        this.id = id;
        this.name = name;
        this.courses = new HashSet();
    }

}
