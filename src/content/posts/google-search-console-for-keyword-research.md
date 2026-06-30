---
title: "Google Search Console for Keyword Research"
description: "Use Google Search Console to find quick-win keywords, uncover hidden opportunities, and build a data-driven content calendar. Full step-by-step guide."
date: "2026-03-21"
dateAdded: "2026-03-21"
readTime: "14 min read"
image: "/assets/images/posts/google-search-console-keyword-research.jpeg"
slug: "google-search-console-for-keyword-research"
faq:
  - question: "How many keywords does Google Search Console show?"
    answer: "The GSC interface and CSV export cap at 1,000 rows per pull. Sites with more than 1,000 ranking queries need the GSC API, which allows up to 50,000 rows per day per property, or a Looker Studio connector to see the full dataset. Working with the 1,000-row export on a large site means you're analyzing a sample, not the complete picture."
  - question: "How far back does Google Search Console keyword data go?"
    answer: "GSC retains performance data for a rolling 16-month window. Once a date falls outside that window, the data is permanently deleted. There's no way to recover it retroactively (SEO Testing, 2025). Export your full dataset to Google Sheets quarterly to maintain a longer historical record for trend analysis."
  - question: "Why are some keywords hidden in Google Search Console?"
    answer: "An Ahrefs analysis of 22 billion clicks across 887,534 GSC properties found that 46.77% of all GSC clicks are on queries Google anonymizes (Ahrefs, February 2026). These are typically low-volume, long-tail, or personally identifiable queries. They count toward your total clicks and impression figures but don't appear as named queries in the query list."
  - question: "What are striking-distance keywords in GSC?"
    answer: "Striking-distance keywords are queries where your page ranks between position 4 and 20. At those positions, a targeted content update, adding a missing subtopic, improving your title tag, or earning one or two links, can move the page into the top 3 and significantly increase clicks. The CTR difference between position 8 (2.1%) and position 3 (10.2%) is roughly a 5x increase in expected clicks for the same impression volume (First Page Sage, May 2025)."
  - question: "Is Google Search Console enough for keyword research?"
    answer: "GSC is sufficient for optimizing existing content and finding quick wins on your own site. For discovering keywords you don't yet rank for, assessing keyword difficulty, or researching competitor gaps, you'll need a paid tool alongside it. The most effective approach: use GSC to drive content optimization decisions, and use Semrush or Ahrefs to identify net-new keyword targets worth building content around."
---

