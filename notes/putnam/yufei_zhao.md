# probability
## 3
> An unfair coin (probability p of showing heads) is tossed n times. What is the probability that the number of heads will be even?

We toss a coin with probability $p$ being heads $n$ times. The probability that we get $k$ heads is 
$$
{n \choose k} p^k (1-p)^{n -k},
$$
meaning the probability that we get an even number of heads is 
$$
\sum_{i = 0}^{i = \lfloor n / 2 \rfloor} {n \choose 2i} p^{2i} (1 - p)^{n - 2i}
$$
Notice that 
$$
1 = (p + (1 - p))^n = \sum_{i = 0}^{n} {n \choose i} p^{i} (1- p)^{n - i}.
$$
To cancel out all odd terms, we can add this with 
$$
(1-2p)^n = ((1 - p) - p)^{n} = \sum_{i = 0}^{n} {n \choose i} p^{i} (-1)^{i} (1- p)^{n - i},
$$
yielding 
$$
\dfrac{1 + (1-2p)^n}{2}.
$$

Reflection: *cancelling out even / odd terms when there are powers can be done via a clever substitution, since $(-1)^k$ takes on values based on the parity of $k.$*

## 4
The two people will meet if $|X - Y| \leq 15,$ where $X$ and $Y$ are uniformly distributed between $[0, 60].$ This requires 
$$
Y -15 \leq X \leq 15 + Y.
$$

Hence, this probability will be given by 
$$
\begin{align*}
\dfrac{1}{3600} \int_{0}^{60} \int_{\max(y - 15, 0)}^{\min(60, y + 15)} \, dx \, dy &= \dfrac{1}{360} \int_{0}^{15} \int_{0}^{y + 15} \, dx \, dy \\
&+ \dfrac{1}{3600} \int_{15}^{45} \int_{y -15}^{y + 15}\, dx \, dy \\
&+ \dfrac{1}{3600} \int_{45}^{60} \int_{y - 15}^{60} \, dx \, dy \\
&= \dfrac{1}{3600} \left(
\int_{0}^{15} y + 15 \, dy + \int_{15}^{45} 30 \, dy + \int_{45}^{60} 75 - y \, dy
\right) \\
&= \dfrac{1}{3600} \left(
\frac{3 \cdot 225}{2} + 900 + \frac{3 \cdot 225}{2}
\right) \\
&= \frac{1575}{3600} = 0.4375.
\end{align*}
$$


## 5
> Real numbers are chosen at random from the interval $[0, 1]$. If after choosing the $n$-th number the sum of the numbers so chosen first exceeds 1, show that the expected or average value for $n$ is $e$.

We want to find $E[N],$ i.e
$$
E[N] = \sum_{i = 1}^{\infty} i \cdot \mathbb P(N = i).
$$

Notice that this is equal to 
$$
E[N] = \sum_{i = 1}^{\infty} \left(\sum_{j = 1}^{i} \mathbb P(N = i) \right),
$$
allowing us to swap the order of iteration to yield
$$
E[N] = \sum_{j = 1}^{\infty} \sum_{i = j}^{n} \mathbb P(N = i) = \sum_{j = 1}^{n} \mathbb P(N \geq j).
$$
This is substantially easier, because $$
\mathbb P(N \geq j)
$$
represents the probability that we last at least $j - 1$ rounds without our sum exceeding $1,$ i.e
$$
\mathbb P(N \geq j) = \mathbb P(X_1 + \ldots + X_{n - 1} < 1).
$$
This is the volume of the region defined by $$
\{x_1 + x_2 + \ldots + x_{n - 1} < 1 : x_k \in [0, 1]\}
$$
Let $V : \mathbb Z \times \mathbb R^{+} \to \mathbb R^{+}$ be the volume of 
$$
\{x_1 + x_2 + \ldots + x_n < t : x_k \in [0, 1]\}.
$$
Therefore, integrating along the dimension $x_n,$ we get
$$
V(n, t)  = \int_0^k V(n - 1, t - \tau ) \, d \tau = \int_{0}^{k} V(n - 1, \tau ) \, d \tau.
$$
Additionally, $V(1, t) = t,$ meaning $V(n, t) = \dfrac{t^{n}}{(n)!}.$ We know 
$$
\mathbb P(N \geq j) = V(n - 1, 1) = \dfrac{1}{(n-1)!},
$$
and therefore the expected value of $N$ is 
$$
E[n] = \sum_{j = 0}^{\infty} \dfrac{1}{n!} = e.
$$

