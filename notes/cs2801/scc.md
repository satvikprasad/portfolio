# finding strongly connected components
[problem](https://codeforces.com/problemset/problem/427/C)

Assume we have some directed graph $G$ with vertices $\{v_1, \ldots, v_n\}$ and $m$ edges.

We define a strongly connected component of graph $G$, $G'$, to be a subgraph of $G$ such that every vertex in $G'$ can be reached by every other vertex in $G',$ and for all vertices $v \in G, v \not \in G',$ there exists either a $u \in G'$ that cannot reach $v,$ or vice-versa.

Define the condensation graph of $G,$ $\text{cond}(G)$ to have vertex set that is all strongly connected components of $G,$ and a directional edge $[u, v]$ if and only if there is a vertex in $v$ that can be reached by one in $u.$

To motivate an algorithm to find the simply connected components, let us observe what happens to our graph when we do a search on it. When we run DFS on our graph, consider what happens when we start in some connected component $c.$ If there is an edge between $c$ and another connected component $c'$ in $\text{cond}(G),$ then $[c', c]$ cannot be an edge in our condensation graph. Thus, when we DFS starting at $c,$ all vertices in $c'$ must be finished being explored before we finish exploring all vertices in $c.$ Similarly, if we start at $c',$ then our DFS can never reach $c,$ from a vertex in $c',$ meaning we will still finish exploring all vertices in $c$ after we explore all vertices in $c'.$ This implies that our condensation graph has edge $[u, v]$ if and only if $v$ is finished being explored before $u.$ Thus, if we track this 'exploration time,' we should be able to isolate condensation graphs sequentially.

**Kosaraju's Algorithm**
Consider an arbitrary DFS on graph $G.$ Let $t(v)$ be the smallest time such that all vertices that can be reached from vertex $v$ have been explored. Let $\tau(v)$ be the first time $v$ is explored.

Let $t(c)$ for a vertex in the condensation graph, $c$, be defined as the minimum $t$ over all vertices in $c.$ Do the same for $\tau.$

Then, notice that if $c \to c',$ then $t(c) > t(c'),$ by our argument above. Thus, if we sort vertices based on $t,$ then we will visit the condensation graph of $G$ (which is a DAG) in order.

Then, let us transpose $G$ and explore $G^{T}$ in decreasing $t,$ removing a vertex from $G^{T}$ when it is explored. Since we start in a SCC $c$ that cannot have any incoming edges, we will explore all vertices in $c$ and finish. Then, we have a condensation graph with one less node, so inductively the next set of vertices we explore will be another SCC.

Performing this repeatedly will decompose all SCCs in $G$.

```cpp
vector<vector<int>> sccs{};
stack<int> t{};
stack<pair<int, int>> stk;
vector<bool> visited(n + 1, false);

for (int i = 1; i <= n; ++i) {
    if (visited[i]) continue;

    visited[i] = true;
    stk.push({i, 0});
    while (!stk.empty()) {
        auto &[u, next_nbor] = stk.top();
        if (next_nbor < (int)graph[u].size()) {
            int v = graph[u][next_nbor++];
            if (!visited[v]) {
                visited[v] = true;
                stk.push({v, 0});
            }
        } else {
            t.push(u);
            stk.pop();
        }
    }
}

vector<bool> visited_rev(n + 1, false);
while (!t.empty()) {
    auto j = t.top(); t.pop();
    if (visited_rev[j]) continue;

    vector<int> scc{};
    stack<int> stk;
    stk.push(j);

    while (!stk.empty()) {
        auto i = stk.top(); stk.pop();
        if (visited_rev[i]) continue;

        scc.push_back(i);

        for (int nbor : graph_t[i]) {
            stk.push(nbor);
        }

        visited_rev[i] = true;
    }

    sccs.push_back(std::move(scc));
}
```
