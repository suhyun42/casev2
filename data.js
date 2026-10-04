const STUDIO = [
  {
    "id": "megan",
    "name": "Megan White",
    "short": "Megan",
    "role": "Pricing & monetization",
    "duration": "30 minutes",
    "focus": "Partner with Product on ambiguous pricing, packaging and adoption decisions.",
    "listen": [
      "Customer value and segmentation",
      "Adoption versus unit economics",
      "A clear, testable commercial recommendation"
    ],
    "lessons": [
      {
        "id": "value-price",
        "title": "Value, price and cost are different",
        "core": "Customer value informs willingness to pay; serving cost informs your economic floor. Neither alone determines the right price.",
        "why": "Megan is testing whether you can connect customer outcomes to a practical monetization decision.",
        "steps": [
          "Define the customer and job to be done.",
          "Understand the alternative: another vendor, internal work, or doing nothing.",
          "Estimate value and willingness to pay by segment.",
          "Compare a few price structures with cost, adoption and retention."
        ],
        "example": {
          "title": "A valuable workflow",
          "body": "Hypothetical: a tool saves a team $1,000 a month and costs you $40 to serve. That does not prove the right price is $80 or $1,000. Switching costs, confidence in the savings and competing alternatives affect willingness to pay.",
          "formula": "Customer value ≠ willingness to pay ≠ provider cost"
        },
        "say": "I would start with the customer outcome and alternatives, then test how much value we can capture while maintaining adoption and sustainable unit economics.",
        "trap": "Do not price solely as a markup on compute, or assume you can capture all the value created.",
        "check": {
          "q": "What is the most defensible first pricing step?",
          "choices": [
            "Double serving cost",
            "Understand customer value and alternatives",
            "Match the most expensive competitor"
          ],
          "correct": 1,
          "explanation": "Cost matters, but it does not reveal willingness to pay or the value of the alternative."
        }
      },
      {
        "id": "pricing-metric",
        "title": "Seat, usage and hybrid pricing",
        "core": "The pricing metric determines what customers pay for; the price level determines how much they pay per unit.",
        "why": "A good Finance partner helps choose a metric customers understand that also supports sustainable economics.",
        "steps": [
          "Seat pricing: examine licensed versus active users, predictability and consumption per user.",
          "Usage pricing: examine billable units, budget uncertainty and unit economics.",
          "Hybrid: evaluate a base fee or allowance plus usage, with clear limits.",
          "Test billing comprehension and procurement fit as well as conversion."
        ],
        "example": {
          "title": "Same product, three packages",
          "body": "Hypothetical: $30 per user/month, $0.02 per task, or $20 per user plus an included task allowance. Each distributes usage risk differently. Heavy users can make an unlimited seat offer costly; pure usage can discourage experimentation.",
          "formula": "Seat revenue = paid seats × net price per seat\nUsage revenue = billable units × effective unit price"
        },
        "say": "I would choose the metric that aligns with customer value and buying behavior, then check whether cost variability requires an allowance or usage component.",
        "trap": "Do not assume a named offering is purely seat-based or purely usage-based. The prep guide names ChatGPT Enterprise, API and Codex; confirm actual commercial terms before making product-specific claims.",
        "check": {
          "q": "Which structure most directly exposes a customer to variable monthly usage bills?",
          "choices": [
            "Fixed seat fee",
            "Pure usage pricing",
            "Annual fixed license"
          ],
          "correct": 1,
          "explanation": "Usage-based charges vary with consumption. Predictability can be improved with budgets, commitments or an allowance."
        }
      },
      {
        "id": "packaging",
        "title": "Packaging and willingness to pay",
        "core": "Packaging groups capabilities and limits into offers. Good segmentation distinguishes meaningful customer needs rather than creating arbitrary friction.",
        "why": "Megan may ask how to monetize a premium feature without undermining the core product.",
        "steps": [
          "Identify which segments value the feature and why.",
          "Compare included, premium-tier and add-on options.",
          "Estimate conversion, attach rate, upgrades and cannibalization.",
          "Keep the offer understandable; test customer comprehension."
        ],
        "example": {
          "title": "Premium administration capability",
          "body": "Hypothetical: larger customers need advanced administration, while smaller teams rarely use it. An enterprise package may align value and support cost. If the feature is necessary for safe or compliant use, treat that requirement explicitly rather than monetizing it mechanically.",
          "formula": "Incremental value = upgrades + new customers + retention − cannibalization − added cost"
        },
        "say": "I would compare packaging options by segment, including the adoption cost of putting a capability behind a paywall.",
        "trap": "Do not optimize attach rate alone. A successful add-on can still cannibalize a more valuable package.",
        "check": {
          "q": "What belongs in a packaging analysis?",
          "choices": [
            "Only the add-on revenue",
            "Upgrades, retention, cannibalization and costs",
            "Only feature development cost"
          ],
          "correct": 1,
          "explanation": "Packaging affects the entire buying decision, not just one line item."
        }
      },
      {
        "id": "price-cut",
        "title": "Discounts: revenue versus contribution",
        "core": "A broad discount reduces revenue on existing usage. Additional volume must cover that concession and the cost of serving the new volume.",
        "why": "This is a compact way to demonstrate commercial judgment and financial fluency.",
        "steps": [
          "Normalize original price to one unit.",
          "Calculate contribution per unit before and after the discount.",
          "Solve the revenue and contribution hurdles separately.",
          "Then evaluate actual demand response, retention and mix."
        ],
        "example": {
          "title": "A 10% cut at 70% starting margin",
          "body": "Hypothetical: price $100, variable cost $30, contribution $70. After a 10% cut, price is $90 and contribution $60. Revenue needs 11.11% more volume; contribution needs 16.67%.",
          "formula": "Revenue uplift needed = d / (1 − d)\nContribution uplift needed = d / (m − d), when m > d\nd = discount; m = starting contribution margin"
        },
        "say": "I would ask whether the expected demand and retention response clears the contribution hurdle, not just the revenue hurdle.",
        "trap": "These formulas assume constant unit cost and mix and the discount applies to the affected existing volume. They are affordability thresholds, not an optimal price.",
        "check": {
          "q": "At $100 price and $30 cost, a 10% cut requires what volume lift to preserve contribution?",
          "choices": [
            "10%",
            "11.11%",
            "16.67%"
          ],
          "correct": 2,
          "explanation": "Contribution falls from $70 to $60 per unit; $70 ÷ $60 − 1 = 16.67%. Revenue breakeven is only 11.11%."
        }
      },
      {
        "id": "credits",
        "title": "Credits and activation economics",
        "core": "Credits are an investment in a customer behavior—not proof of demand. Judge the downstream paid behavior and actual cost.",
        "why": "The prep guide explicitly mentions the adoption versus unit-economics tradeoff of credits and discounts.",
        "steps": [
          "Specify the activation milestone and eligible customers.",
          "Set an exposure limit, time window and expiry.",
          "Measure activation, paid conversion and sustained use after credits.",
          "Compare against a credible untreated group where possible."
        ],
        "example": {
          "title": "A credit pilot",
          "body": "Hypothetical: offer a $100 list-value credit to 100 prospects. The $10,000 face value is neither automatically the cash cost nor all foregone revenue. Actual consumption drives serving cost; cannibalized paid usage is a separate opportunity cost.",
          "formula": "Incremental value = future incremental contribution − consumed-credit cost − other program costs − cannibalization"
        },
        "say": "I would fund a specific activation goal, then evaluate sustained paid usage and incremental contribution after the incentive ends.",
        "trap": "Do not call free consumption revenue, or assume every redeemed dollar is incremental value.",
        "check": {
          "q": "Which result is strongest evidence of a valuable credit program?",
          "choices": [
            "All credits redeemed",
            "High sign-up count",
            "Incremental sustained paid usage after credits expire"
          ],
          "correct": 2,
          "explanation": "Redemption and sign-ups are leading signals. The commercial goal needs paid behavior or another explicitly valued outcome."
        }
      },
      {
        "id": "commercial-offer",
        "title": "Commitments and strategic discounts",
        "core": "A commitment can improve predictability or secure demand, but signed spend is not automatically additional usage, cash or recognized revenue.",
        "why": "Megan may test whether you understand the customer’s risk as well as the provider’s economics.",
        "steps": [
          "Clarify net spend versus list-value allowance, term, overage and rollover.",
          "Estimate expected customer spend without the offer.",
          "Identify what the concession changes: acceptance, usage, retention or timing.",
          "Evaluate contribution and capacity, then standardize routine offers with bounded exceptions."
        ],
        "example": {
          "title": "A $1M commitment",
          "body": "Hypothetical: a $1M net obligation at a 10% discount buys $1.111M list-value consumption. A $1M list-value allowance at the same discount costs $900k. Those are different contracts. Formal recognition depends on terms and delivered services.",
          "formula": "List-value allowance = net spend / (1 − discount)"
        },
        "say": "I would first clarify the contract units and no-offer trajectory. A deeper discount needs a credible change in customer behavior or an explicit strategic investment thesis.",
        "trap": "Higher signed commitment alone does not prove incrementality. Do not discount growth that would have happened anyway without acknowledging the concession.",
        "check": {
          "q": "What does $1M of net spend buy at a 10% list discount?",
          "choices": [
            "$900k list value",
            "$1M list value",
            "About $1.111M list value"
          ],
          "correct": 2,
          "explanation": "Divide net spend by 90%. Clarify whether the customer’s quoted commitment is net dollars or list-value usage."
        }
      }
    ],
    "questions": [
      {
        "id": "megan-new-ai-product",
        "q": "How would you price a new AI product?",
        "tests": "Connect business intent, customer value, competition, and serving economics to a testable price recommendation.",
        "answer": {
          "statement": "I would start by clarifying the business objective: are we trying to attract customers in a target segment, improve margins, or balance both? I would then test a price that reflects customer value while supporting that objective and sustainable serving economics.",
          "look": [
            "Customer success and demand: how customers define success with the capability, what a successful outcome is worth, willingness to pay, and how consumption responds to price.",
            "Competitive alternatives: how customers solve the problem today, how alternatives are priced, and their total cost per successful outcome. Competitor prices are a reference point; differentiated customer value can change the price we can sustain.",
            "Cost to serve: model and workload mix, cost per successful task, and how serving costs change as usage grows. I would evaluate contribution dollars as well as margin percentage."
          ],
          "tradeoffs": [
            "A lower price can attract a larger audience and increase usage, but it reduces contribution per unit and may subsidize customers who would have paid more.",
            "A higher price can improve margins and capture more customer value, but it may reduce conversion, consumption, and future expansion."
          ],
          "decision": "Given the objective, I would recommend a bounded pricing test with contribution and customer adoption as guardrails. I would change the price or segment focus if measured elasticity and consumption per price point showed a different offer produced stronger customer value and total contribution."
        }
      },
      {
        "id": "megan-seat-or-usage",
        "q": "Would you use seat-based or usage-based pricing?",
        "tests": "Choose a pricing unit that matches customer value and buying preferences while managing variable serving costs.",
        "answer": {
          "statement": "I would choose the pricing structure that best reflects customer value and cost. Seat-based pricing is attractive when customers value predictable access and simple budgeting; usage-based pricing is attractive when value and infrastructure cost scale with consumption.",
          "look": [
            "Customer value and buying behavior: whether the customer is paying for ongoing access or measured work completed, whether a low-cost entry point helps adoption, and how much budget predictability matters.",
            "Cost behavior: whether serving costs grow with requests, tokens, model choice, or completed tasks, and whether the proposed pricing unit keeps revenue aligned with those costs.",
            "Usage risk: the distribution of light and heavy users, the potential serving cost of intensive seat users, and whether included allowances, limits, or overages are needed."
          ],
          "tradeoffs": [
            "Seat pricing is simple and predictable, but heavy users can generate much higher serving costs while low-use customers may feel they are paying for unused access.",
            "Usage pricing can support a low-cost start and scale with activity, but variable bills may discourage experimentation or make customer budgeting harder."
          ],
          "decision": "I would favor seats when access is the main value and usage is economically manageable, and usage pricing when consumption drives both value and cost. I would change that recommendation if customer purchase behavior or heavy-user economics showed the structure was limiting adoption or contribution."
        }
      },
      {
        "id": "megan-free-credits",
        "q": "Product wants free credits to accelerate adoption. Would you support that?",
        "tests": "Evaluate credits as an investment in activation or strategic relationships, with explicit exposure limits and evidence of retained paid usage.",
        "answer": {
          "statement": "I would support a targeted credit program if we can explain what it is intended to buy: faster activation, sustained paid usage, or a valuable strategic relationship. I could be more aggressive for a strategically important customer, but I would make that exception explicit and set guardrails.",
          "look": [
            "Objective and customer value: the adoption barrier, the activation milestone, and the strategic value of winning or expanding the relationship. I would distinguish a commercial hypothesis from a demonstrated benefit.",
            "Credit economics and controls: the size and expiry of the credit, use-it-or-lose-it conditions where appropriate, eligible models, and model-specific credit burn rates that reflect serving economics.",
            "Evidence of durable adoption: activation, conversion to paid usage, retention, and contribution after previous credits. I would compare with an appropriate baseline so naturally expanding customers do not make the program look more incremental than it is."
          ],
          "tradeoffs": [
            "More generous credits can remove an adoption barrier or strengthen a strategic relationship, but they consume serving capacity and may create free activity without sustained paid demand.",
            "Customer-specific concessions can be useful, but they may establish discount expectations or precedent; tight expiry and eligibility protect exposure but can interrupt a customer's learning period."
          ],
          "decision": "I would recommend a capped, time-bound program with a named owner and paid-conversion and retention milestones. I would increase, decrease, or stop credits as evidence of incremental value and the strategic relationship changes."
        }
      },
      {
        "id": "megan-lower-price-adoption",
        "q": "A lower price could increase adoption but reduce margins. What would you recommend?",
        "tests": "Use segmentation and demand evidence to decide whether a price reduction advances the business objective and clears the contribution hurdle.",
        "answer": {
          "statement": "I would first clarify whether we are prioritizing share in a particular segment or stronger margins. I would support a targeted price reduction only when the expected demand and retention response justifies the concession under that objective.",
          "look": [
            "Segment demand: willingness to pay, price elasticity, expected consumption, and total customer cost per successful outcome. I would check whether price is actually the barrier to adoption.",
            "Competitive alternatives: comparable capabilities, quality and success rates, prices, and total cost of ownership. A cheaper alternative is not necessarily cheaper per successful task.",
            "Unit economics: the discount on existing usage, cost of incremental demand, model and customer mix, and the volume uplift required to preserve or improve contribution dollars."
          ],
          "tradeoffs": [
            "Lower prices may expand access and adoption, but discounting customers who would have paid the current price leaves money on the table.",
            "Protecting margin per unit can support profitability, but it can also limit a segment whose additional demand would create more total contribution and customer value."
          ],
          "decision": "I would test the reduction in the segment with the strongest evidence of an adoption barrier, using contribution dollars and customer outcomes as guardrails. Willingness-to-pay evidence, measured elasticity, and a total-cost comparison with alternatives would determine whether to expand, revise, or stop the offer."
        }
      },
      {
        "id": "megan-premium-feature",
        "q": "How would you package a premium feature?",
        "tests": "Match feature access, customer value, and serving cost to a packaging choice that monetizes demand without unnecessary purchase friction.",
        "answer": {
          "statement": "I would start with the goal: should this capability be broadly available, or should it create a reason to move into a premium tier? I would package it around the customers and use cases that receive meaningful value, while accounting for serving cost and occasional-use needs.",
          "look": [
            "Customer value: willingness to pay for the feature on its own versus in a bundle, the outcome it enables, and whether it materially improves adoption, retention, or expansion.",
            "Use cases and access: who needs the feature, how often they use it, and whether it supports broad workflows or specialized needs such as advanced reasoning. I would compare tier access with an add-on or usage allowance.",
            "Unit economics: the cost to serve the feature, whether that cost scales with consumption, and whether included usage, limits, or overages would keep the package sustainable."
          ],
          "tradeoffs": [
            "A premium bundle can increase tier adoption and simplify the offer, but requiring an upgrade may create friction for customers who need the feature only occasionally.",
            "An add-on or usage-priced option can serve occasional users and align price with cost, but it adds purchase complexity and may reduce the incentive to choose a higher tier."
          ],
          "decision": "I would recommend a premium tier when the feature provides recurring, differentiated value, and test an add-on or limited allowance when demand is occasional. I would change the package if attachment, paid conversion, customer feedback, or serving economics showed that access friction outweighed the monetization benefit."
        }
      }
    ],
    "ask": [
      [
        "Where can Finance most improve pricing and packaging decisions today?",
        "Learn which decisions need better evidence, faster process or clearer tradeoffs."
      ],
      [
        "When adoption and near-term monetization conflict, what evidence helps the team choose?",
        "Understand how Product makes the tradeoff in practice."
      ],
      [
        "What makes a Finance partner especially useful to Product?",
        "Learn how to contribute without creating unnecessary process."
      ]
    ]
  },
  {
    "id": "steph",
    "name": "Steph Struck",
    "short": "Steph",
    "role": "Revenue & compute economics",
    "duration": "30 minutes",
    "focus": "Apply first-principles finance to revenue, contribution and compute allocation.",
    "listen": [
      "Correct drivers, units and counterfactual",
      "Contribution and resource tradeoffs",
      "A recommendation with decision thresholds"
    ],
    "lessons": [
      {
        "id": "revenue-drivers",
        "title": "Build revenue from operating drivers",
        "core": "A useful forecast separates customer count, retention, expansion, usage, mix and realized price.",
        "why": "Steph wants first-principles reasoning and a forecast you can explain and update.",
        "steps": [
          "Choose a few economically distinct segments.",
          "Forecast retained and new customer/workload cohorts separately.",
          "Convert activity into billable units or paid seats.",
          "Apply effective prices and reconcile with account-level expectations."
        ],
        "example": {
          "title": "A usage revenue forecast",
          "body": "Hypothetical: 100 active customers × 2 million billable units each × $5 per million units = $1,000 revenue. A 10% increase in customer count and 10% increase in usage per customer produces 21% growth before price or mix effects.",
          "formula": "Revenue = active customers × units/customer × effective price/unit"
        },
        "say": "I would forecast the operating drivers, then reconcile to account-level spend and explain which assumptions create the largest uncertainty.",
        "trap": "Avoid counting expansion in both usage and a separate ARPU growth factor. Use consistent units and periods.",
        "check": {
          "q": "Customers grow 10% and usage per customer grows 10%; price is constant. Revenue growth?",
          "choices": [
            "10%",
            "20%",
            "21%"
          ],
          "correct": 2,
          "explanation": "1.10 × 1.10 − 1 = 21%. The interaction is real; do not simply add growth rates."
        }
      },
      {
        "id": "margin-dollars",
        "title": "Contribution dollars and margin percentage",
        "core": "Contribution is a dollar amount; margin is a ratio. A lower ratio can coexist with more contribution dollars.",
        "why": "Steph may challenge a recommendation that maximizes one metric while ignoring resources or the business objective.",
        "steps": [
          "Define included and excluded costs.",
          "Calculate both contribution dollars and percentage.",
          "Compare incremental economics against no action.",
          "Include implementation and resource constraints in the decision."
        ],
        "example": {
          "title": "Growth with margin dilution",
          "body": "Hypothetical: revenue rises from $100 to $120; serving cost rises from $20 to $27. Contribution rises from $80 to $93, while compute margin falls from 80% to 77.5%.",
          "formula": "Contribution = revenue − serving cost\nMargin = contribution / revenue"
        },
        "say": "I would accept some margin dilution if incremental contribution and resource returns justify it, subject to the business’s objectives and obligations.",
        "trap": "Compute contribution is not company profit. Clarify training, R&D, sales, support and corporate cost treatment.",
        "check": {
          "q": "Is the example automatically unattractive because margin declines?",
          "choices": [
            "Yes",
            "No; assess incremental dollars and constraints",
            "Only revenue matters"
          ],
          "correct": 1,
          "explanation": "The initiative adds $13 contribution. That still needs comparison with other uses of the required resources."
        }
      },
      {
        "id": "cost-to-serve",
        "title": "Marginal, allocated and long-run serving cost",
        "core": "Different cost views answer different decisions. Spare capacity does not make incremental work economically free forever.",
        "why": "The interview explicitly covers compute economics and allocation decisions.",
        "steps": [
          "Measure workload-relevant consumption with Infrastructure.",
          "Distinguish marginal operating cost from allocated fleet cost.",
          "Account for utilization, batching, context, input/output mix and service targets.",
          "Reconcile to total expense and include capacity additions when required."
        ],
        "example": {
          "title": "A hardware improvement",
          "body": "Hypothetical: cost per GPU-hour halves, but a new workload requires twice the GPU time. GPU cost per task is unchanged before other factors. Production cost depends on the full serving system.",
          "formula": "Cost/task ≈ resource use/task × cost/resource + other attributable costs"
        },
        "say": "I would use the cost relevant to the decision and reconcile it to total economics, rather than infer production margins from hardware performance alone.",
        "trap": "A benchmark improvement is not a measured reduction in fully effective serving cost. Average cost may also obscure the marginal decision.",
        "check": {
          "q": "If GPU-hour cost halves and GPU-hours/task double, GPU cost/task is…",
          "choices": [
            "Half",
            "Unchanged",
            "Double"
          ],
          "correct": 1,
          "explanation": "0.5 × 2 = 1. Other costs and quality changes must be assessed separately."
        }
      },
      {
        "id": "compute-allocation",
        "title": "Allocate scarce compute",
        "core": "When capacity is binding, compare value per constrained resource—not just revenue or margin percentage.",
        "why": "This is a central topic named in Steph’s interview description.",
        "steps": [
          "Identify the actual bottleneck: GPU time, memory, concurrency or another resource.",
          "Estimate incremental contribution per unit of that bottleneck.",
          "Apply contractual, service and strategic constraints.",
          "Compare allocation, scheduling and capacity-expansion alternatives."
        ],
        "example": {
          "title": "Two workloads compete",
          "body": "Hypothetical A: $100 revenue − $60 cost = $40 contribution using 10 GPU-hours. B: $80 − $30 = $50 contribution using 20 GPU-hours. A earns $4/GPU-hour; B earns $2.50. B has the higher margin and total contribution per workload, but A uses scarce hours more productively.",
          "formula": "Resource return = incremental contribution / constrained resource"
        },
        "say": "I would rank feasible workloads by contribution per bottleneck resource, then account for obligations and explicitly justified strategic priorities.",
        "trap": "Do not mechanically use tokens as the capacity unit. Different requests can consume very different resources.",
        "check": {
          "q": "With only GPU-hours constrained and divisible workloads, which example has higher contribution per hour?",
          "choices": [
            "A",
            "B",
            "They are equal"
          ],
          "correct": 0,
          "explanation": "A earns $4 per hour versus B’s $2.50. Contractual or technical constraints can still change the feasible allocation."
        }
      },
      {
        "id": "retention",
        "title": "Growth, retention and cohort health",
        "core": "Total growth can mask deterioration in existing customers. Separate acquisition from retained-cohort expansion and churn.",
        "why": "Steph may ask which metrics matter for usage-based versus seat-based businesses.",
        "steps": [
          "Define a fixed starting cohort and consistent revenue basis.",
          "Separate expansion, contraction and churn.",
          "Track usage or active-seat behavior to explain revenue changes.",
          "Distinguish sustained adoption from experiments and one-time workloads."
        ],
        "example": {
          "title": "An NRR bridge",
          "body": "Hypothetical: a cohort starts with $100M revenue, expands by $20M, contracts by $5M, and loses $10M to churn. Ending cohort revenue is $105M: NRR is 105%. New-customer revenue is excluded.",
          "formula": "NRR = (starting revenue + expansion − contraction − churn) / starting revenue"
        },
        "say": "I would pair revenue retention with underlying usage or active-seat engagement, so pricing changes do not hide weakening adoption.",
        "trap": "Specify the cohort and period. NRR and total revenue growth are not interchangeable.",
        "check": {
          "q": "Does new-customer revenue belong in NRR?",
          "choices": [
            "Yes",
            "No",
            "Only for usage-based products"
          ],
          "correct": 1,
          "explanation": "NRR measures the same starting cohort. Acquisition belongs in the total growth bridge."
        }
      },
      {
        "id": "investment",
        "title": "Investment, payback and uncertainty",
        "core": "An investment decision combines expected economics, timing, risk, learning value and resource alternatives.",
        "why": "Steph may ask for a recommendation before every assumption is known.",
        "steps": [
          "Define no-action cash flows and incremental investment.",
          "Estimate benefit timing and ongoing costs.",
          "Calculate useful decision thresholds and downside exposure.",
          "Recommend proceed, resize, test or stop with an owner and review date."
        ],
        "example": {
          "title": "Payback is not the whole answer",
          "body": "Hypothetical: $600k upfront, then $50k monthly incremental cash benefit after launch. Simple payback is 12 months after launch. A six-month build means 18 months from initial investment, assuming the cash profile described.",
          "formula": "Simple payback = upfront investment / recurring incremental cash benefit"
        },
        "say": "I would identify the assumptions that reverse the decision, bound the downside and choose a next step proportional to the uncertainty.",
        "trap": "Simple payback ignores discounting and benefits after payback. Use discounted cash flows for longer-lived alternatives, and do not call contribution cash without reconciling timing.",
        "check": {
          "q": "With a six-month build and 12-month payback after launch, payback from initial spend is…",
          "choices": [
            "6 months",
            "12 months",
            "18 months"
          ],
          "correct": 2,
          "explanation": "Timing is part of the economics. This assumes the investment occurs at the start and benefits begin after the build."
        }
      }
    ],
    "questions": [
      {
        "q": "How would you forecast revenue for an API business versus a seat-based business?",
        "tests": "Compare API and seat-based revenue drivers, timing, and forecast uncertainty.",
        "answer": {
          "format": "executive-four-part",
          "headline": "I would forecast an API business primarily from usage, price, and model mix, whereas a seat-based business is driven more by billable seats, contract timing, expansion, and churn.",
          "start": [
            {
              "type": "paragraph",
              "text": "I would first clarify the forecast horizon and whether we are forecasting recognized revenue, bookings, or ARR, because those can behave differently—particularly in a contract-based seat business."
            },
            {
              "type": "paragraph",
              "text": "I would then define the core revenue equations:"
            },
            {
              "type": "list",
              "items": [
                "For API: active customers × workloads per customer × usage per workload × net price per unit.",
                "For seat-based: billable seats × net price per seat, adjusted for contract start dates, expansion, contraction, and churn."
              ]
            }
          ],
          "look": [
            "First, demand and volume. For API, that includes active accounts, requests or tokens, use-case growth, and model mix. For seat-based, it includes new logos, seats per customer, deployment pace, and expansion.",
            "Second, monetization. I would evaluate list price, discounts, credits, commitments, product mix, and realized price.",
            "Third, customer lifecycle and retention. I would look at cohort ramp, usage expansion, churn, renewal behavior, and any capacity constraints that could limit demand."
          ],
          "investigate": [
            {
              "type": "paragraph",
              "text": "I would build monthly cohorts and compare actual ramp patterns by customer type. For API, I would study how usage changes after activation and by model or service tier. For seat-based, I would reconcile the sales pipeline, contract start dates, seat deployment, active-seat adoption, expansion, and renewal schedules."
            },
            {
              "type": "paragraph",
              "text": "I would also reconcile the bottom-up forecast against a top-down market or sales view so that neither one is operating in isolation."
            }
          ],
          "close": [
            {
              "type": "paragraph",
              "text": "I would deliver a base, upside, and downside forecast with a clear bridge across volume, price and mix, and retention. I would generally expect wider near-term variability in an API forecast because usage can move quickly, whereas seat-based revenue is more contractually visible—but adoption remains an important leading indicator for future expansion and renewal."
            }
          ]
        }
      },
      {
        "q": "Revenue is growing, but contribution margin is falling. How would you investigate?",
        "tests": "Separate margin rate from contribution dollars and diagnose price, mix, cost, and measurement effects.",
        "answer": {
          "format": "executive-four-part",
          "headline": "I would determine whether the margin decline reflects deteriorating unit economics, an intentional mix shift, or a temporary operational issue—and I would look at both margin rate and total contribution dollars.",
          "start": [
            {
              "type": "paragraph",
              "text": "I would first confirm the definition of contribution margin and whether we are discussing a decline in margin percentage, contribution dollars, or both."
            },
            {
              "type": "paragraph",
              "text": "A declining percentage is not automatically bad if total contribution dollars are rising and the lower-margin growth creates meaningful long-term value. But I would want to understand exactly what is driving the change."
            }
          ],
          "look": [
            "First, net revenue realization: pricing, discounts, credits, customer mix, product or model mix, and whether more revenue is coming from lower-priced offerings.",
            "Second, variable cost per unit: compute costs, model mix, input versus output usage, utilization, network costs, customer support, and any service-level requirements.",
            "Third, operational or measurement changes: capacity underutilization, routing behavior, free usage, changes in cost allocation, or inconsistent revenue and cost attribution."
          ],
          "investigate": [
            {
              "type": "paragraph",
              "text": "I would create a margin bridge separating price, volume, mix, and unit-cost effects. I would segment the analysis by customer, cohort, model, product, and contract type."
            },
            {
              "type": "paragraph",
              "text": "I would also distinguish structural issues from temporary ones. For example, a temporary capacity inefficiency may resolve, while sustained discounting or growth in an expensive model may require a commercial or product response."
            },
            {
              "type": "paragraph",
              "text": "Finally, I would validate the underlying revenue, usage, and cost sources before drawing a conclusion."
            }
          ],
          "close": [
            {
              "type": "paragraph",
              "text": "I would identify the largest recoverable contribution-dollar pools and recommend targeted actions—for example, tightening discounts, migrating eligible usage toward more efficient models, improving serving efficiency, changing packaging, or accepting a lower margin where the strategic or lifetime value justifies it."
            },
            {
              "type": "paragraph",
              "text": "The outcome would be a clear recommendation on whether to fix, monitor, or deliberately tolerate the margin decline."
            }
          ]
        }
      },
      {
        "q": "We have limited compute. Where should we allocate it?",
        "tests": "Allocate scarce compute using obligations, marginal economics, and opportunity cost.",
        "answer": {
          "format": "executive-four-part",
          "headline": "I would protect contractual and reliability obligations first, then allocate incremental compute to the opportunities with the highest risk-adjusted contribution per unit of constrained compute—not simply the highest revenue.",
          "start": [
            {
              "type": "paragraph",
              "text": "I would clarify the duration and severity of the constraint, the applicable customer commitments, and whether the primary objective is near-term contribution, strategic growth, customer retention, or some combination."
            },
            {
              "type": "paragraph",
              "text": "I would also define the constrained unit—for example, GPU-hours, tokens served, or peak-time capacity."
            }
          ],
          "look": [
            "First, marginal economics: incremental revenue, variable cost, and contribution per unit of compute.",
            "Second, contractual and strategic value: minimum commitments, service-level obligations, customer lifetime value, expansion potential, and the consequences of failing to serve the workload.",
            "Third, flexibility and opportunity cost: whether the workload can use a smaller model, move off-peak, tolerate higher latency, shift to batch processing, or be deferred."
          ],
          "investigate": [
            {
              "type": "paragraph",
              "text": "I would build a workload-level view of compute demand and marginal contribution. I would separate committed demand from discretionary demand and quantify the foregone value of assigning capacity to one use case instead of another."
            },
            {
              "type": "paragraph",
              "text": "I would also evaluate ways to shape demand through model routing, pricing, service tiers, queues, minimum commitments, or scheduling flexible workloads outside peak periods."
            }
          ],
          "close": [
            {
              "type": "paragraph",
              "text": "My recommendation would be to reserve sufficient capacity for contractual obligations and platform reliability, then allocate the remaining capacity based on risk-adjusted contribution per compute unit, with an explicit strategic overlay."
            },
            {
              "type": "paragraph",
              "text": "I would maintain a capacity reserve and revisit the allocation frequently because the economic value—or shadow price—of compute can change as demand, pricing, and capacity evolve."
            }
          ]
        }
      },
      {
        "q": "A more efficient model reduces cost per task. What happens to revenue and profit?",
        "tests": "Connect model efficiency to task-level revenue, customer demand, and contribution.",
        "answer": {
          "format": "executive-four-part",
          "headline": "Efficiency should improve the cost of completing a task, but the revenue outcome depends on the pricing unit and the customer demand response. I would therefore evaluate economics per task, not just per token.",
          "start": [
            {
              "type": "paragraph",
              "text": "I would first clarify how the product is priced."
            },
            {
              "type": "paragraph",
              "text": "If customers pay per token and the model requires fewer tokens to complete the same task, revenue per task may decline. If customers pay per seat, per workflow, or per outcome, revenue may remain relatively stable while margin improves."
            },
            {
              "type": "paragraph",
              "text": "The core equations are:"
            },
            {
              "type": "list",
              "items": [
                "Revenue per task = billable units per task × net price per unit.",
                "Cost per task = resource consumption per task × cost per resource unit.",
                "Total contribution = number of tasks × contribution per task."
              ]
            }
          ],
          "look": [
            "First, how much efficiency is passed through to the customer through lower prices or fewer billable units.",
            "Second, demand elasticity: whether lower effective cost, faster performance, or better quality causes customers to run more tasks or adopt additional use cases.",
            "Third, mix and capacity effects: whether the efficient model cannibalizes a higher-priced model and whether released compute can serve incremental demand elsewhere."
          ],
          "investigate": [
            {
              "type": "paragraph",
              "text": "I would model scenarios for price per task, cost per task, and task volume. I would calculate the break-even volume increase required to protect revenue and contribution."
            },
            {
              "type": "paragraph",
              "text": "For example, if revenue per task declines by 20%, task volume would need to rise by 25% to maintain total revenue. Profit could still increase with less than 25% volume growth if cost per task falls sufficiently."
            },
            {
              "type": "paragraph",
              "text": "I would also study cohort adoption and whether the new efficiency expands the addressable use cases."
            }
          ],
          "close": [
            {
              "type": "paragraph",
              "text": "I would avoid automatically passing through the full efficiency gain. I would determine how much to retain as margin improvement versus reinvest in lower customer cost and growth."
            },
            {
              "type": "paragraph",
              "text": "The decision should optimize total contribution dollars and customer value—not preserve revenue per token simply for its own sake."
            }
          ]
        }
      },
      {
        "q": "Would you prioritize a large low-margin customer or a smaller high-margin customer?",
        "tests": "Compare customer value using contribution, constrained resources, lifetime value, and risk.",
        "answer": {
          "format": "executive-four-part",
          "headline": "I would not decide based on revenue size or margin percentage alone. I would compare absolute contribution, contribution per constrained resource, long-term customer value, and risk.",
          "start": [
            {
              "type": "paragraph",
              "text": "I would first clarify what resource is constrained. If we have ample compute and both customers generate positive incremental contribution, we may not need to choose between them."
            },
            {
              "type": "paragraph",
              "text": "If capacity, support, or investment resources are constrained, then the relevant question is which customer creates more risk-adjusted value per unit of the scarce resource."
            }
          ],
          "look": [
            "First, current economics: absolute contribution dollars, margin percentage, contribution per unit of compute, and cost-to-serve.",
            "Second, future value: expected expansion, retention, cross-product potential, strategic relevance, and whether the current pricing can be reset over time.",
            "Third, risk and opportunity cost: customer concentration, contractual requirements, support burden, credit risk, discount precedent, and the alternative use of the capacity."
          ],
          "investigate": [
            {
              "type": "paragraph",
              "text": "I would create a customer-level economic view that includes realized pricing, compute usage, support requirements, committed spend, renewal probability, and expected lifetime contribution."
            },
            {
              "type": "paragraph",
              "text": "I would also test whether the large low-margin customer can be restructured through a higher commitment, narrower discount eligibility, model-routing requirements, minimum usage, or price step-ups."
            }
          ],
          "close": [
            {
              "type": "paragraph",
              "text": "If compute were constrained, my default would be to prioritize the customer with the higher risk-adjusted contribution per unit of compute, subject to contractual commitments and strategic considerations."
            },
            {
              "type": "paragraph",
              "text": "However, I would not automatically reject the large customer. A low margin percentage can still produce substantial contribution dollars. I would first try to restructure the commercial terms so that the customer clears an acceptable economic hurdle."
            }
          ]
        }
      },
      {
        "q": "How would you evaluate an investment with uncertain benefits?",
        "tests": "Evaluate uncertain investments through staged funding, credible tests, and decision gates.",
        "answer": {
          "format": "executive-four-part",
          "headline": "I would treat the investment as a staged option rather than a binary yes-or-no decision: define the hypothesis, limit the initial exposure, and invest further as evidence improves.",
          "start": [
            {
              "type": "paragraph",
              "text": "I would clarify the strategic objective, the decision deadline, the investment’s reversibility, and what would need to be true for it to create value."
            },
            {
              "type": "paragraph",
              "text": "I would establish a baseline and counterfactual: what happens if we make the investment versus if we do nothing?"
            }
          ],
          "look": [
            "First, financial value and range: potential revenue, cost savings, contribution, required investment, and timing.",
            "Second, strategic and option value: whether the investment enables future products, improves customer retention, creates differentiation, or produces learning that could be valuable elsewhere.",
            "Third, risk and testability: downside exposure, execution risk, dependencies, reversibility, and whether we can validate the key assumptions through a pilot."
          ],
          "investigate": [
            {
              "type": "paragraph",
              "text": "I would identify the assumptions driving the majority of the value and build scenarios rather than relying on a single-point forecast."
            },
            {
              "type": "paragraph",
              "text": "I would then design the smallest credible test with leading indicators tied to the eventual financial outcome. That could include adoption, incremental usage, willingness to pay, retention, performance, or cost-to-serve."
            },
            {
              "type": "paragraph",
              "text": "I would establish a spending cap, milestones, and explicit stop, continue, or scale criteria."
            }
          ],
          "close": [
            {
              "type": "paragraph",
              "text": "I would recommend staged funding when the downside is contained, the learning is valuable, and the upside is meaningful. I would define what evidence is required before releasing the next tranche of investment."
            },
            {
              "type": "paragraph",
              "text": "The goal would not be to eliminate uncertainty before acting. It would be to purchase the next increment of evidence at an acceptable cost and make the next decision from a stronger position."
            }
          ]
        }
      }
    ],
    "ask": [
      [
        "Which economic tradeoff is hardest to evaluate consistently today?",
        "Learn where better analysis would change a live decision."
      ],
      [
        "How does Finance work with Infrastructure on effective serving costs?",
        "Understand cost ownership, measurement and decision use."
      ],
      [
        "How are commercial demand and strategic priorities balanced when compute is constrained?",
        "Explore the allocation process without asking for confidential unit economics."
      ]
    ],
    "answerPattern": {
      "recommendation": "Given the current objective and constraints, I would recommend X because of Y. I would use Z as the primary guardrail, and I would change the recommendation if we learned A."
    }
  },
  {
    "id": "carter",
    "name": "Carter Sibley",
    "short": "Carter",
    "role": "Data fluency & ownership",
    "duration": "30 minutes",
    "focus": "Take a messy problem from discovery through resolution: validate definitions and sources, communicate uncertainty, and remain accountable through the fix rather than simply handing the issue to another team.",
    "listen": [
      "Definitions and source validation",
      "Root-cause investigation",
      "Personal ownership and clear communication"
    ],
    "lessons": [
      {
        "id": "definitions",
        "title": "Define the metric before reconciling",
        "core": "Two different numbers can both be correct if they measure different things. Align definitions before choosing a source.",
        "why": "Carter is testing disciplined investigation, not whether you instinctively trust Finance or Sales.",
        "steps": [
          "Confirm metric, population, period and currency.",
          "Clarify gross/net, contract/usage, credits and recognition.",
          "Compare timestamps, refresh cadence and exclusions.",
          "Reconcile material residuals to records and document the agreed definition."
        ],
        "example": {
          "title": "Three numbers, no contradiction",
          "body": "Hypothetical: $120k signed bookings, $90k collected cash and $80k recognized revenue can all be valid in the same period. They describe different events. A reconciliation starts with those definitions.",
          "formula": "Bookings ≠ billings ≠ cash ≠ recognized revenue"
        },
        "say": "I would first confirm that the numbers describe the same population, period and economic event, then investigate the remaining difference.",
        "trap": "Do not declare one dashboard the source of truth before understanding its logic and coverage.",
        "check": {
          "q": "Sales shows bookings above recognized revenue. Is that necessarily an error?",
          "choices": [
            "Yes",
            "No; timing and definitions may explain it",
            "Only if cash matches bookings"
          ],
          "correct": 1,
          "explanation": "Contracting, billing, collection and service delivery can occur at different times."
        }
      },
      {
        "id": "grain-joins",
        "title": "Grain and join errors",
        "core": "Grain is what one row represents. Joining tables at incompatible grains can silently duplicate amounts.",
        "why": "This shows you can investigate data problems yourself and ask precise questions of data partners.",
        "steps": [
          "State the grain and unique key of each table.",
          "Check whether the join is one-to-one, one-to-many or many-to-many.",
          "Test row counts, distinct keys and sums before and after the join.",
          "Aggregate to the intended grain before joining, or allocate amounts explicitly."
        ],
        "example": {
          "title": "The threefold revenue error",
          "body": "Hypothetical: an account table has one $100 revenue row. Joining it to three usage-event rows repeats the $100 three times. Summing gives $300. Counting distinct customers will not fix the duplicated revenue measure.",
          "formula": "One account amount × three matched rows = three copies of the amount"
        },
        "say": "I would identify each table’s grain, verify join cardinality and reconcile measures before and after the join.",
        "trap": "SELECT DISTINCT is not a universal fix. It can conceal valid records or leave duplication in the metric.",
        "check": {
          "q": "What should you check first after an unexplained increase in totals following a join?",
          "choices": [
            "Change the forecast",
            "Join cardinality and row grain",
            "Round the totals"
          ],
          "correct": 1,
          "explanation": "A one-to-many or many-to-many join may multiply the measure without any real business change."
        }
      },
      {
        "id": "missing-data",
        "title": "Missing is not zero",
        "core": "Missing observations and genuine zero activity have different meanings. A silent default can bias a financial result.",
        "why": "Carter wants to see how you work with incomplete or unreliable data.",
        "steps": [
          "Measure coverage by time, customer and product.",
          "Trace nulls, late events, failed pipelines and exclusions.",
          "Bound the decision impact rather than fill values blindly.",
          "Label estimates and update the analysis when the missing data arrives."
        ],
        "example": {
          "title": "A margin spike",
          "body": "Hypothetical: revenue is complete but 20% of cost records are missing and treated as zero. Reported margin rises even though economics did not improve. The first question is cost coverage, not why the business suddenly became more efficient.",
          "formula": "Reported margin can be biased upward when costs are incomplete"
        },
        "say": "I would quantify what is missing and whether it could change the decision, then use an explicit range or hold the affected conclusion.",
        "trap": "Do not assume missingness is random. Large customers or a new product may be disproportionately affected.",
        "check": {
          "q": "Missing serving cost is replaced with zero. Which risk follows?",
          "choices": [
            "Margin can be overstated",
            "Revenue must be understated",
            "There is no effect"
          ],
          "correct": 0,
          "explanation": "Omitting costs makes contribution appear larger. The materiality depends on what records are missing."
        }
      },
      {
        "id": "causality",
        "title": "Correlation and causal lift",
        "core": "A before-and-after increase is not necessarily caused by an initiative. Customers may have grown anyway.",
        "why": "The goal is to validate a business claim, not merely report a favorable chart.",
        "steps": [
          "Define the outcome and the decision being tested.",
          "Use randomized or credible comparison groups when possible.",
          "Check pre-period behavior, selection, seasonality and simultaneous changes.",
          "Report uncertainty and limitations alongside the estimate."
        ],
        "example": {
          "title": "A comparison group changes the story",
          "body": "Hypothetical: treated customers grow from 100 to 120 units. Comparable controls grow from 100 to 110. A simple difference-in-differences estimate is 10 units, not all 20. Validity still depends on the comparison and assumptions such as parallel trends.",
          "formula": "Estimated effect = (120 − 100) − (110 − 100) = 10 units"
        },
        "say": "I would compare the observed outcome with a credible no-treatment trajectory and explain what could still bias the estimate.",
        "trap": "Many requests from a few customers do not create many independent customer observations. Respect treatment assignment and correlated outcomes.",
        "check": {
          "q": "In the example, what is the simple adjusted increase attributable to treatment under the stated assumptions?",
          "choices": [
            "10 units",
            "20 units",
            "30 units"
          ],
          "correct": 0,
          "explanation": "Subtract the control group’s 10-unit growth from the treated group’s 20-unit growth."
        }
      },
      {
        "id": "discrepancy",
        "title": "Trace a discrepancy through resolution",
        "core": "Ownership means finding the cause, coordinating the fix, validating the result and preventing recurrence.",
        "why": "The prep guide explicitly asks for cross-functional examples of underlying data or process issues.",
        "steps": [
          "Quantify the discrepancy and the decisions at risk.",
          "Break the residual into useful categories and trace source records.",
          "Agree an owner for the root-cause fix and validate the correction.",
          "Document the metric and add a focused detection control."
        ],
        "example": {
          "title": "Revenue up, billing flat",
          "body": "Hypothetical investigation: separate free and paid usage, credits, rate changes, product mix, billing lag, duplicate events and missing billing records. Rank explanations by materiality; do not begin by assuming fraud or a system outage.",
          "formula": "Reconciled total = explained categories + remaining residual"
        },
        "say": "I would own the problem through a verified resolution, even when another team owns the code or operational process that must change.",
        "trap": "A ticket handed off is not the same as a resolved issue. Keep the decision owner informed about impact and timing.",
        "check": {
          "q": "Which is the strongest completion criterion?",
          "choices": [
            "The ticket was assigned",
            "The dashboard looks plausible",
            "The fix is validated and the decision impact is communicated"
          ],
          "correct": 2,
          "explanation": "Resolution requires checking the corrected output and communicating what changed."
        }
      },
      {
        "id": "uncertainty",
        "title": "Communicate uncertainty without freezing",
        "core": "A decision can proceed with imperfect information when the risk is bounded and the action is proportionate.",
        "why": "Carter may test whether you can be transparent while still useful under a deadline.",
        "steps": [
          "Separate known facts, estimates and unresolved issues.",
          "Identify which uncertainty could change the recommendation.",
          "Provide a range, a temporary decision and a validation owner.",
          "Escalate or defer when material downside cannot be bounded."
        ],
        "example": {
          "title": "An executive deadline",
          "body": "Hypothetical: one cost allocation remains unresolved. If every plausible allocation supports the same small, reversible pilot, proceed with the caveat. If plausible outcomes range from attractive to materially loss-making at scale, narrow the action or defer the affected commitment.",
          "formula": "Decision usefulness = clarity about action + uncertainty + consequence"
        },
        "say": "I would state what is known, quantify the plausible range and explain whether the uncertainty changes the decision.",
        "trap": "Do not hide a known error because the recommendation stays the same; communicate material corrections and their impact.",
        "check": {
          "q": "When should uncertainty most strongly change the proposed action?",
          "choices": [
            "Whenever any data is missing",
            "When plausible outcomes change the decision and downside is material",
            "Only after leadership notices"
          ],
          "correct": 1,
          "explanation": "Focus on decision sensitivity and the consequence of being wrong, not the mere existence of uncertainty."
        }
      }
    ],
    "questions": [
      {
        "id": "carter-revenue-reconciliation",
        "q": "Finance and Sales report different revenue numbers. How would you reconcile them?",
        "tests": "Reconcile definitions, scope, and source records before assigning errors or choosing an authoritative number.",
        "answer": {
          "format": "parts",
          "sections": [
            {
              "label": "1) I would start with",
              "paragraphs": [
                "I would confirm that we are comparing the same metric and that both teams need the number for the same purpose. A difference is not necessarily an error if Finance and Sales are measuring different economic events."
              ]
            },
            {
              "label": "2) Then I would look at three things",
              "look": [
                "Definitions: are the numbers bookings, billings, recognized revenue, or cash? I would agree the intended economic event and calculation.",
                "Scope: do the numbers cover the same period, customers, currency treatment, discounts, and credits?",
                "Data: are refresh timing, source records, filters, and calculation logic consistent? I would check lineage rather than trust a team label by default."
              ]
            },
            {
              "label": "3) I would then investigate",
              "paragraphs": [
                "I would break the difference down by account and transaction, explain differences caused by definitions or timing, and prioritize the largest unexplained amounts. I would trace those residuals to source records with the relevant owners and validate any correction."
              ]
            },
            {
              "label": "4) I would close by",
              "paragraphs": [
                "I would agree the metric appropriate for the decision, correct confirmed errors, assign ownership, and communicate the decision impact. I would remain accountable until the reconciliation is validated and the agreed definition is reflected in the reporting process."
              ]
            }
          ]
        }
      },
      {
        "id": "carter-usage-billing",
        "q": "Usage increases sharply, but billing does not. What would you investigate?",
        "tests": "Distinguish legitimate commercial or timing differences from missed billing, a calculation defect, or a data issue.",
        "answer": {
          "format": "parts",
          "sections": [
            {
              "label": "1) I would start with",
              "paragraphs": [
                "I would ask whether the additional usage should generate additional charges under the customer's terms. My first goal is to determine whether we are seeing expected business behavior or a billing or data problem."
              ]
            },
            {
              "label": "2) Then I would look at three things",
              "look": [
                "Commercial terms: free usage, credits, included allowances, prepaid balances, commitments, and discounts. I would check how each affects the expected charge.",
                "Usage economics: billable versus total usage, product or model mix, and effective realized price. A change in total usage does not necessarily imply the same change in billable value.",
                "Timing and integrity: billing cutoffs, delayed events, duplicated usage, missing records, and incorrect rates or rate effective dates."
              ]
            },
            {
              "label": "3) I would then investigate",
              "paragraphs": [
                "I would locate the increase by customer, product, and date, then trace representative usage records through rating and billing. I would reconcile the expected charges under the relevant terms to the amounts actually billed, prioritizing the largest unexplained gaps."
              ]
            },
            {
              "label": "4) I would close by",
              "paragraphs": [
                "I would explain legitimate differences and coordinate the correction of any missed billing or data issue with the accountable teams. I would verify the fix, communicate the financial and customer impact, and monitor the next billing cycle to confirm the issue has been resolved."
              ]
            }
          ]
        }
      },
      {
        "id": "carter-incomplete-data",
        "q": "You need to make a recommendation tomorrow, but the data is incomplete. What do you do?",
        "tests": "Make a proportionate, accountable decision under uncertainty and prioritize the unknowns that could change it.",
        "answer": {
          "format": "parts",
          "sections": [
            {
              "label": "1) I would start with",
              "paragraphs": [
                "I would clarify the decision, deadline, downside, and reversibility. A small reversible decision can proceed with different evidence requirements from a large irreversible commitment."
              ]
            },
            {
              "label": "2) Then I would look at three things",
              "look": [
                "What we know: verified facts, reliable inputs, and the evidence supporting them.",
                "What is missing: assumptions, gaps in coverage, and unresolved questions that I would label explicitly.",
                "What matters: which unknowns could change the recommendation or expose us to unacceptable downside."
              ]
            },
            {
              "label": "3) I would then investigate",
              "paragraphs": [
                "I would test whether the recommendation holds across plausible ranges and seek the decision-critical evidence first. If the result changes under reasonable assumptions, I would show the threshold and consider a smaller reversible step or a targeted delay to obtain essential evidence."
              ]
            },
            {
              "label": "4) I would close by",
              "paragraphs": [
                "I would make a conditional recommendation with a downside guardrail, name the remaining uncertainty, and assign a validation owner and deadline. I would also state what evidence would change my view and when we will revisit the decision."
              ]
            }
          ]
        }
      },
      {
        "id": "carter-trustworthy-metric",
        "q": "How do you know a metric is trustworthy?",
        "tests": "Distinguish sound calculation and data controls from a metric's relevance to the decision.",
        "answer": {
          "format": "parts",
          "sections": [
            {
              "label": "1) I would start with",
              "paragraphs": [
                "I would understand what the metric measures and which decision it supports. Trust requires both reliable measurement and a definition appropriate for that decision."
              ]
            },
            {
              "label": "2) Then I would look at three things",
              "look": [
                "Definition: population, period, units, inclusions, and exclusions, with a clear economic interpretation.",
                "Data quality: completeness, freshness, missing values, duplicate records, and join logic. I would check whether the source's level of detail matches the calculation.",
                "Validation: independent reconciliation, checks against source records, and sensible behavior in simple examples and boundary conditions."
              ]
            },
            {
              "label": "3) I would confirm",
              "paragraphs": [
                "I would confirm clear ownership, documented lineage, and controls over changes to the source or calculation. I would also understand known limitations and how changes or unexpected movements are investigated."
              ]
            },
            {
              "label": "4) I would close by",
              "paragraphs": [
                "I would distinguish 'calculated correctly' from 'useful for this decision.' A metric can reconcile perfectly yet mislead if the definition, population, or timing does not match the question. I would explain what it can support and where another measure or further validation is needed."
              ]
            }
          ]
        }
      },
      {
        "id": "carter-personal-discrepancy",
        "q": "Tell me about a data discrepancy you personally resolved. What did you own from discovery through resolution?",
        "tests": "Demonstrate individual ownership, source validation, root-cause investigation, coordination, and a verified decision impact.",
        "answer": {
          "format": "parts",
          "note": "Personal example: use your commerce vendor-transition context and fill in the bracketed details with what actually happened.",
          "sections": [
            {
              "label": "1) Start with the situation and my ownership",
              "paragraphs": [
                "I work with roughly 180,000 meters, which is one part of Microsoft's broader meter estate. We recently onboarded new vendors supporting commerce as part of the vendor rotation. [Describe the specific discrepancy you detected, how you noticed it, the decision at risk, and what you were personally responsible for.] "
              ]
            },
            {
              "label": "2) Three things I would cover",
              "look": [
                "Definitions and scope: [Explain which meter population, accounts, periods, units, or metric definitions you aligned before comparing the numbers.]",
                "Source data and calculations: [Name the records or systems you checked and the filters, joins, rates, or calculation logic you personally validated.]",
                "Root cause: [State the confirmed cause of the difference and the evidence that distinguished it from a vendor handoff, timing issue, or legitimate definition difference.]"
              ]
            },
            {
              "label": "3) Explain my investigation and resolution",
              "paragraphs": [
                "[Describe how you broke down the discrepancy, prioritized material differences, traced examples to source records, and coordinated the fix.] Separate your own analysis, decisions, and coordination from the implementation performed by vendors or data partners. [Explain the check that confirmed the correction was complete.] "
              ]
            },
            {
              "label": "4) Close with the decision impact",
              "paragraphs": [
                "[State the actual decision or reporting outcome that improved, using a result you can substantiate.] [Explain how you remained accountable through validation, who owned the ongoing process, and which targeted control prevented recurrence.] "
              ]
            }
          ]
        }
      },
      {
        "id": "carter-error-after-action",
        "q": "You discover an error after leadership has acted on your analysis. What happens next?",
        "tests": "Respond promptly and proportionately, correct the analysis, protect the decision, and remain accountable through communication and prevention.",
        "answer": {
          "format": "parts",
          "sections": [
            {
              "label": "1) I would start with",
              "paragraphs": [
                "I would assess the potential impact and promptly notify the decision owner if the error could be material. I would communicate the preliminary concern without waiting for a complete investigation, while distinguishing confirmed facts from what is still being checked."
              ]
            },
            {
              "label": "2) Then I would look at three things",
              "look": [
                "Scope: which numbers, materials, recipients, and decisions are affected?",
                "Magnitude: how large is the error, and does it change the recommendation or cross a decision threshold?",
                "Exposure: is action ongoing, can further harm be prevented, and how reversible is the decision?"
              ]
            },
            {
              "label": "3) I would act",
              "paragraphs": [
                "I would correct and independently validate the analysis, then recommend pausing, amending, or reversing the affected action where appropriate. I would coordinate with the decision owner and relevant teams rather than assume I can undo the action unilaterally."
              ]
            },
            {
              "label": "4) I would communicate",
              "paragraphs": [
                "I would explain what changed, the decision impact, the recommended response, and what remains uncertain. I would replace or clearly supersede the affected materials and make sure the people acting on the analysis receive the correction."
              ]
            },
            {
              "label": "5) I would close by",
              "paragraphs": [
                "I would confirm that the decision owner and affected teams have the corrected information and understand the next action. I would add a targeted prevention control tied to the root cause and assign ownership for checking that it works."
              ]
            }
          ]
        }
      },
      {
        "id": "carter-dashboard-ownership",
        "q": "Tell me about a metric or dashboard you owned end to end. What did you build, and how did it change decisions?",
        "tests": "Connect metric ownership and account-level data to a concrete decision about one-year and three-year savings-plan offers.",
        "answer": {
          "format": "parts",
          "note": "Personal example: the dashboard purpose comes from your experience. Confirm the suggested metrics and add the actual decision and outcome before practicing this as a finished story.",
          "sections": [
            {
              "label": "1) Start with the decision and my ownership",
              "paragraphs": [
                "I owned an account-level dashboard for a database savings plan to help assess how the one-year and three-year commitment offers were performing and whether to keep investing in or change the offer. [Describe the parts you personally owned: requirements, definitions, pulling account information, validation, reporting, or the decision review.] "
              ]
            },
            {
              "label": "2) Three things I would cover",
              "look": [
                "Definitions and comparison: one-year versus three-year terms, account and cohort coverage, commitment start dates, customer segments, and consistent measurement periods.",
                "Customer and usage performance: metrics to confirm or include are committed spend, eligible usage, utilization against the commitment, realized customer savings, adoption, expansion, and renewal or retention behavior.",
                "Business economics and risk: metrics to confirm or include are realized price and discounts, revenue, contribution after serving cost, unused-commitment exposure, and whether the offer created incremental demand or mainly discounted existing usage."
              ]
            },
            {
              "label": "3) Explain how I built and validated the view",
              "paragraphs": [
                "[Name the account-level sources, refresh cadence, reconciliation checks, and metric definitions you actually used.] I would explain how the view compared the two commitment terms and separated differences in customer mix, timing, and utilization from differences in offer performance. [Describe a specific pattern you found and how you brought it into the decision process.] "
              ]
            },
            {
              "label": "4) Close with how it changed a decision",
              "paragraphs": [
                "[State the actual recommendation or decision: keep investing, adjust eligibility or discounts, change a commitment term, or investigate further.] [Add the evidence that supported it and the verified result or follow-up.] I would distinguish what the dashboard revealed from what leadership decided, and name the ongoing owner and review cadence."
              ]
            }
          ]
        }
      }
    ],
    "ask": [
      [
        "Which data or process issues create the most friction for Finance?",
        "Identify where ownership and better controls could help."
      ],
      [
        "How is ownership handled when a discrepancy spans Finance, billing and product data?",
        "Understand cross-functional resolution and accountability."
      ],
      [
        "What should this person investigate independently versus with a data specialist?",
        "Clarify the expected depth of technical ownership."
      ]
    ]
  },
  {
    "id": "jacob",
    "name": "Jacob Blau",
    "short": "Jacob",
    "role": "Hiring-manager reconnect",
    "duration": "30 minutes",
    "focus": "Reflect on the role, your potential impact and the first 30–60–90 days.",
    "listen": [
      "Specific motivation and relevant strengths",
      "Accurate synthesis of what you learned",
      "Realistic priorities and ownership"
    ],
    "lessons": [
      {
        "id": "role-fit",
        "title": "Explain why this work fits you",
        "core": "A credible motivation connects the role’s work with demonstrated strengths and what you want to own next.",
        "why": "Jacob’s conversation asks what you have learned about the role and where you can have impact.",
        "steps": [
          "Describe the work you find motivating.",
          "Choose two relevant strengths supported by real examples.",
          "Connect them to the role’s actual priorities learned in interviews.",
          "Name a genuine learning area and how you will address it."
        ],
        "example": {
          "title": "A structure, not an invented biography",
          "body": "“I’m most interested in [type of decision]. In [real role], I personally [action], which led to [actual outcome]. From these conversations, I understand this team needs [priority]. That is where I could contribute while learning [domain].”",
          "formula": "Motivation + demonstrated capability + specific role need"
        },
        "say": "Use your own evidence. Explain why this work, why you, and what you need to learn without pretending to know the internal business.",
        "trap": "Brand enthusiasm alone does not establish fit. Do not invent achievements or confidential knowledge.",
        "check": {
          "q": "What best supports a claim that you will add value?",
          "choices": [
            "A genuine relevant achievement",
            "A long list of buzzwords",
            "Saying you can learn anything"
          ],
          "correct": 0,
          "explanation": "Specific evidence helps the interviewer understand the capability you can bring."
        }
      },
      {
        "id": "ownership-story",
        "title": "Tell a story that shows your ownership",
        "core": "A strong story explains the decision, your specific action, the outcome and what you learned.",
        "why": "The foundational guide explicitly asks for individual ownership, decisions influenced and impact.",
        "steps": [
          "Give brief context and the stakes.",
          "Describe what you personally investigated, recommended or changed.",
          "Explain how partners reacted and what decision followed.",
          "State the actual result and a lesson, including uncertainty."
        ],
        "example": {
          "title": "Turn activity into impact",
          "body": "Weak: “We built a dashboard.” Stronger structure: “The team could not decide X because Y. I did Z, which changed the decision to A. The measured result was B.” Supply truthful details; a useful outcome can be avoiding a bad decision or exposing a risk.",
          "formula": "Decision → your action → outcome → learning"
        },
        "say": "Make your contribution visible without taking credit for other people’s work.",
        "trap": "A polished narrative is not enough if it lacks your role, an actual decision or evidence of the outcome.",
        "check": {
          "q": "Which detail is most important when an interviewer asks “what did you own?”",
          "choices": [
            "The entire team org chart",
            "Your specific action and its effect",
            "How many meetings you attended"
          ],
          "correct": 1,
          "explanation": "The interviewer is trying to identify your contribution to the result."
        }
      },
      {
        "id": "first-90",
        "title": "Build a 30–60–90 plan around outcomes",
        "core": "An onboarding plan should earn understanding, own a useful decision and establish a repeatable way to create value.",
        "why": "Jacob explicitly plans to discuss immediate priorities and your first 30–60–90 days.",
        "steps": [
          "First 30: learn priorities, partners, metric definitions and economics.",
          "By 60: own a meaningful forecast, investment or commercial decision.",
          "By 90: improve one operating process and build a feedback loop.",
          "Validate the sequence with the manager rather than promise an uninformed transformation."
        ],
        "example": {
          "title": "From learning to ownership",
          "body": "A practical plan names outputs: a reconciled driver view, one decision delivered with a partner, and a recurring review that results in actions. It does not promise a precise revenue increase before access to the data and priorities.",
          "formula": "Learn → deliver → make repeatable"
        },
        "say": "I would align on the highest-priority decision first, then build the data and relationships needed to own it reliably.",
        "trap": "Avoid a list of meetings with no outcomes—or a sweeping redesign before understanding existing constraints.",
        "check": {
          "q": "Which is the strongest 60-day milestone?",
          "choices": [
            "Meet everyone",
            "Own one useful decision with a business partner",
            "Replace all planning tools"
          ],
          "correct": 1,
          "explanation": "It demonstrates useful execution while allowing the actual priority to be set with the manager."
        }
      },
      {
        "id": "synthesis",
        "title": "Synthesize what you learned and where to help",
        "core": "Synthesis identifies the common business need across conversations rather than reciting a meeting-by-meeting summary.",
        "why": "The hiring-manager reconnect tests your listening, judgment and realistic view of the role.",
        "steps": [
          "Identify recurring decisions or constraints you actually heard.",
          "Explain the implication for Finance.",
          "Match one or two needs to your real strengths.",
          "Ask whether that prioritization matches the manager’s expectations."
        ],
        "example": {
          "title": "A clear closing",
          "body": "“Across the conversations I heard [actual theme]. That suggests the first priority may be [decision]. My experience with [real example] would help there. I would want to validate [unknown] before recommending a larger change.”",
          "formula": "What I heard → what it means → where I can contribute"
        },
        "say": "Stay specific to the conversations. Be willing to update your view when Jacob clarifies the priority.",
        "trap": "Do not infer internal problems that nobody described, or turn your interpretation into a claimed fact.",
        "check": {
          "q": "What should your synthesis be grounded in?",
          "choices": [
            "Assumed internal challenges",
            "What interviewers actually shared",
            "A generic 90-day template alone"
          ],
          "correct": 1,
          "explanation": "Listening and accurate interpretation demonstrate judgment and partnership."
        }
      }
    ],
    "questions": [
      {
        "q": "What have you learned about this role through the interviews?",
        "tests": "Listening and synthesis.",
        "answer": {
          "statement": "From the conversations, I heard [the actual recurring themes]. My interpretation is that Finance needs to improve [specific decisions], and I would check that understanding with you before treating it as settled.",
          "look": [
            "Recurring themes: what interviewers actually emphasized, including consistent and differing priorities.",
            "Decision needs: which pricing, operating, data, or ownership decisions Finance is expected to improve.",
            "Fit and validation: relevant examples from my experience and the questions that would confirm or correct my interpretation."
          ],
          "tradeoffs": [
            "A concise synthesis shows judgment but can oversimplify differing stakeholder priorities.",
            "Expressing a point of view demonstrates preparation, while checking it avoids presenting an inference as established fact."
          ]
        },
        "probe": "What surprised you?",
        "response": {
          "statement": "Choose an authentic new insight from the conversations and explain how it changes your view of the role.",
          "look": [
            "One authentic new insight from the interviews.",
            "How that insight differs from my earlier understanding.",
            "What it changes about my view of the role and my priorities."
          ],
          "tradeoffs": [
            "A concrete surprise shows listening, but it should not exaggerate what an interviewer said.",
            "Updating my view demonstrates learning while preserving the distinction between evidence and interpretation."
          ]
        }
      },
      {
        "q": "Where could you have the greatest impact?",
        "tests": "Relevant strengths supported by evidence.",
        "answer": {
          "statement": "I believe I could contribute most to [one or two needs actually discussed], supported by [real outcomes from my background]. I would start with a useful deliverable and learn the team's context before taking broader ownership.",
          "look": [
            "Priority needs: one or two problems the interviewers actually raised.",
            "Evidence of fit: genuine examples and outcomes that demonstrate the capabilities needed.",
            "First contribution: a useful decision or deliverable, its owner and inputs, and what I still need to learn."
          ],
          "tradeoffs": [
            "Starting narrowly creates a useful result quickly, while a broader remit can have greater impact after I understand the context.",
            "Confidence in relevant strengths helps establish fit, but overclaiming expertise weakens credibility and can lead to premature ownership."
          ]
        },
        "probe": "Why you rather than another finance candidate?",
        "response": {
          "statement": "Use two specific capabilities backed by actual outcomes. Avoid claiming unique expertise you cannot substantiate.",
          "look": [
            "Two specific capabilities relevant to the team's needs.",
            "Actual outcomes demonstrating each capability.",
            "The gap between transferable experience and expertise I still need to build."
          ],
          "tradeoffs": [
            "Specific evidence is more convincing than a broad list of strengths but may cover fewer needs.",
            "A distinctive contribution matters, while claiming uniqueness without evidence creates an avoidable credibility risk."
          ]
        }
      },
      {
        "q": "What would you do in your first month on this team?",
        "tests": "Practical operating priorities and understanding the strategic finance role.",
        "answer": {
          "statement": "In my first month, I would learn and reconcile the financial drivers, build relationships with the decision owners, and improve one high-value decision while prioritizing the biggest unresolved assumptions.",
          "look": [
            "Financial foundations: definitions, forecast cadence, systems, and reconciliation of revenue, usage, and cost at a useful customer and model level.",
            "Stakeholder needs: Finance, Product, Infrastructure, and GTM decisions, constraints, and reporting gaps.",
            "Early decision value: one offer or rollout decision with an owner and lightweight process, plus a prioritized validation plan for unresolved economics."
          ],
          "tradeoffs": [
            "An early useful deliverable earns trust, but moving before understanding definitions and dependencies can create rework.",
            "A large reporting system may improve scale later, while a focused decision improvement usually delivers value sooner with less overhead."
          ]
        },
        "probe": "What would you stop doing?",
        "response": {
          "statement": "After understanding dependencies, reduce analyses that consume time without changing decisions, duplicate reporting and manual exceptions that could use clear guardrails. I would not assume which existing process is wasteful before learning why it exists.",
          "look": [
            "Which analyses consume time without changing decisions.",
            "Duplicate reporting and manual exceptions that might benefit from guardrails.",
            "Dependencies and reasons existing processes were created before proposing removal."
          ],
          "tradeoffs": [
            "Reducing low-value work frees time but can disrupt controls or dependencies if done prematurely.",
            "Keeping established processes supports continuity while delaying efficiency gains until their purpose is understood."
          ]
        }
      },
      {
        "q": "Why OpenAI and this particular role?",
        "tests": "Motivation grounded in the work.",
        "answer": {
          "statement": "I am interested in this role because [the product and commercial economics problems that genuinely motivate me] connect to [work I have enjoyed and real experience]. I want to own [a specific next responsibility] while building the knowledge the role requires.",
          "look": [
            "Motivation: the specific business problems and work I genuinely want to spend time on.",
            "Evidence of fit: real experience connecting product decisions, commercial economics, and outcomes.",
            "Growth and ownership: what I want to own next, the relevant learning gaps, and how I would learn from partners and data."
          ],
          "tradeoffs": [
            "A larger scope offers growth and impact but comes with a learning curve and a need to build trust.",
            "A compelling motivation should be specific to the work while staying grounded in experience I can substantiate."
          ]
        },
        "probe": "What would be your biggest learning curve?",
        "response": {
          "statement": "Name a genuine gap, explain its relevance and outline how you would learn from the right partners and data. Do not frame a disguised strength as a weakness.",
          "look": [
            "A genuine gap in my knowledge or experience.",
            "Why that gap matters to this role's decisions.",
            "The partners, data, and practical work that would help me close it."
          ],
          "tradeoffs": [
            "Naming a real gap is candid but requires a credible learning plan.",
            "Taking ownership quickly can accelerate development, while pairing with the right specialists reduces decision risk during the learning curve."
          ]
        }
      },
      {
        "q": "A senior leader disagrees with your recommendation and asks you to change the assumptions. How do you respond?",
        "tests": "Judgment, intellectual honesty and ability to influence without rigidity.",
        "answer": {
          "statement": "I would clarify the source of disagreement, show the requested scenario with transparent assumptions, and revise my recommendation when evidence or the objective changes while preserving an honest forecast.",
          "look": [
            "The disagreement: whether it concerns the objective, evidence, risk tolerance, or a specific driver.",
            "Scenario transparency: supported versus proposed assumptions, the original comparison, and the threshold where the decision changes.",
            "Decision and learning: evidence that would change my view, an explicit judgment, owners and review gates, and a real example if the question is behavioral."
          ],
          "tradeoffs": [
            "Being willing to revise supports learning and influence, while changing assumptions without evidence sacrifices forecast integrity.",
            "A clear recommendation helps the team decide, but too much rigidity can miss a changed objective or legitimate risk preference."
          ]
        },
        "probe": "What if the leader just wants the forecast to match the target?",
        "response": {
          "statement": "I would distinguish an ambition from an evidence-based forecast and show the driver gap required to achieve the target. I would not present an unsupported aspiration as the expected outcome.",
          "look": [
            "The difference between leadership's ambition and the evidence-based forecast.",
            "The operating driver gap required to reach the target.",
            "The actions, resources, and evidence needed to close that gap."
          ],
          "tradeoffs": [
            "An ambitious target can motivate action, but presenting it as the expected outcome conceals execution risk.",
            "Maintaining forecast integrity may surface an uncomfortable gap, while making that gap explicit enables real resource and strategy decisions."
          ]
        }
      }
    ],
    "ask": [
      [
        "What are the one or two decisions you most want this hire to own?",
        "Clarify the highest-value starting point."
      ],
      [
        "What would make this hire especially effective six months in?",
        "Learn the actual success criteria."
      ],
      [
        "Is there any part of my experience you would like me to clarify?",
        "Create room to address a specific concern without assuming an outcome."
      ]
    ]
  }
];
