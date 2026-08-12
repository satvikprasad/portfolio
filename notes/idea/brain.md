# rethinking the company brain
At the companies I've worked at, I've noticed one of the hardest problems is resource allocation (whether resources are in the form of people, compute, etc.). Correctly allocating resources is a difficult problem, and at some companies I think it's reasonable to claim it's solved by intuition.

However, an ideal solution might look like:
- constructing an accurate model of the company at whatever level granularity is required; a company is a living organimsm, and can be thought of as composed of organs each performing multiple tasks:
    - each 'organ' consumes some inputs (dependencies), and produces outputs,
    - an 'organ' will have some associated latency, and some throughput
    - an optimal organism should distribute resources to each organ such that no organ is ever stalled, and the pipeline achieves maximum throughput.
    - if latency is critical, we can optimize for this too.

## 'company brain' as a structural representation

Thus, I think a better definition of a 'company brain' should be some kind of 'digital twin' model of a company's dataflow graph; once an accurate enough model is reconstructed, queries on this graph should allow the user to glean several different insights:
- what's the current bottleneck of my pipeline?
- will increasing the number of resources I allocate to this organ yield a linear speedup? A sub-linear speed-up?
- where is the most optimal place to scale in my organization?

If the technology is mature enough, perhaps this model can support simulations and searches to gain even more insights into the effects of certain actions, and predicted optimal actions.

*End goal*: automate away the decision-making process in a firm. Bottlenecks should be trivial to identify, redundancy should be a decision that is well informed (i.e, as a yield-improvement measure).
