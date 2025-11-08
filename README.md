
# Take one at SME dashboard

Design for this dashboard is just a potential features sketch really.
Here is the current checklist for features displayed, to-be displayed:
* Header
* Monitoring cards
* Cash Flow monitoring chart
* Liquidity Protection
* SEB savings alloctation
* Return analysis
* [TODO] SME comparison with peers


## Header

Currently - irrelevant


## Monitoring cards

### Current Balance

Show the SME’s current cash available, with a comparison to the previous month to indicate growth or decline.

### Predicted Cash Flow

Forecast cash inflow/outflow for the next few days, helping cash allocation.

### Surplus Transferred

Mostly for overnight deposits, track interest earned overnight.

### Benefits Earned

Monitor returns, show the financial benefit of this system over a timeframe.


## Cash Flow monitoring chart

Compare predicted cash flow with factual values. Display prediction confidence, surplus, average inflow and set liquidity buffer.

[TODO] Outflow monitoring options


## Liquidity Protection

**Base limit** is the minimum cash amount for SME's needs, the system ensures it's never under required amount.
**Available surplus** is the extra cash above base limit. The system should use this surplus to earn more money by investing it.
**Info** there should always be information about *long-term deposits* ahead of time, more on them later.

* Days protected - show how many days the system has managed to keep cash base above minium, while investing surplus money and meeting SME's outflow needs.
* Optimization rate - [TODO] requires a calculation for near perfect money flow.
* Average surplus
* Upcoming obligations - user-set timestamps, historically analysed and predicted dates for payments like: payroll, rent, other expenses.


## SEB savings allocation

Show how surplus cash is distributed across different saving account types.

* Overnight deposit - cash is deposited for small amount of time, makes a small interest and can be withdrawn.
* Regular savings - [TODO] explore what SEB offers
* Long term savings - [TODO] explore what SEB offers


## Return analysis

Show earning benefits over time by breaking down performance. 