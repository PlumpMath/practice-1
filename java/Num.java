class Num 
{
	/*
		-7:11111001
			
		1.先去负数的绝对值，求出改绝对值得二进制形式（原码）
			00000111
		2.原码取反得到反码
			11111000
		3.反码+1得到补码。
			11111001

		数据类型转化要注意的细节：
		1.凡是byte\short\char 数据类型在运算的时候都会自动转换成int类型的数据再运算。
		2.两个不同的数据类型的数据在运算的时候，结果取决于大的数据类型。
	*/
	public static void main(String[] args) 
	{
		byte a = 1;
		byte b = 2;
		byte c = (byte)(a+b);
		System.out.println(Integer.toBinaryString(-7));
		System.out.println(c);

		int i = 10;
		long l = 20L;
		i = (int)(i+l);
		System.out.println(i);

		byte x = 10;
		//一个整数没有加上任何标识的时候，默认是int类型
		//10 是一个常量，在编译的时候，编译器在编译的时候就能确认常量的值，byte x = 10；
		//java编译器会检查到10没有超出byte的范围，所以允许赋值。
		//java 编译器在编译的时候，并不能确定变量所存储的值，例如 byte y = z;
		//变量存储的值是在运行的时候才在内存中分配空间
		System.out.println(x);
	}
}
