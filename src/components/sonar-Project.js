const sonarqubeScanner = require ("sonarqube-scanner");
sonarqubeScanner (
  {
    serverUrl: "http: // localhost: 9000",
    token: "59ecc7f71f6df7806677faeb8f3e2f54ddc9d7b7",
    opciones: {
      "sonar.sources": "./src",
      "sonar.exclusions": "** / __ pruebas __ / **",
      "sonar.tests": "./src/__tests__",
      "sonar.test.inclusions": "./src/__tests__/**/*.test.tsx,./src/__tests__/**/*.test.ts",
      "sonar.typescript.lcov.reportPaths": "cobertura / lcov.info",
      "sonar.testExecutionReportPaths": "informes / test-report.xml",
    },
  },
  () => {},
);
