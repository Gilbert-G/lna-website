module.exports = {
  ci: {
    collect: {
      url: [
        "http://localhost:3000/",
        "http://localhost:3000/features",
        "http://localhost:3000/pricing",
        "http://localhost:3000/about",
        "http://localhost:3000/contact",
        "http://localhost:3000/blog",
      ],
      startServerCommand: "npm run start",
      startServerReadyPattern: "Ready in",
      numberOfRuns: 1,
      settings: {
        preset: "desktop",
      },
    },
    assert: {
      assertions: {
        // Performance budgets
        "largest-contentful-paint": ["error", { maxNumericValue: 2500 }],
        "cumulative-layout-shift": ["error", { maxNumericValue: 0.1 }],
        "experimental-interaction-to-next-paint": [
          "warn",
          { maxNumericValue: 200 },
        ],

        // Lighthouse category scores (0-1 scale)
        "categories:performance": ["error", { minScore: 0.9 }],
        "categories:accessibility": ["error", { minScore: 0.9 }],
        "categories:best-practices": ["error", { minScore: 0.9 }],
        "categories:seo": ["error", { minScore: 0.9 }],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
