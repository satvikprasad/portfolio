# differential equations
Topic outline (taken from [MATH2552](https://math.gatech.edu/courses/math/2552)):
- linear equations, first order DEs
- systems of first order eqs
- laplace transform
- nonlinear DEs and stability
- numerical methods

[book](https://books.google.rw/books?id=Sy2oDwAAQBAJ&printsec=frontcover&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false)

## linear equations, first order DEs
We deal with differential equations of the first order, i.e
$$
\frac{dy}{dt} = f(t, y)
$$
where $f$ is a given function of two variables. Any differentiable function $y = \phi(t)$ that satisfies this equation for all $t$ in some interval is called a solution.

For an arbitrary $f$, there is no general method for solving this differential equation. The most important kinds:
- separable 
- linear
- exact

Other types of first order differential equations can be transofrmed into separable or linear equations, and then solved.

### separable diff eq
If $f(x, y)$ can be written as a product of $p(x)$ and $q(y)$, i.e
$$
f(x, y) = p(x) \cdot q(y)
$$
then the equation is called separable.

To solve analytically: 
$$
\dfrac{1}{q(y)}\frac{dy}{dx} = p(x) \Rightarrow \int \dfrac{1}{q(y)} dy = \int p(x) dx.
$$

> Find the general solution to the equation $$\dfrac{dy}{dx} = \dfrac{4x-x^3}{4+y^3}.$$ 
>
> $4y + \frac{1}{4}y^4 = 2x^2 - \frac{1}{4}x^4 + C.$

### linear diff eq
A differential equation that can be written in the form 
$$
\frac{dy}{dt} + p(t) y = g(t)
$$
is called linear.

Provided a solution always exists, we can always find an anlytical wsolution.

Remember the product rule:
$$
(uv)' = u'v + uv' \Rightarrow (f(t) \cdot y)' = f'(t) y + f(t) y'.
$$

If we multiply some function in terms of $t$, $a(t)$ to both sides of that first equation, we can get
$$
a(t) y' + a(t) p(t) y = a(t) g(t).
$$

And, motivated to reverse the product rule, we just want $a(t) = f(t),$ and $f'(t) = a(t)p(t),$ i.e, 
$$
\frac{da}{dt} = a \cdot p(t) \Rightarrow ln|a| = \int p(t) dt
\Rightarrow a = \exp\left({\int p(t) dt}\right),
$$
forcing $a \geq 0$ for all $t.$

Then, we can write 
$$
\left[\exp\left(\int p(t) dt\right)y\right]' = \exp\left(\int p(t) dt\right)\cdot g(t),
$$
meaning 
$$
\exp \left(\int p(t) dt\right) y = \int\left[ \exp \left(
    \int p(t) dt
\right)
g(t)\right]
dt,
$$
or 
$$
y = \dfrac{1}{\exp \left(\int p(t) dt\right)} \int\left[ \exp \left(
    \int p(t) dt
\right)
g(t)\right]
dt.
$$
The term $$
a(t) = \exp\left(\int p(t) dt\right)
$$
is called the integrating factor.

#### theorem
> If the functions $p$ and $g$ are continuous on an open interval $I$ containing the point $t = t_0$, then there exists a unique function $y = \phi(t)$ that satisfies 
> $$
> y' + p(t)y = g(t), \qquad y(t_0) = y_0.
> $$

### exact equations
Consider an equation in the form 
$$
M(x, y) + N(x, y) y' = 0.
$$
Our goal is to find a solution for this system. This time, let us apply chain rule.

Consider the mutlivariable function $\phi(x, y).$ Due to the multivariable chain rule, $\phi$ satisfies $\frac{d\phi}{dx} = \frac{\partial \phi}{\partial x} + \frac{\partial \phi}{\partial y} \cdot \frac{dy}{dx}.$

Thus, if $$
M(x,y) = \dfrac{\partial \phi} {\partial x}, \qquad \text{and} \qquad N(x, y) = \dfrac{\partial \phi}{\partial y},
$$
then we know the solution satisfies $\phi(x, y) = C \in \mathbb R.$

This is only possible if the cross-partials are equal, i.e $\partial M / \partial y  = \partial N / \partial x.$

> Solve the differential equation
> $$
> 2x + y^2 + 2xy y' = 0.
> $$
> Taking the cross-partials, we see $\frac{\partial}{\partial y}(2x + y^2) = 2y$ and $\frac{\partial}{\partial x}(2xy) = 2y,$ meaning there is some potential $\phi(x, y)$ satisfying our criterion.
>
> This potential is trivially given by $\phi(x) = x^2 + xy^2,$ meaning our solution set is $$
> x^2 + xy^2 = C \Rightarrow y = \sqrt{\frac{C}{x} - x}.
> $$

#### integrating factors for exact equations
Let's say we have $$M(x, y) + N(x, y) y' = 0$$ where the cross partials are not equal.

Perhaps it's possible to convert this into an exact equation by multiplying both sides by an integrating factor $\mu$?

To satisfy this, we need 
$$
\dfrac{\partial}{\partial y}[\mu(x, y) \cdot M(x, y)] = \dfrac{\partial}{\partial x}[\mu (x, y) \cdot N(x, y)].
$$
Expanding, we get 
$$
\dfrac{\partial \mu}{\partial y} M(x, y) + \mu(x, y) \dfrac{\partial M}{\partial y} =  \dfrac{\partial \mu}{\partial x} N(x, y) + \mu(x, y)\dfrac{\partial N}{\partial x}.
$$

This is usually just as hard to solve as the original equation. If
- $\mu$ only depends on $x,$ then we have 
$$
\mu(x) M_y = \mu' N(x, y) + \mu(x) N_x,
$$
i.e $\mu' = \underbrace{\dfrac{M_y - N_x}{N(x, y)}}_{a(x, y)} \cdot \mu.$
If $a(x, y)$ is a function of a single variable, finding the integrating factor is easy. Since $\mu$ can't depend on $y$, $a$ must be a single function of $x.$ I.e, criteria for I.F $\mu(x)$ is $$
\exists a : \mathbb R \to \mathbb R, \qquad \dfrac{M_y - N_x}{N} = a
$$
- $\mu$ only depends on $y$, then we have 
$$
\mu' M + \mu M_y = \mu N_x \Rightarrow \mu' = \mu \dfrac{N_x - M_y}{M}.
$$
In a similar fashion, if $(N_x - M_y)/M$ is a single function of $y,$ then we can find an I.F in terms of only $y.$

> Solve 
> $$
> (3xy + y^2) + (x^2 + xy)y' = 0.
> $$
> 
> In this case, $M(x, y) = 3xy + y^2,$ and $N(x, y) = x^2 + xy.$ Let's try both criterion. Note that $M_y - N_x = x + y = N/x,$ meaning our first criterion holds. Hence, 
> $$
> \mu' = \frac{1}{x} \mu \Rightarrow \ln \mu = \ln(x) \Rightarrow \mu = x.
> $$
> Finding our potential, 
> $$
> \phi = \int x(3xy + y^2)\ dx = x^3y + \frac{1}{2}y^2x^2 + C.
> $$

### by substitution
#### homogenous diff eqs
A function $f(x, y)$ is homogenous of degree $k$ if 
$$
f(\lambda x, \lambda y) = \lambda^k f(x, y),
$$
for all $(x, y)$ in its domain.

A homogenous differential equation has homogenous $M$, $N$ with degree $k$ such that 
$$
M(x, y) + N(x, y) y' = 0.
$$
Our goal is to make a clever substitution. By homogeneity, we know
$$
x^k M(1, y/x) + x^k N(1,  y/x) y' = 0 \Rightarrow M(1, v) + N(1, v) \cdot y' = 0,
$$
where $v = y/x.$ Thus, 
$$
y' = v'x + v,
$$
transforming our system into 
$$
v + xv' = -\dfrac{m(v)}{n(v)}.
$$
This system is seperable, yielding
$$
\dfrac{vn(v)}{vm(v) + n(v)}v' = -\dfrac{1}{x} \Rightarrow \int \dfrac{vn(v)dv}{vm(v) + n(v)} = - \ln (x).
$$

> Solve the differential equation
> $$
> y' = \dfrac{x^2 -xy +y^2}{xy}.
> $$
> 
> First, we rearrange to yield
> $$
> xy -x^2 - y^2 + xy \cdot \frac{dy}{dx} = 0.
> $$
> 
> Both $M$ and $N$ are homogenous of order $2$.
> Thus, we can write 
> $$
> v - 1 - v^2 + v (v'x + v) = 0 \Rightarrow v - 1 + vx \cdot v' = 0.
> $$
> 
> Separating this differential equation yields
> $$
> \int \dfrac{v}{1-v} dv = \int \dfrac{1}{x} dx
> $$

#### bernoulli ($u = y^{1-n}$)
A differential equation in the form 
$$
\dfrac{dy}{dt} + q(t) y = r(t)y^n
$$
where $n$ is any real number is called a Bernoulli equation.

Dividing both sides by $y^n$, we get
$$
y^{-n} y' + q(t) y^{1-n} = r(t)
$$

Notice that $(y^{1-n})' = (1-n)y^{-n} y',$ meaning we can write the above equation as 

$$
\dfrac{1}{1-n} \dfrac{du}{dt} + q(t) u = r(t),
$$
which is linear and can be solved using an integrating factor.

### problems
- $(3x-y)\dfrac{dx}{dy} + (9y - 2x) = 0$

This is homogenous, so dividing both sides by $y$ yields:
$$
(3u - 1) (u'y + u) + (9-2u) = 0,
$$
where $uy = x,$ meaning $x' = u'y + u.$

Rearranging once more, we get
$$
(3u-1)y \cdot u' + \dfrac{3}{4}((2u - 1)^2 + 11) = 0,
$$
which is now separable:
$$
\int \dfrac{3u - 1}{(2u-1)^2 + 11} du = -\dfrac{3}{4}\ln |y| + C.
$$

Since $3u - 1 = \dfrac{3}{8} \cdot 4(2u-1) + \dfrac{1}{2},$ we can write the left hand side integral as 
$$
\dfrac{3}{8} \ln ((2u-1)^2 + 11) + \dfrac{1}{4\sqrt{11}} \tan^{-1}((2u-1)/\sqrt 11),
$$
yielding a solution:
$$
\left(\left(\frac{2x-y}{y}\right)^2 + 11\right)^{3/2}e^{\frac{1}{\sqrt{11}}\tan^{-1}(\frac{2x-y}{y\sqrt{11}})} = \dfrac{A}{|y|^3},
$$
where $A > 0.$

- $\dfrac{dy}{dx} - 4e^x y^2 = y$

Rearranging, we get 
$$
y^{-2}\dfrac{dy}{dx} - y^{-1} = 4e^x
$$

Letting $u = y^{-1},$ we get $u' = -y^{-2} \dfrac{dy}{dx},$ transforming our differential equation into:
$$
\dfrac{du}{dx} + u = -4e^x.
$$
Thus, we have an I.F of $e^{x},$ yielding
$$
(ue^x)' = -4e^{2x},
$$
meaning $$
y^{-1} = -2e^{x} + Ce^{-x} \Rightarrow y = \dfrac{1}{Ce^{-x}-2e^{x}}.
$$

## systems of first order differential equations
### linear system: $x'(t) = P(t) x(t) + b(t)$
We call this linear system homogenous if $b(t) = 0.$

#### properties of homogenous first order linear systems
Let us consider an arbitrary continuous homogenous first order linear system, given by 
$$
x'(t) = P(t) x(t),
$$
where $x \in \mathbb R^{n},$ and $P(t) \in \mathbb R^{n \times n}.$

Important properties:
::: @ "linear system null uniq" 
1. **Uniqueness of null solution.**

Consider a solution to the above, $x_0(t),$ such that $x_0(t_0) = 0.$ Then, the claim is that $x_0(t) = 0$ is the only unique solution satisfying this property.

> **Proof.** Assume we have a solution $w(t)$ such that $w' = P(t) w$ and $w(t_0) = 0.$ Additionally, for the sake of contradiction assume that $w(\tau) \neq 0$ for some real $\tau.$
> 
> Since it's convenient to deal with scalars, we reduce this to the fact that $u = \dfrac{1}{2}||w||^2$ satisfies $u(\tau) > 0.$ Notice that 
> $$
> u' = w' \cdot w \Rightarrow u' = (P(t) w) \cdot w.
> $$
> 
> By the Cauchy-Schwartz inequality, we know
> $$
> |u'| \leq ||P(t) \cdot w|| \times ||w||.
> $$
> 
> To write this in terms of $u,$ we use the fact that $$||P(t) \cdot w|| \leq ||P(t)|| \cdot ||w|| \leq J ||w||,$$ where $J = \max ||P(t)|| < \infty.$ 
> 
> Thus, we have $|u'| \leq Ju,$ or equivalently, $$-Ju \leq u' \leq Ju.$$
> 
> We want to derive $u \equiv 0,$ by showing $u$ is both nondecreasing and nonincreasing.
> 
> - From $u' - Ju \leq 0,$ we use an integrating factor to derive
> $$
> (e^{-Jt}u)' \leq 0,
> $$
> meaning $e^{-Jt}u$ is non-increasing. Thus, for $t > t_0,$
> $$
> e^{-Jt}u(t) \leq 0,
> $$
> meaning $u(t) = 0.$
> 
> - Similarly, $u' + Ju \geq 0$ implies $(e^{Jt}u)' \geq 0,$ meaning $e^{Jt}u$ is non-decreasing.
> Then, 
> $$
> (e^{-Jt}u)' \leq (e^{Jt}u)' \Rightarrow [u(e^{Jt} - e^{-Jt})]' \geq 0
> $$
> Thus, for $t < t_0,$ $e^{Jt}u(t) \leq 0$ meaning $u(t) = 0.$
> 
> In both cases, $u(\tau) > 0$ is a contradiction, meaning $u(t) = 0.$ This occurs if and only if $w(t) = 0,$ meaning $0$ is the unique solution.
:::

2. **Wronskian can be used to check linear independence**

Let $x_1, \ldots, x_n$ be solutions of $x' = P(t) x$ on an open interval $I$ in which $P(t)$ is continuous.

- If $x_1, \ldots, x_n$ are linearly independent on $I,$ then $W[x_1, \ldots, x_n] \neq 0$ for all $t$ in $I.$

> **Proof.** Let us proceed by contraposition, assuming there is some $t_0$ in I such that $W[x_1, \ldots, x_n] = 0.$ Then, 
> $$
> \{x_1(t_0), \ldots, x_n(t_0)\}
> $$
> are linearly dependent, meaning there are non-zero $c_1, \ldots, c_n$ such that 
> $$
> \sum_{i = 1}^{n} c_i x_i(t_0) = 0.
> $$
> 
> By the uniqueness of the null solution, this means $$
> \sum_{i = 1}^{n} c_i x_i(t) = 0,
> $$
> and hence $x_1, \ldots, x_n$ are linearly dependent.

- If $x_1, \ldots, x_n$ are linearly dependent on $I,$ then $W[x_1, \ldots, x_n] = 0$ over all of $I.$

Trivial by the definition of the determinant.

3. **Any solution can be written as a linear combination of some basis set.** Let $x_1, \ldots, x_n$ be solutions of $$x' = P(t) x$$ on the open interval $I$ such that, for somepoint $t_0$ in this interval, the Wronksian is non-zero. Then, each solution $x = \phi(t)$ can be expressed as a linear combination of $x_i.$

> **Proof.** Assume for the sake of contradiction that we have a solution $\phi(t)$ that canno be expressed as a linear combination of $x_i.$ Let $\phi(t_0) = \phi_0.$ Then, take some linear combination of $x_i$ satisfying this initial condition:
> $$
> X(t_0) c = \phi_0.
> $$
> 
> Since the Wronskian is non-zero at $t_0,$ $c$ is forced and unique. Thus, $X(t) c$ satisfies the system, and has the same initial conditions, meaning $X(t) c = \phi(t)$, violating our assumption.

#### solving using eigenvalue problems
Three cases:
- $A$ has complete set of $n$ linearly independent eigenvectors and all eigenvalues are real,

In this case, $$
\{e^{\lambda_it} v_i : 1 \leq i \leq n\}
$$
where $\lambda_i, v_i$ are the $i$-th eigenvalue-vector pair, spans all solutions.

> **Proof.** First, we prove that all elements of the set are solutions in of themselves: 
> $$
> (e^{\lambda_it}v_i)' = \lambda_i e^{\lambda_i t }v_i = e^{\lambda_i t}(\lambda_i v_i) = A(e^{\lambda_i t} v_i).
> $$
> Thus, their linear combination is also a solution.
> 
> Then, we prove that this set has a non-zero Wronskian:
> $$
> W[e^{\lambda_1 t}v_1, \ldots, e^{\lambda_n t}v_n] = \exp\{(\lambda_1 + \ldots +\lambda_n)t\} \cdot \det[v_1, \ldots, v_n].
> $$
> 
> Since $v_1, \ldots, v_n$ are linearly independent, the Wronskian is non-zero and thus the set of solutions is linearly independent, and every solution can be written as a linear combination of elements in that set.

- $A$ has a complete set of $n$ linearly independent eigenvectors and one or more complex conjugate pairs of eigenvalues

Since $A$ is real, complex eigenvalues must occur in conjugate pairs, and using Euler's theorem they can be reduced to sinusoids.

- $A$ is defective (one or more eigenvalues of $A$ for which the geometric multiplicity is less than the algebraic multiplicity); i.e, $k$ repeated eigenvalues but $m < k$ linearly independent eigenvectorse for this eigenvalue.

#### Fundamental matrix $\Phi(t)$
The fundamental matrix $\Phi(t)$ of the system $x' = Ax$ satisfies $\Phi(t)_{\cdot, j}(t_0) = e_j,$ where $\Phi(t)_{\cdot, j}$ is a solution to the system.

#### Matrix exponentials
In the scalar case, notice that the system $x'=cx$ has solutions in the form
$$
x(t_0) e^{ct}.
$$

In a similar fashion, we define $e^{At}$ for matrix $A$ in a fashion such that $$ 
x(t) = e^{At}\times x(t_0) 
$$
is a solution to $x'=Ax.$

##### Motivating $e^{At}$
We want $e^{0} x(0) = I,$ and currently $$
(X(t) c)(0) = X(0) c.
$$
Solving for the $c$ such that $X(0)c = x(0),$ we get $c = X(0)^{-1} x(0),$ meaning
$$
e^{At} = X(t) X(0)^{-1}.
$$

Note that this does not require $n$ linearly independent eigenvectors, and is general.

Setting $t = 1,$ we get 
$$
e^{A} = X(1) X(0)^{-1}.
$$

#### nonhomogenous linear systems
Turn to the nonhomogenous system $$x'(t) = P(t) x(t) + g(t),$$ where $g(t)$ is nonzero. Let us assume that the homogenous system has a fundamental matrix $X(t).$

For the homogenous system, solutions are in the form $X(t)c$ for constant $c.$ Maybe we can replace $c$ with a nonconstant $u(t),$ and see if that yields us any solutions to the non-homogenous system:
$$
X'(t) u(t) + X(t) u'(t) = P(t) X(t) u(t) + g(t),
$$
which simplifies down to 
$$
X(t) u'(t) = g(t).
$$
On any interval where $P(t)$ is continuous, $X(t)$ is non-singular and hence invertible (non-zero Wronksian), meaning 
$$
u'(t) = X^{-1}(t)g(t).
$$
Thus, we can denote $u(t)$ as
$$
u(t) = \int X^{-1}(t) g(t) dt + c,
$$
where the constant vector $c$ is arbitrary. Hence, the general solution can be written in the form
$$
x(t) = X(t)\int_{t_0}^{t} X^{-1}(t) g(t) dt + X(t) c.
$$

Given an initial value $x(t_0) = x_0,$ we need 
$$
X(t_0) \int_{t_0}^{t_0} X^{-1}(t) g(t) dt + X(t_0) c = x_0,
$$
meaning $c = X^{-1}(t_0) x_0,$ yielding
$$
x(t) = X(t) \int_{t_0}^{t} X^{-1}(\tau) g(\tau) d\tau + X(t) X^{-1}(t_0) x_0.
$$

If instead we force $X(t) = \Phi(t)$ such that $\Phi(t_0) = I,$ this simplifies to:
$$
x(t) = \Phi(t) \int_{t_0}^{t} \Phi^{-1}(\tau) g(\tau)d\tau + \Phi(t) x_0.
$$

If $A$ is constant, $$
x(t) = e^{At} \int_{t_0}^{t} e^{-A\tau} g(\tau) d\tau + e^{At} x_0.
$$

> Use the method of variation of parameters to find the solution to the IVP 
> $$
>   x' = 
>   \begin{pmatrix}
>       -3 & 4 \\
>       -2 & 3 
>   \end{pmatrix}
>   x + \begin{pmatrix}
>       \sin t \\
>       t
>   \end{pmatrix}, \qquad x(0) = e_1.
> $$
>
> Finding the eigenvalues of $A,$ we get $$
>   \lambda^2 = 1 \Rightarrow \lambda = \pm 1,
> $$
> yielding eigenvectors $\langle 1, 1 \rangle$ (+1) and $\langle 2, 1 \rangle$ (-1). Hence, $$
e^{At} = \begin{pmatrix}
e^{t} & 2e^{-t} \\
e^{t} & e^{-t}
\end{pmatrix} \cdot \begin{pmatrix}
1 & 2 \\
1 & 1
\end{pmatrix}^{-1} = 
\begin{pmatrix}
e^{t} & 2e^{-t} \\
e^{t} & e^{-t}
\end{pmatrix} \cdot \begin{pmatrix}
-1 & 2 \\
1 & -1
\end{pmatrix}
$$
simplifying to $$
\begin{pmatrix}
-e^{t} + 2e^{-t} & 2e^{t} - 2e^{-t} \\
-e^{t} + e^{-t} & 2e^{t}  - e^{-t}
\end{pmatrix}
$$
## laplace transform
## nonlinear DEs and stability
## numerical methods
