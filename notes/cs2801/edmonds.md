# directed MST - Chu–Liu/Edmonds
Normally to find a MST on an undirected graph $G$ we can use a greedy algorithm like Kruskal's or Prim's.

However, consider a directed graph $G$ with vertex set $V$ and edge set $E.$ Let us define a root vertex $r$ on $G,$ and define the MST of $G$ as the minimum weighted set of edges such that all vertices $v$ are reachable by $r.$ We refer to this 'MST' as a spanning arborescence $A$ rooted at $r$ with minimum weight.

Let $f(G, r, w)$ denote the function that returns a spanning arborescence rooted at $r$ of minimum weight. 

Trivially, we can remove all incoming edges into $r,$ since these are guaranteed to not be required on $A$. Additionally, parallel edges can just be replaced by a single edge of minimum weight out of the parallel edges.

Now, consider every vertex $v \neq r.$ Let $\pi(v)$ be the incoming vertex into $v$ with the minimum edge weight $(\pi(v), v),$ i.e
$$
\pi(v) = \text{argmin}_u w((u, v)).
$$

The graph defined with the edge set 
$$
E' = \{(\pi(v), v) : v \neq r\}
$$
has two cases:
-  If $G'$ does not contain a cycle, then $G'$ is a tree spanning all vertices $v.$ Assume for the sake of contradiction that $r \not \in V'.$ Then, there are $|E'| = |V'|$ edges and $\leq |V'|$ vertices, which is a contradiction since $|V'| = |E'| + 1.$ Thus, $r$ must be in $G',$ and $G'$ is our required minimum weighted arborescence $A.$

- Otherwise, we at least one cycle $C$ in $G'.$ Contract this cycle $C$ into a single vertex $v_C,$:
    - Edges inside $C$ disappear.
    - An edge $(u, v)$ with $u \notin C$, $v \in C$ becomes $(u, v_C)$ with reweighted cost $$w'(u, v_C) = w(u, v) - w(\pi(v)).$$ 
    - An edge $(u, v)$ with $u \in C$, $v \notin C$ becomes $(v_C, v)$ with the same weight.
    - Edges not touching $C$ are unchanged.

Then, recurse on $G',$ finding an arborescence graph for $G'.$ Thus, there will be an incoming edge $(u, v_C)$ corresponding to an original edge in $G$, $(u, v).$ Expand by keeping all edges except $(\pi(v), v).$ Then, we propose that with all cycles expanded in this way, the resulting graph is an arborescence graph with minimum weight.

**Proof.** We proceed inductively. Assume this algorithm works for input sizes $1 \leq k < n.$ In the first case, where we have no cycles when choosing minimum weighted incoming edges, we are trivially left with an arborescence.

In the second case, our contracted graph $G'$ has $< n$ nodes, so by the inductive hypothesis we obtain a minimum arborescence $A'$ of $G'.$ It contains exactly one edge $(u, v_C)$ entering the supervertex, corresponding to $(u, v)$ with $v \in C.$ Every other edge of $A'$ has the same weight in $G$ and $G'.$

Expansion builds $A$ as
$$
A = \big(A' \setminus \{(u, v_C)\}\big) \cup \{(u, v)\} \cup \big(C \setminus \{\pi(v)\}\big),
$$
yielding
$$
\begin{align*}
w(A) &= \big(w'(A') - w'(u, v_C)\big) + w(u, v) + \big(w(C) - w(\pi(v))\big) \\
&= \big(w'(A') - w(u, v) + w(\pi(v))\big) + w(u, v) + w(C) - w(\pi(v)) \\
&= w'(A') + w(C),
\end{align*}
$$
for any arborescence $A'$ of $G'$ (not necessarily the optimal one).

Now, we need to prove that such a weight is minimal. First we show that some optimal arborescence enters $C$ exactly once and contains all but one edge of $C.$

Let $A^\ast$ be an optimal arborescence, and let $S \subseteq C$ be the set of cycle vertices whose incoming edge in $A^\ast$ is not their $\pi$-edge. Since $A^\ast$ is acyclic, $|S| \geq 1.$ Choose $x_0 \in S$ closest to $r$ in $A^\ast,$ and build $A^{\ast\ast}$ by replacing the incoming edge of every $x \in S \setminus \{x_0\}$ with $\pi(x).$

* **Weight.** $w(A^{\ast\ast}) \leq w(A^\ast),$ since each $\pi(x)$ is the cheapest edge into $x.$
* **In-degrees.** Unchanged: every vertex still has exactly one incoming edge.
* **Reachability.** The path from $r$ to $x_0$ in $A^\ast$ cannot pass through $C,$ since it would have to enter $C$ at some vertex of $S$ closer to $r$ than $x_0.$ So that path is untouched and $x_0$ is still reachable. Now $A^{\ast\ast}$ contains every edge of $C$ except $\pi(x_0),$ so every cycle vertex is reachable from $x_0$ around the cycle. Any other vertex kept its original incoming edge, so tracing backwards from it either reaches $r$ directly or hits $C,$ which leads to $x_0,$ which leads to $r.$ Hence $A^{\ast\ast}$ is an arborescence.

So $A^{\ast\ast}$ is optimal and cycle-respecting. It contracts to an arborescence $A'^{\ast}$ of $G'$ with $w(A^{\ast\ast}) = w'(A'^\ast) + w(C),$ by the same accounting as above. By the inductive hypothesis $w'(A') \leq w'(A'^\ast),$ hence
$$
w(A) = w'(A') + w(C) \leq w'(A'^\ast) + w(C) = w(A^{\ast\ast}) = w(A^\ast),
$$
so $A$ is optimal. $\blacksquare$

**Intuition.** Let's derive this algorithm from first principles. Consider an arbitrary directed graph $G.$ Obviously, the minimum weighted sub-graph of $G$ where each vertex has an incoming edge is defined by the minimum edges $\pi(v).$ However, this fails to be a tree precisely when there is a cycle in the graph.

When there is a cycle in the graph, we want to greedily replace some internal edge in the cycle with the best next incoming edge. If we replace an edge $\pi(v)$ for $v \in C$ with an edge $(u, v)$ for $u \not \in C,$ we've increased our subgraph's weight by $w(u, v) - w(\pi(v)).$ 

Is there a way to optimize recursively? We're just trying to find the best incoming edge into $C,$ so let us ignore all the internal edges of $C$ by 'contracting it'. Then, the relevant weight of all incoming edges into $v \in C$ needs to reduce by $w(\pi(v)),$ since it corresponds to dropping that internal edge. If we minimize over this (find the optimal arborescence when contracted), we'll find the optimal incoming edge into the cycle.
