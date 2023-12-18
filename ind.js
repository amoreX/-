function prog11(){
    const prog1 ="from sympy import * \n"+
                "t=Symbol('t') \n"+
                "r=Symbol('r') \n"+
                "r=4*(1+cost(t)) \n"+
                "r1=Derivative(r,t).doit() \n"+
                "r2-Derivative(r1,t).doit() \n"+
                "rho=(r**2+r1**2)**(3/2)/(r**2+2*r1**2-r*r2) \n"+
                "display(simplify(rho) \n"+
                "rho1=rho.subs(t,pi/2) \n"+
                "print('The radius of curvature at %0.4f is %0.4f units'%(pi,rho1)) \n";
    navigator.clipboard.writeText(prog1);
}

function prog22(){
    const prog2 ="from sympy import * \n"+
    "init_printing()\n"+
    "x,y,z=symbols('x,y,z)\n"+
    "u=x*y/z\n"+
    "v=y*z/x \n"+
    "w=z*x/y \n"+
    "dux=diff(u,x) \n"+
    "duy=diff(u,y) \n"+
    "duz=diff(u,z) \n"+
    "dvx=diff(v,x) \n"+
    "dvy=diff(v,y) \n"+
    "dvz=diff(v,z) \n"+
    "dwx=diff(w,x) \n"+
    "dwy=diff(w,y) \n"+
    "dwz=diff(w,z) \n"+
    "J=Matrix([[dux,duy,duz],[dvx,dvy,dvz],[dwx,dwy,dwz]]) \n"+
    "print('the Jacobian matrix') \n"+
    "display(J)\n";
    navigator.clipboard.writeText(prog2);
}

function prog33(){
    const prog3 ="meow meow"
                 
    navigator.clipboard.writeText(prog3);
}

function prog44(){
    const prog4 ="A=np.matrix([[1,-2,1],[2,1,5],[3,3,4]])\n"+
                "B=np.matrix([[1],[2],[1]])\n"+
                "AB=np.concatenate((A,B),axis=1)\n"+
                "rA=np.linalg.matrix_rank(A)\n"+
                "rAB=np.linalg.matrix_rank(AB)\n"+
                "n=A.shape[1]\n"+
                "if (rA==rB):\n"+
                "  if(rA==n):\n"+
                "      print('The system has unique slutions')\n"+
                "      print(np.linalg.solve(A,B)\n"+
                "  else:\n"+
                "      print('the sytem has infinitely many solutions')\n"+
                "else:\n"+
                "  print('The system is inconsitent')\n";
    navigator.clipboard.writeText(prog4);
}

function prog55(){
    const prog5 =" meow meow "
    navigator.clipboard.writeText(prog5);
}
