const dashboardData = {
  as_of_date: "2025-01-01",
  dashboard: {
    quadrants: [
      {
        id: "cash_sweep",
        title: "Cash & Liquidity",
        p1Count: 1,
        p2Count: 1,
        summary: "Surplus cash in one account and borrowing in another.",
      },
      {
        id: "governance",
        title: "Account Setup",
        p1Count: 1,
        p2Count: 0,
        summary: "One account is missing required setup details.",
      },
      {
        id: "templates",
        title: "Payment Templates",
        p1Count: 0,
        p2Count: 2,
        summary: "High-value and expiring templates.",
      },
      {
        id: "risk_policy",
        title: "Limits & Policy",
        p1Count: 1,
        p2Count: 0,
        summary: "Concentration limit exceeded at one institution.",
      },
    ],
  },

  alerts: [
    // ------------------------
    // CASH & LIQUIDITY
    // ------------------------
    {
      id: "ALERT-001",
      quadrantId: "cash_sweep",
      priority: "P1",
      title: "Use surplus cash to reduce borrowing",
      summary:
        "You are paying interest on borrowing while holding idle cash.",
      details:
        "You are paying interest on the borrowing at Institution C while holding 1,000,000 of idle cash at Institution A that earns little or no return. Using 750,000 of this surplus to repay part of the borrowing reduces interest cost while keeping an operating buffer in Institution A.",
      category: "Liquidity Optimization",
      recommendation:
        "Use a portion of the idle cash to reduce high-interest borrowing and improve cash efficiency.",
      accountsInvolved: [
        {
          name: "Operating Account",
          institution: "Institution A",
          balance: 1000000,
        },
        {
          name: "Credit Facility",
          institution: "Institution C",
          balance: -4000000,
        },
      ],
      status: "NEW",
    },

    {
      id: "ALERT-002",
      quadrantId: "cash_sweep",
      priority: "P2",
      title: "Invest remaining surplus cash",
      summary:
        "After repayment, remaining cash can be placed in an interest-bearing account.",
      details:
        "After repaying 750,000 towards the credit facility, 250,000 remains as surplus in Institution A. Recommend moving 200,000 to an approved interest-bearing account, keeping 50,000 as operating buffer.",
      category: "Cash Deployment",
      recommendation:
        "Move excess cash into an approved interest-bearing account to earn better returns.",
      accountsInvolved: [
        {
          name: "Operating Account",
          institution: "Institution A",
          balance: 250000,
        },
        {
          name: "Interest-Bearing Account",
          institution: "Institution B",
          balance: 2000000,
        },
      ],
      status: "NEW",
    },

    // ------------------------
    // ACCOUNT SETUP
    // ------------------------
    {
      id: "ALERT-003",
      quadrantId: "governance",
      priority: "P1",
      title: "Unmapped account",
      summary:
        "One account is not mapped to a cost center or entity.",
      details:
        "Account ending 9823 at Institution D has no associated cost center or entity. This may cause reporting gaps.",
      category: "Data Quality",
      recommendation:
        "Map the account to a valid cost center or entity to ensure accurate reporting and compliance.",
      accountsInvolved: [
        {
          name: "Unmapped Account",
          institution: "Institution D",
          balance: 120000,
        },
      ],
      status: "NEW",
    },

    // ------------------------
    // PAYMENT TEMPLATES
    // ------------------------
    {
      id: "ALERT-004",
      quadrantId: "templates",
      priority: "P2",
      title: "High-value scheduled payment",
      summary:
        "A large repetitive payment is scheduled for today.",
      details:
        "Template PAYROLL-MAIN is scheduled for 850,000 today from Institution B. Ensure sufficient balance after recommended movements.",
      category: "Payment Risk",
      recommendation:
        "Verify available balance and ensure the scheduled payment can be executed without shortfall.",
      status: "NEW",
    },

    {
      id: "ALERT-005",
      quadrantId: "templates",
      priority: "P2",
      title: "Template nearing expiry",
      summary:
        "A commonly used payment template will expire soon.",
      details:
        "Template SUPPLIER-MAIN expires in 7 days. Review and renew if still in use.",
      category: "Template Management",
      recommendation:
        "Renew or update the template to avoid payment disruption.",
      status: "NEW",
    },

    // ------------------------
    // LIMITS & POLICY
    // ------------------------
    {
      id: "ALERT-006",
      quadrantId: "risk_policy",
      priority: "P1",
      title: "Concentration limit exceeded",
      summary:
        "Policy allows max 40% of cash per institution; one is above this limit.",
      details:
        "Institution B currently holds 65% of total cash balance, exceeding the concentration limit. Consider redistributing surplus to other approved institutions.",
      category: "Concentration Risk",
      recommendation:
        "Reallocate funds to other approved institutions to reduce concentration risk.",
      status: "NEW",
    },
  ],

  assistantSample: [
    {
      role: "user",
      message:
        "Why are you recommending using surplus cash to reduce borrowing?",
    },
    {
      role: "assistant",
      message:
        "You are paying interest on the borrowing at Institution C while holding 1,000,000 of idle cash at Institution A that earns little or no return. Using 750,000 of this surplus to repay part of the borrowing reduces interest cost while keeping an operating buffer in Institution A.",
    },
  ],
};

export default dashboardData;
