class Operate{
	public static void main(String[] args){
		//在java中做取模运算时，结果的正负号是取决于被除数。
		System.out.println("结果"+(10%3));   //1
		System.out.println("结果"+(-10%3));	 //-1	
		System.out.println("结果"+(10%-3));	 //1
		System.out.println("结果"+(-10%-3)); //-1
		int i = 0;
		i = i++;
		System.out.println(i);
	}
}