Reflection: *Finding the probability of exceeding 1 on exactly the $n$-th step is hard, because we need to assert that on the previous step we didn't exceed it. Comparatively, finding the probability of exceeding 1 on the $\geq n$-th step is easy, since we just need to assert our sum doesn't exceed $1$ on the $n - 1$-th step. Additionally, instead of using an $n$-dimensional integral, it's easier to solve a recurrence.*

## 6
Let $X_1, X_2$ be random variables representing the chosen points. We want $\mathbb P(|X_1 - X_2| \geq \alpha).$ Same process as above.

## 7
We want to find the probability that $\text{round}(x / y) = 2k,$ where $k$ is an arbitrary integer. I.e., we have 
$$
2k - \frac{1}{2} < x/y < 2k + \frac{1}{2}
$$
for any integer $k.$

Rearranging, we have 
$$
\left(2k - \frac{1}{2}\right)y < x < \left(2k + \frac{1}{2}\right)y
$$
Since outcomes are disjoint over $k,$ and $x / y > 0,$ we 
$$
p = \mathbb P\left(x < \frac{1}{2} y\right) + \sum_{k = 1}^{\infty} \mathbb P\left(\left(2k - \frac{1}{2}\right)y < x < \left(2k + \frac{1}{2}\right)y\right).
$$

## 12
> A dart, thrown at random, hits a square target. Assuming any two parts of the target of equal area are equally likely to be hit, find the probability that the point hit is nearer to the center than to any edge. Express your answer in the form ($a\sqrt{b} + c)/d$, where $a, b, c, d$ are integers.

Base our center at the origin $(0, 0),$ and an edge at $y = 1.$ The region composed of points that are closer to the origin than the line are given by
$$
\sqrt{x^2 + y^2} \leq |1 - y| \Rightarrow x^2 + y^2 \leq (1 - y)^2.
$$
Rearranging, we get 
$$
x^2 + 2y \leq 1 \Rightarrow y \leq \dfrac{1-x^2}{2}.
$$

Hence, $$
\sqrt{x^2 + y^2} \leq \min(|1-y|, |y+1|, |1-x|, |x+1|)
$$
will be the region consisting of points that are closer to the center rather than the edges for a 2x2 square. This can be written as piecewise unions of four regions:
- $y \leq \frac{1}{2} - \frac{x^2}{2}$ when $y \geq 0, y \geq |x|$ (A)
- $y \geq -\frac{1}{2} + \frac{x^2}{2}$ when $y \leq 0, y \leq |x|,$
- $x \leq \frac{1}{2} - \frac{y^2}{2}$ when $x \geq 0, x \geq |y|$
- $-x \leq \frac{1}{2} + \frac{y^2}{2}$ when $x \leq 0, x \leq |y|$

Hence, the area of the right hand side of (A), for example, is bounded by $y > x$ and $y < (1-x^2)/2.$ This is true over the domain 
$$
x < 1 - x^2 / 2 \Rightarrow 2x < 1 - x^2 \Rightarrow (x+1)^2 < 2 \Rightarrow x < \sqrt{2} - 1,
$$
yielding 
$$
A = \int_{0}^{\sqrt{2} - 1} 1 - x^2 = \sqrt{2} - 1 - \frac{(\sqrt 2 - 1)^3}{3} = \dfrac{4 - 2 \sqrt{2}}{3}.
$$

By symmetry, the total area of the region will be 4 times this amount, yielding a probability of 
$$
4 \cdot \dfrac{4 - 2 \sqrt{2}}{3} \cdot \dfrac{1}{4} = \dfrac{4 - 2\sqrt 2}{3}.
$$