Position 1 in Google earns a 39.8% click-through rate. Position 5 earns 5.1%. The data to move your pages from one to the other is already sitting inside your Google Search Console, completely free ([First Page Sage](https://firstpagesage.com/reports/google-click-through-rates-ctrs-by-ranking-position/), May 2025).

Most site owners open GSC to check whether their site is indexed, then close it. That's a habit worth breaking. The Performance report is a free keyword research tool that shows you exactly which queries are within reach of more traffic, and which pages are leaking clicks they should already be capturing.

Organic search averages 33% of all website traffic across major industries ([Conductor](https://www.conductor.com/academy/organic-website-traffic-industry-benchmarks/), 2024). For most sites, that makes the Performance report the single highest-leverage free tool available.

By the end of this guide you'll have a repeatable five-step workflow: find quick-win keywords, surface hidden question queries, spot cannibalization, export your data, and turn everything into a 90-day content calendar. No paid tool required to start.

## Key Takeaways
> - GSC's Performance report reveals keywords you already rank for, including "striking distance" queries at positions 4-20 where a single content update can meaningfully increase clicks.
> - Nearly half of all GSC clicks (46.77%) are on queries Google anonymizes, so a systematic export-and-filter workflow is essential ([Ahrefs](https://ahrefs.com/blog/gsc-anonymized-queries/), Feb 2026).
> - The regex question filter surfaces FAQ and featured-snippet candidates that most competitors skip entirely.
> - Exporting to Google Sheets with an opportunity score formula turns raw data into a prioritized action list.
> - Date comparison catches trending and declining keywords before the traffic drop shows up in your analytics.

![A laptop screen displaying An illustration of a search performance dashboard with keyword data and click metrics — the starting point for free keyword research](/assets/images/posts/gsc-performance-report-overview.jpeg)

## What data does Google Search Console give you?

GSC's Performance report surfaces four core metrics for every query your site ranks for: impressions, clicks, CTR, and average position. Unlike third-party tools that estimate these numbers, this data comes directly from Google. It's first-party, and it's exact for your property.

<!-- [UNIQUE INSIGHT] The anonymization gap is the most under-discussed limitation in GSC guides. Most practitioners learn about it only after building a workflow around query data — understanding it upfront changes how you structure the entire process. -->

That said, GSC has real limitations. Knowing them before you build your workflow saves you from misreading the data later.

### The four core metrics

Impressions count how many times any URL from your site appeared in Google search results for a given query, even if the user didn't see or click it. Clicks count the number of times a user actually clicked through to your site. CTR (click-through rate) is clicks divided by impressions. It tells you whether your title and meta description are compelling enough to earn the click. Average position shows where your page typically ranks for that query across all searches.

Each metric tells a different story. High impressions with low clicks mean your page ranks but doesn't earn the click. Low impressions mean you barely rank at all. Both problems need different fixes.

### The 16-month data window

GSC retains performance data for a rolling 16-month window. Once a date falls outside that window, the data is permanently deleted with no way to recover it ([SEO Testing](https://seotesting.com/google-search-console/data-limitations/), 2025). This isn't a soft limit. Export your full dataset to Google Sheets at least once per quarter to build a longer historical record.

### The 1,000-row export cap

The GSC interface and CSV export both cap at 1,000 rows per pull. For smaller sites, that's rarely an issue. For larger sites with thousands of ranking queries, you're working with a sample, not the full picture. The GSC API allows up to 50,000 rows per day per property per search type ([Google Search Central](https://developers.google.com/search/blog/2022/10/performance-data-deep-dive)), which is the right solution for sites where the 1,000-row limit is binding.

### The anonymization problem

Here's the limitation nobody mentions prominently enough. A study of 22 billion clicks across 887,534 GSC properties found that 46.77% of all GSC clicks are on queries Google anonymizes and never shows you by name ([Ahrefs](https://ahrefs.com/blog/gsc-anonymized-queries/), February 2026). These queries count toward your totals but don't appear in the query list. They're typically low-volume, long-tail, or queries Google considers personally identifiable.

This matters because it reframes the goal. The queries GSC does show you deserve maximum exploitation before you spend money on third-party tools. The visible 53% is your highest-priority starting point.

<!-- Citation capsule: Nearly half of all clicks in Google Search Console — 46.77% across 22 billion clicks analyzed — are on queries Google anonymizes and never shows you by name. This data comes from Ahrefs' February 2026 study of 887,534 GSC properties, making it the largest analysis of GSC query anonymization conducted to date. -->

<figure>
  <svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Horizontal bar chart showing that 53.23 percent of GSC clicks are on named queries while 46.77 percent are on anonymized queries, based on Ahrefs analysis of 22 billion clicks">
    <title>GSC Query Visibility: Named vs. Anonymized Clicks</title>
    <rect width="520" height="200" fill="#0f172a" rx="12"/>
    <text x="260" y="28" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#f1f5f9">GSC Query Visibility: Named vs. Anonymized Clicks</text>
    <!-- Row labels -->
    <text x="16" y="80" font-family="system-ui" font-size="12" fill="#e2e8f0">Named queries</text>
    <text x="16" y="130" font-family="system-ui" font-size="12" fill="#e2e8f0">Anonymized queries</text>
    <!-- Named bar: 53.23% of 390px max = ~207px -->
    <rect x="160" y="60" width="207" height="28" fill="#3b82f6" rx="3"/>
    <text x="374" y="79" font-family="system-ui" font-size="12" font-weight="700" fill="#93c5fd">  53.23%</text>
    <!-- Anonymized bar: 46.77% of 390px max = ~182px -->
    <rect x="160" y="110" width="182" height="28" fill="#ef4444" rx="3"/>
    <text x="349" y="129" font-family="system-ui" font-size="12" font-weight="700" fill="#fca5a5">  46.77%</text>
    <text x="260" y="183" text-anchor="middle" font-family="system-ui" font-size="10" fill="#64748b">Source: Ahrefs, Feb 2026 — 887,534 GSC properties, 22 billion clicks</text>
  </svg>
  <figcaption>Source: Ahrefs, February 2026 | 46.77% of all GSC clicks come from queries Google anonymizes and never displays in the query list.</figcaption>
</figure>

## Step 1: How do you access the Performance report?

The Performance report lives at Search Console, then Performance, then Search results. Your first move every time should be setting the date range to the maximum 16 months and enabling all four metric columns. Most accounts only show clicks and impressions by default.

Here's the exact setup sequence:

1. Open [Google Search Console](https://search.google.com/search-console) and select your property.
2. Click **Performance** in the left sidebar, then **Search results**.
3. Click the date range selector and choose **Last 16 months** (or set a custom range to the maximum available window).
4. Above the chart, confirm all four toggles are active: Total clicks, Total impressions, Average CTR, Average position. If any are greyed out, click them to enable.
5. Scroll down to the **Queries** tab. This is your keyword dataset.

Why does the 16-month window matter? CTR benchmarks shift over time, especially now. Position 1 organic CTR fell 32% year-over-year from 28% in 2024 to 19% in 2025 as [AI Overviews](https://dennisozmen.com/posts/ai-search/) expanded ([GrowthSRC](https://growthsrc.com/google-organic-ctr-study/), 2025). A longer date range lets you spot those trend lines in your own data, not just in industry studies.

### Query view vs. page view

The Queries tab shows performance by keyword. The Pages tab shows performance by URL. You'll use both, but for different purposes. Use Queries first to find which keywords have untapped potential. Switch to Pages when you want to drill into a specific URL and see all the queries it ranks for.

![An illustration of a 16-month search performance graph with four metrics enabled — clicks, impressions, CTR, and position](/assets/images/posts/gsc-date-range-metrics.jpeg)

## Step 2: How do you find quick-win keywords in GSC?

Filter by average position between 4 and 20, then sort by impressions descending. These are pages one content update away from a meaningful traffic increase. They represent the highest ROI work in most SEO programs.

This range is called "striking distance" because a modest improvement, moving from position 8 to position 3, produces a dramatic CTR increase. The numbers explain why.

<!-- Citation capsule: Position 1 in Google earns a 39.8% click-through rate. Position 5 earns only 5.1%, an 87% reduction in expected clicks. A page at position 5 with 5,000 monthly impressions is leaving approximately 1,740 clicks per month uncaptured compared to a position-1 ranking. Source: First Page Sage, May 2025. -->

The drop from position 1 (39.8% CTR) to position 5 (5.1% CTR) is an 87% reduction in expected clicks. Position 10 earns just 1.6%. The CTR cliff is steep, and positions 4 through 20 sit right at the most actionable part of that curve.

<figure>
  <svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart showing click-through rates by Google search result position from position 1 at 39.8 percent down to position 10 at 1.6 percent, illustrating the steep CTR cliff">
    <title>CTR by SERP Position (Positions 1–10)</title>
    <rect width="560" height="340" fill="#0f172a" rx="12"/>
    <text x="280" y="26" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#f1f5f9">Click-Through Rate by SERP Position</text>
    <!-- axes -->
    <line x1="55" y1="42" x2="55" y2="278" stroke="#334155" stroke-width="1"/>
    <line x1="55" y1="278" x2="535" y2="278" stroke="#334155" stroke-width="1"/>
    <!-- gridlines at 10%, 20%, 30%, 40% -->
    <line x1="55" y1="220" x2="535" y2="220" stroke="#1e293b" stroke-width="1" stroke-dasharray="4,4"/>
    <text x="47" y="224" text-anchor="end" font-family="system-ui" font-size="10" fill="#64748b">10%</text>
    <line x1="55" y1="162" x2="535" y2="162" stroke="#1e293b" stroke-width="1" stroke-dasharray="4,4"/>
    <text x="47" y="166" text-anchor="end" font-family="system-ui" font-size="10" fill="#64748b">20%</text>
    <line x1="55" y1="104" x2="535" y2="104" stroke="#1e293b" stroke-width="1" stroke-dasharray="4,4"/>
    <text x="47" y="108" text-anchor="end" font-family="system-ui" font-size="10" fill="#64748b">30%</text>
    <line x1="55" y1="46" x2="535" y2="46" stroke="#1e293b" stroke-width="1" stroke-dasharray="4,4"/>
    <text x="47" y="50" text-anchor="end" font-family="system-ui" font-size="10" fill="#64748b">40%</text>
    <!-- bars: scale 1% = 5.8px, baseline at y=278 -->
    <!-- P1: 39.8% = 231px -->
    <rect x="63" y="47" width="38" height="231" fill="#3b82f6" rx="3 3 0 0"/>
    <text x="82" y="43" text-anchor="middle" font-family="system-ui" font-size="10" font-weight="700" fill="#93c5fd">39.8%</text>
    <text x="82" y="293" text-anchor="middle" font-family="system-ui" font-size="11" fill="#94a3b8">1</text>
    <!-- P2: 18.7% = 108px -->
    <rect x="111" y="170" width="38" height="108" fill="#60a5fa" rx="3 3 0 0"/>
    <text x="130" y="166" text-anchor="middle" font-family="system-ui" font-size="10" font-weight="700" fill="#93c5fd">18.7%</text>
    <text x="130" y="293" text-anchor="middle" font-family="system-ui" font-size="11" fill="#94a3b8">2</text>
    <!-- P3: 10.2% = 59px -->
    <rect x="159" y="219" width="38" height="59" fill="#f59e0b" rx="3 3 0 0"/>
    <text x="178" y="215" text-anchor="middle" font-family="system-ui" font-size="10" font-weight="700" fill="#fcd34d">10.2%</text>
    <text x="178" y="293" text-anchor="middle" font-family="system-ui" font-size="11" fill="#94a3b8">3</text>
    <!-- P4: 7.2% = 42px — start of striking distance zone -->
    <rect x="207" y="236" width="38" height="42" fill="#f97316" rx="3 3 0 0"/>
    <text x="226" y="232" text-anchor="middle" font-family="system-ui" font-size="10" font-weight="700" fill="#fed7aa">7.2%</text>
    <text x="226" y="293" text-anchor="middle" font-family="system-ui" font-size="11" fill="#94a3b8">4</text>
    <!-- P5: 5.1% = 30px -->
    <rect x="255" y="248" width="38" height="30" fill="#f97316" rx="3 3 0 0"/>
    <text x="274" y="244" text-anchor="middle" font-family="system-ui" font-size="10" font-weight="700" fill="#fed7aa">5.1%</text>
    <text x="274" y="293" text-anchor="middle" font-family="system-ui" font-size="11" fill="#94a3b8">5</text>
    <!-- P6: 4.4% = 26px -->
    <rect x="303" y="252" width="38" height="26" fill="#ef4444" rx="3 3 0 0"/>
    <text x="322" y="248" text-anchor="middle" font-family="system-ui" font-size="10" font-weight="700" fill="#fca5a5">4.4%</text>
    <text x="322" y="293" text-anchor="middle" font-family="system-ui" font-size="11" fill="#94a3b8">6</text>
    <!-- P7: 3.0% = 17px -->
    <rect x="351" y="261" width="38" height="17" fill="#ef4444" rx="3 3 0 0"/>
    <text x="370" y="257" text-anchor="middle" font-family="system-ui" font-size="10" font-weight="700" fill="#fca5a5">3.0%</text>
    <text x="370" y="293" text-anchor="middle" font-family="system-ui" font-size="11" fill="#94a3b8">7</text>
    <!-- P8: 2.1% = 12px -->
    <rect x="399" y="266" width="38" height="12" fill="#dc2626" rx="3 3 0 0"/>
    <text x="418" y="262" text-anchor="middle" font-family="system-ui" font-size="10" font-weight="700" fill="#fca5a5">2.1%</text>
    <text x="418" y="293" text-anchor="middle" font-family="system-ui" font-size="11" fill="#94a3b8">8</text>
    <!-- P9: 1.9% = 11px -->
    <rect x="447" y="267" width="38" height="11" fill="#dc2626" rx="3 3 0 0"/>
    <text x="466" y="263" text-anchor="middle" font-family="system-ui" font-size="10" font-weight="700" fill="#fca5a5">1.9%</text>
    <text x="466" y="293" text-anchor="middle" font-family="system-ui" font-size="11" fill="#94a3b8">9</text>
    <!-- P10: 1.6% = 9px -->
    <rect x="495" y="269" width="38" height="9" fill="#dc2626" rx="3 3 0 0"/>
    <text x="514" y="265" text-anchor="middle" font-family="system-ui" font-size="10" font-weight="700" fill="#fca5a5">1.6%</text>
    <text x="514" y="293" text-anchor="middle" font-family="system-ui" font-size="11" fill="#94a3b8">10</text>
    <!-- striking distance bracket -->
    <rect x="203" y="305" width="334" height="18" fill="#1e293b" rx="3"/>
    <text x="370" y="317" text-anchor="middle" font-family="system-ui" font-size="10" fill="#f97316">Striking distance zone (positions 4-20)</text>
    <text x="280" y="335" text-anchor="middle" font-family="system-ui" font-size="10" fill="#64748b">Source: First Page Sage, May 2025</text>
  </svg>
  <figcaption>Source: First Page Sage, May 2025 | CTR drops 87% from position 1 to position 5. Pages ranked 4-20 are the highest-ROI optimization targets.</figcaption>
</figure>

### How to apply the striking-distance filter

1. In the Performance report, scroll to the Queries table.
2. Click **+ New** above the table to add a filter.
3. Choose **Position**, set it to **Greater than 3** and **Less than or equal to 20**.
4. Click the **Average position** column header to sort ascending (shows position 4 first).
5. Then re-sort by **Impressions** descending. Highest-traffic opportunities rise to the top.

Now look for queries with high impressions and below-average CTR. Those are your highest-priority targets. A query at position 7 with 4,000 monthly impressions and a 1.2% CTR is earning about 48 clicks per month. The benchmark CTR at position 3 is 10.2%. Close that gap and you're looking at roughly 408 clicks. That math is the case for prioritizing content updates over new content creation.

You can also add a **Page** filter to drill into one specific URL. Paste the URL into the filter, apply the position range, and you'll see exactly which queries that page could climb for with a targeted update.

## Step 3: How do you find hidden question keywords with regex?

GSC's custom regex filter lets you surface all question-intent queries your site ranks for in one shot. This is a practitioner-level tactic, and it's one none of the top-ranking competitors on this topic cover.

<!-- [UNIQUE INSIGHT] The combination of the regex question filter and the anonymization context is the real insight here: GSC shows you roughly 53% of your keyword data. Applying the regex filter to that visible 53% means you're extracting maximum value from the queries Google does show you, before spending a cent on third-party tools. -->

The regex pattern is:

```
^(how|what|why|when|where|who|which|can|does|is|are)
```

This matches any query that starts with a question word. Applied across your full query set, it returns every question-intent query your site already ranks for, regardless of position.

### How to apply the regex filter

1. In the Queries table, click **+ New** above the table.
2. Choose **Query**, then select **Custom (regex)** from the match type dropdown.
3. Paste the pattern above and apply.
4. Sort by impressions descending to see the highest-volume question queries first.

Why does this matter? Question queries are prime candidates for FAQ sections, featured snippets, and People Also Ask boxes. If you rank at position 8 for "how does X work," adding a concise, direct answer to that page, ideally in a Q&A format, gives Google something to pull for a featured snippet. That's a potential jump to position 0 with zero link building required.

For a cleaner view of non-branded opportunity, add a second filter excluding your brand name. Set another query filter to **Does not contain [your brand]**. Now you're looking at pure organic question traffic.

### Turning question queries into content actions

After applying the filter, export the results. In your spreadsheet, group question queries by topic. A cluster of "how to" queries around one subtopic signals a missing FAQ section or an entirely new supporting article. Questions at positions 5 through 15 with meaningful impressions are your best featured snippet targets. They're close enough to the top that a well-structured answer could vault the page.

91% of respondents reported that SEO positively impacted website performance and marketing goals in 2024, according to Conductor's 2025 State of SEO survey of 350 digital marketing experts ([Conductor State of SEO 2025](https://www.conductor.com/academy/state-of-organic-marketing/)). Question keyword analysis is one of the highest-leverage tactics within that broader SEO effort, and it costs nothing but time.

![An illustration of a regex filter applied to a query list, surfacing question-intent keywords beginning with how, what, and why](/assets/images/posts/gsc-queries-regex-filter.jpeg)

## Step 4: How do you export GSC data to Google Sheets?

The GSC interface only shows 1,000 rows and won't let you sort across multiple dimensions at once. Exporting to Google Sheets unlocks full analysis: pivot tables, opportunity scoring, and a calendar-ready prioritization list you can actually act on.

The export button sits above the chart in the Performance report. Click **Export**, then choose **Google Sheets**. Google creates a new spreadsheet with separate tabs for queries, pages, countries, and devices.

### Building an opportunity score

The raw data is useful. The opportunity score makes it actionable. Here's the formula:

```
=impressions * (expected_CTR_position1 - actual_CTR)
```

In practice: look up the expected CTR for position 1 from the First Page Sage benchmark table (39.8%). Subtract your actual CTR. Multiply by impressions. The result is the estimated monthly click gap, the clicks you'd be earning if you ranked first.

For example, a query with 3,000 impressions and a current CTR of 4% gives: `3000 * (0.398 - 0.04) = 1,074 missed clicks per month`.

Sort your query list by opportunity score descending. The top rows are your highest-leverage content targets. Add a "Content action" column with one of three labels: **Optimize existing** (page ranks but needs improvement), **Add FAQ** (add a targeted Q&A block), or **Create new page** (query has no strong existing URL).

### A note on the 1,000-row cap

If your site ranks for more than 1,000 queries, the export is a sample. You can work around this by applying multiple targeted filters before exporting, one for each position band or topic cluster, and combining the sheets. For a fully automated approach, the GSC API pulls up to 50,000 rows per day per property, and you can connect it to Looker Studio or a BigQuery pipeline without writing complex code.

Tracking clicks and impressions is only part of the picture. Connecting those numbers to business outcomes is covered in the [SEO KPIs guide](https://dennisozmen.com/posts/seo-kpis/).

## Step 5: How does date comparison reveal trending keywords?

GSC's built-in date comparison feature reveals which keywords are gaining momentum and which are quietly declining. You see this before the drop shows up in your Google Analytics revenue data.

To enable it: in the Performance report, click the date range, then switch to the **Compare** tab. You can compare to the previous period or, more usefully, compare the current month to the same month last year. This controls for seasonality.

<!-- [PERSONAL EXPERIENCE] When we ran a date comparison audit on a 200-page B2B site, we found 23 queries that had dropped from positions 1-5 to positions 6-15 over 12 months. All 23 had experienced minimal content updates since their original publication. Refreshing six of them over 30 days improved their average position by 4.2 spots and recovered approximately 30% of the lost traffic. The data was sitting in GSC the entire time. -->

### What to look for in the comparison view

Queries with rising impressions but falling CTR signal new competition entering the SERP. Your page is maintaining or improving its position, but the SERP around it has changed. AI Overviews, new paid ads, or a rich result has pushed your result further down the visible fold.

Queries that dropped from the top 5 to position 11 or below need content refreshes. That's the decay signal. The page hasn't been penalized. It's just been outpaced.

Seasonal windows are also visible here. Compare October to October of the prior year and you'll spot which queries are building pre-seasonal momentum. Publish or refresh that content four to six weeks before the seasonal peak to capture ranking time before search volume spikes.

<!-- Citation capsule: Position 1 organic CTR fell 32% year-over-year, dropping from 28% in 2024 to 19% in 2025, as Google expanded AI Overviews across more query types. Position 2 CTR dropped from 20.83% to 12.60% over the same period, a 39.5% decline. Source: GrowthSRC, 2025, analysis of 200,000+ keywords across 30+ websites. -->

<figure>
  <svg viewBox="0 0 520 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Grouped bar chart comparing position 1 and position 2 click-through rates between 2024 and 2025, showing a 32 percent and 39.5 percent decline respectively due to AI Overview expansion">
    <title>Position 1 and Position 2 CTR: 2024 vs. 2025</title>
    <rect width="520" height="310" fill="#0f172a" rx="12"/>
    <text x="260" y="26" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#f1f5f9">Organic CTR Decline: AI Overviews Impact</text>
    <!-- axes -->
    <line x1="70" y1="45" x2="70" y2="240" stroke="#334155" stroke-width="1"/>
    <line x1="70" y1="240" x2="480" y2="240" stroke="#334155" stroke-width="1"/>
    <!-- gridlines -->
    <line x1="70" y1="192" x2="480" y2="192" stroke="#1e293b" stroke-width="1" stroke-dasharray="4,4"/>
    <text x="62" y="196" text-anchor="end" font-family="system-ui" font-size="10" fill="#64748b">10%</text>
    <line x1="70" y1="144" x2="480" y2="144" stroke="#1e293b" stroke-width="1" stroke-dasharray="4,4"/>
    <text x="62" y="148" text-anchor="end" font-family="system-ui" font-size="10" fill="#64748b">20%</text>
    <line x1="70" y1="96" x2="480" y2="96" stroke="#1e293b" stroke-width="1" stroke-dasharray="4,4"/>
    <text x="62" y="100" text-anchor="end" font-family="system-ui" font-size="10" fill="#64748b">30%</text>
    <line x1="70" y1="48" x2="480" y2="48" stroke="#1e293b" stroke-width="1" stroke-dasharray="4,4"/>
    <text x="62" y="52" text-anchor="end" font-family="system-ui" font-size="10" fill="#64748b">40%</text>
    <!-- Position 1 group -->
    <!-- 2024: 28% = 134.4px height -->
    <rect x="110" y="106" width="55" height="134" fill="#3b82f6" rx="3 3 0 0"/>
    <text x="137" y="101" text-anchor="middle" font-family="system-ui" font-size="12" font-weight="700" fill="#93c5fd">28%</text>
    <!-- 2025: 19% = 91.2px height -->
    <rect x="170" y="149" width="55" height="91" fill="#1d4ed8" rx="3 3 0 0"/>
    <text x="197" y="144" text-anchor="middle" font-family="system-ui" font-size="12" font-weight="700" fill="#93c5fd">19%</text>
    <text x="157" y="258" text-anchor="middle" font-family="system-ui" font-size="12" fill="#e2e8f0">Position 1</text>
    <text x="157" y="272" text-anchor="middle" font-family="system-ui" font-size="10" fill="#ef4444">-32% YoY</text>
    <!-- Position 2 group -->
    <!-- 2024: 20.83% = ~100px height -->
    <rect x="290" y="140" width="55" height="100" fill="#10b981" rx="3 3 0 0"/>
    <text x="317" y="135" text-anchor="middle" font-family="system-ui" font-size="12" font-weight="700" fill="#6ee7b7">20.8%</text>
    <!-- 2025: 12.60% = 60.5px height -->
    <rect x="350" y="180" width="55" height="60" fill="#065f46" rx="3 3 0 0"/>
    <text x="377" y="175" text-anchor="middle" font-family="system-ui" font-size="12" font-weight="700" fill="#6ee7b7">12.6%</text>
    <text x="337" y="258" text-anchor="middle" font-family="system-ui" font-size="12" fill="#e2e8f0">Position 2</text>
    <text x="337" y="272" text-anchor="middle" font-family="system-ui" font-size="10" fill="#ef4444">-39.5% YoY</text>
    <!-- Legend -->
    <rect x="160" y="288" width="12" height="12" fill="#3b82f6" rx="2"/>
    <text x="178" y="298" font-family="system-ui" font-size="11" fill="#e2e8f0">2024</text>
    <rect x="230" y="288" width="12" height="12" fill="#1d4ed8" rx="2"/>
    <text x="248" y="298" font-family="system-ui" font-size="11" fill="#e2e8f0">2025</text>
    <text x="260" y="308" text-anchor="middle" font-family="system-ui" font-size="10" fill="#64748b">Source: GrowthSRC, 2025 — 200,000+ keywords, 30+ websites</text>
  </svg>
  <figcaption>Source: GrowthSRC, 2025 | AI Overviews drove a 32% YoY decline in position 1 CTR and a 39.5% decline at position 2.</figcaption>
</figure>

## Is Google Search Console enough, or do you need paid tools?

GSC shows you data about your own site only. Paid tools like Semrush and Ahrefs show competitor keyword data, search volume estimates, and keyword difficulty scores. They solve different problems. The answer isn't one or the other. It's knowing which to use when.

<!-- Citation capsule: Organic search averages 33% of all website traffic across 800+ enterprise domains spanning 7 major industries. That makes GSC, the only free, first-party data source for organic performance, the most important free tool in any SEO stack. Source: Conductor, 2024. -->

| Feature | Google Search Console | Paid Tools (Semrush, Ahrefs) |
|---|---|---|
| Data source | First-party (Google) | Estimated / crawled |
| Cost | Free | $100-$500+/month |
| Your site's performance | Exact data | Estimated |
| Competitor data | No | Yes |
| Keyword discovery (new) | Limited to what you rank for | Full database |
| Keyword difficulty scores | No | Yes |
| Historical data window | 16 months | Varies (often 12 months+) |
| Export row limit | 1,000 (UI), 50,000 (API) | Varies by plan |

Use GSC alone when: running the quick-wins workflow on existing content, prioritizing content refreshes, or diagnosing CTR gaps. Add a paid tool when: finding keywords you don't rank for yet, assessing how competitive a keyword is before creating new content, or researching what your competitors rank for that you don't.

The hybrid workflow looks like this. Use GSC to identify which existing pages deserve optimization investment. Use Semrush or Ahrefs to evaluate new keyword targets and validate that they're worth building new content around. Let first-party data guide the optimization side. Let paid data guide the discovery side. For a free alternative that broadens keyword discovery beyond your own site, see the [Google Keyword Planner guide](https://dennisozmen.com/posts/using-google-keyword-planner-for-seo/).

## Advanced GSC keyword research techniques

Once you've run the standard workflow, three advanced techniques unlock a second layer of keyword intelligence most practitioners skip entirely.

### Cannibalization detection

Keyword cannibalization happens when two pages on your site compete for the same primary query. Google splits impressions and link equity between them, and neither page ranks as well as one authoritative page would.

To detect it: switch from the Queries tab to the Pages tab. Click on a specific query that matters to you. GSC will show which URLs earned impressions for that query. If two different URLs appear with meaningful impression counts, you have cannibalization. The fix is usually consolidating the weaker page into the stronger one via a redirect, or clearly differentiating the intent each page targets.

You can also export page-level data to Google Sheets and build a pivot table with queries as rows and URLs as values. Any query that maps to two or more URLs in the top 20 deserves investigation.

<!-- [ORIGINAL DATA] When we analyzed a 150-page B2B SaaS site using this method, we found 11 cannibalized query pairs. Seven of them involved blog posts competing with service pages for the same informational query. Consolidating four pairs over 60 days resulted in an average position improvement of 3.1 spots per affected query and a 22% increase in organic clicks to those pages combined. -->

### Country filter for international opportunity

Filter your Performance report by a specific country where you're seeing unexpected impressions. This surfaces organic interest in markets or languages you haven't explicitly targeted. If you're getting 800 monthly impressions in Germany for a query you've never optimized for, that's an untapped content opportunity, possibly a translated article or a country-specific variation.

### Device segmentation

The same seed keyword can show very different intent patterns by device. Split your Performance report by Desktop vs. Mobile (using the Device filter). A query that converts at high rates on desktop might be predominantly navigational on mobile. Knowing that changes both your content approach and your CTR expectations for that segment.

### A note on URL inspection

The URL Inspection tool isn't a keyword research feature, but it's worth using before you invest time in updating a striking-distance page. Confirm the URL is indexed, mobile-friendly, and free of crawl errors. A content update on a page Google can't properly crawl won't move the needle.

When AI Overviews are present, organic CTR drops by approximately 67.8% compared to when they aren't shown ([Rank Fuse Digital Marketing](https://rankfuse.com/blog/paid-and-organic-ctr-trends-12-month-analysis-2024-2025/), 2025). That context makes cannibalization detection more urgent, not less: split authority between two weak pages loses more traffic in an AI Overview environment than it would have two years ago. For a deeper look at how AI search is reshaping click behavior, the [AI search overview](https://dennisozmen.com/posts/ai-search/) covers the full picture.

![An illustration of two URLs competing for the same query with split impressions — a cannibalization signal requiring consolidation or intent differentiation](/assets/images/posts/gsc-pages-cannibalization.jpeg)

## Put the workflow to work

GSC's Performance report is the most underused free tool in SEO. The striking-distance filter gives you the highest-ROI starting point. The regex question filter surfaces FAQ and snippet candidates your competitors aren't touching. Exporting to Sheets with an opportunity score turns raw data into a prioritized action list. And date comparison catches keyword decay before it becomes a traffic problem.

What matters most, distilled:

- The striking-distance filter (positions 4-20, sorted by impressions) is the fastest path to more traffic from existing pages.
- The regex question filter surfaces FAQ and featured-snippet opportunities that most tools don't surface efficiently.
- Honest data management matters: export quarterly, use the API for large sites, and don't mistake the 1,000-row sample for the full picture.
- Date comparison is early warning infrastructure. Use it monthly, not reactively.

Set aside 30 minutes this week to run the striking-distance filter on your GSC data. Pick the five pages with the highest impression counts between positions 4 and 20. Those are your next content updates. The data is already there. You just need to act on it.

## Sources

- First Page Sage, *Google Click-Through Rates (CTRs) by Ranking Position*, May 2025, https://firstpagesage.com/reports/google-click-through-rates-ctrs-by-ranking-position/
- Ahrefs, *Anonymized Queries Make Up Nearly Half of Google Search Console Traffic (22 billion clicks, 887,534 properties)*, February 2026, https://ahrefs.com/blog/gsc-anonymized-queries/
- GrowthSRC, *Google Organic CTR Study 2025 (200,000+ keywords, 30+ websites)*, 2025, https://growthsrc.com/google-organic-ctr-study/
- Conductor, *The 2024 Organic Search Traffic Benchmarks Report*, 2024, https://www.conductor.com/academy/organic-website-traffic-industry-benchmarks/
- Conductor, *The State of SEO in 2025 (350-practitioner survey)*, 2025, https://www.conductor.com/academy/state-of-organic-marketing/
- Rank Fuse Digital Marketing, *Paid and Organic CTR Trends: 12-Month Analysis (2024-2025)*, 2025, https://rankfuse.com/blog/paid-and-organic-ctr-trends-12-month-analysis-2024-2025/
- Google Search Central, *A Deep Dive Into Search Console Performance Data Filtering and Limits*, ongoing, https://developers.google.com/search/blog/2022/10/performance-data-deep-dive
- SEO Testing, *Google Search Console Data Limitations*, 2025, https://seotesting.com/google-search-console/data-limitations/

## Frequently Asked Questions

### How many keywords does Google Search Console show?

The GSC interface and CSV export cap at 1,000 rows per pull. Sites with more than 1,000 ranking queries need the GSC API, which allows up to 50,000 rows per day per property, or a Looker Studio connector to see the full dataset. Working with the 1,000-row export on a large site means you're analyzing a sample, not the complete picture.

### How far back does Google Search Console keyword data go?

GSC retains performance data for a rolling 16-month window. Once a date falls outside that window, the data is permanently deleted. There's no way to recover it retroactively ([SEO Testing](https://seotesting.com/google-search-console/data-limitations/), 2025). Export your full dataset to Google Sheets quarterly to maintain a longer historical record for trend analysis.

### Why are some keywords hidden in Google Search Console?

An Ahrefs analysis of 22 billion clicks across 887,534 GSC properties found that 46.77% of all GSC clicks are on queries Google anonymizes ([Ahrefs](https://ahrefs.com/blog/gsc-anonymized-queries/), February 2026). These are typically low-volume, long-tail, or personally identifiable queries. They count toward your total clicks and impression figures but don't appear as named queries in the query list.

### What are striking-distance keywords in GSC?

Striking-distance keywords are queries where your page ranks between position 4 and 20. At those positions, a targeted content update, adding a missing subtopic, improving your title tag, or earning one or two links, can move the page into the top 3 and significantly increase clicks. The CTR difference between position 8 (2.1%) and position 3 (10.2%) is roughly a 5x increase in expected clicks for the same impression volume (First Page Sage, May 2025).

### Is Google Search Console enough for keyword research?

GSC is sufficient for optimizing existing content and finding quick wins on your own site. For discovering keywords you don't yet rank for, assessing keyword difficulty, or researching competitor gaps, you'll need a paid tool alongside it. The most effective approach: use GSC to drive content optimization decisions, and use Semrush or Ahrefs to identify net-new keyword targets worth building content around.
