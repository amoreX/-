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
    const prog3 ="import numpy as np \n"+
    "from scipy . integrate import odeint \n"+
    "import matplotlib . pyplot as plt \n"+
    "def model (y , t ): \n"+
    "  k=0.3 \n"+
    "  return -k*y \n"+
    "y0=5 \n"+
    "t=np . linspace (0 , 20 ) \n"+
    "y= odeint ( model , y0 , t ) \n"+
    "plt . plot (t , y ) \n"+
    "plt . title ('Solution of dy/dt= -ky; k=0.3, y(0)=5') \n"+
    "plt . xlabel ('time ') \n"+
    "plt . ylabel ('y(t)') \n"+
    "plt . show () \n"
                 
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
    const prog5 ="f1 = lambda x ,y , z: ( 17-y+2*z )/20 \n"+
    "f2 = lambda x ,y , z: (-18-3*x+z )/20 \n"+
    "f3 = lambda x ,y , z: ( 25-2*x+3*y )/20 \n"+
    "x0 = 0 \n"+
    "y0 = 0 \n"+
    "z0 = 0  \n"+
    "count = 1 \n"+
    "e = float ( input ('Enter tolerable error : ') ) \n"+
    "print ('\nCount \tx\ty\tz\n') \n"+
    "condition = True \n"+
    "while condition : \n"+
    "  x1 = f1 ( x0 , y0 , z0 ) \n"+ 
    "  y1 = f2 ( x1 , y0 , z0 ) \n"+
    "  z1 = f3 ( x1 , y1 , z0 ) \n"+
    "  print ('%d\t%0.4f\t%0.4f\t%0.4f\n' %( count , x1 , y1 , z1 ) ) \n"+
    "  e1 = abs ( x0-x1 ) ;  \n"+
    "  e2 = abs ( y0-y1 ) ; \n"+
    "  e3 = abs ( z0-z1 ) ; \n"+
    "  count += 1 \n"+
    "  x0 = x1 \n"+
    "  y0 = y1 \n"+
    "  z0 = z1 \n"+
    "  condition = e1>e and e2>e and e3>e \n"+
    "print ('\nSolution : x=%0.3f , y=%0.3f and z = %0.3f\n'% ( x1 , y1 , z1 ) )"

    navigator.clipboard.writeText(prog5);
}
